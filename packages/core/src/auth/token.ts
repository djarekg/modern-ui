import { sign } from 'jsonwebtoken';

export const createToken = (id: number): string =>
  sign({ userId: id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

export const createRefreshToken = (id: number, tokenVersion: string): string =>
  sign({ userId: id, version: tokenVersion }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  });
