import { Args, ArgsType, Ctx, Field, Query, Resolver } from 'type-graphql';

import type { Context } from '@/client/context.js';
import { prisma } from '@/client/index.js';
import { compareHash } from '@/crypto/hash.js';
import { createLoginHistory } from '@/db/login-history/index.js';
import { NotFoundError, UnauthorizedError } from '@/errors.js';

const TOKEN_MAX_AGE = 7 * 86400;

@ArgsType()
export class AuthArgs {
  @Field(() => String, { simple: true })
  userName: string;

  @Field(() => String, { simple: true })
  password: string;
}

@Resolver()
export class AuthResolver {
  /**
   * Validate user credentials and return a JWT if valid.
   *
   * @param {AuthArgs} - Credentials to validate.
   * @param {Context} - Context object.
   * @returns {Promise<string>} Access token if valid, null if invalid.
   */
  @Query(() => String)
  async signIn(
    @Args(() => AuthArgs) { userName, password }: AuthArgs,
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
}
