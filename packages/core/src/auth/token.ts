import { sign } from 'jsonwebtoken';

export const createToken = (id: number): string => {
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  return sign({ userId: id }, process.env['ACCESS_TOKEN_SECRET'], { expiresIn: '15m' });
};

export const createRefreshToken = (id: number, version: string): string => {
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  return sign({ userId: id, version }, process.env['REFRESH_TOKEN_SECRET'], { expiresIn: '7d' });
};
