import { Args, ArgsType, Ctx, Field, Query, Resolver } from 'type-graphql';

// import { NotFoundError, UnauthorizedError } from '@mui/graphql';
import { NotFoundError, UnauthorizedError } from '../errors.js';

import type { Context } from '@/client/context.js';
import { prisma } from '@/client/index.js';
import { compareHash } from '@/crypto/hash.js';
import { createLoginHistory } from '@/db/login-history/index.js';

const TOKEN_MAX_AGE = 7 * 86400;

@ArgsType()
export class SignInArgs {
  @Field(() => String, { simple: true })
  userName: string;

  @Field(() => String, { simple: true })
  password: string;
}

@ArgsType()
export class ValidateArgs {
  @Field(() => String, { simple: true })
  token: string;
}

@Resolver()
export class AuthResolver {
  /**
   * Validate user credentials and return a JWT if valid.
   *
   * @param {SignInArgs} - Credentials to validate.
   * @param {Context} - Context object.
   * @returns {Promise<string>} Access token if valid, null if invalid.
   */
  @Query(() => String)
  async signIn(
    @Args(() => SignInArgs) { userName, password }: SignInArgs,
    @Ctx() { cookie: { auth }, jwt }: Context,
  ) {
    const { id, password: storedPassword } = await prisma.user.findFirst({
      where: {
        email: userName,
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (!id) {
      NotFoundError('User not found');
    }

    const isValid = compareHash(password, storedPassword);
    if (!isValid) {
      UnauthorizedError();
    }

    auth.set({
      value: await jwt.sign({ sub: id }),
      httpOnly: true,
      maxAge: TOKEN_MAX_AGE,
      path: '/profile',
    });

    const { value: token } = auth;

    await createLoginHistory(id);

    return token;
  }

  /**
   * Sign user out.
   *
   * @param {Context} - Context object.
   */
  @Query(() => Boolean)
  signOut(@Ctx() { cookie: { auth } }: Context) {
    auth.set({
      value: '',
      maxAge: 0, // Expire the cookie
    });

    return true;
  }

  /**
   * Validate user.
   *
   * @param {Context} - Context object.
   * @returns {Promise<boolean>} True if valid, false if invalid.
   */
  @Query(() => Boolean)
  async validate(@Args(() => ValidateArgs) { token }: ValidateArgs, @Ctx() { jwt }: Context) {
    if (!token) {
      return false;
    }

    await jwt.verify(token);
    return true;
  }
}
