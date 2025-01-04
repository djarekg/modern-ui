import { sign } from 'jsonwebtoken';

export const createToken = (id: number): string => {
  return sign({ userId: id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};
