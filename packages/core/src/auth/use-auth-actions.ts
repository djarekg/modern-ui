import { useCallback } from 'haunted';
import { createRefreshToken, createToken } from './token.js';
import { useUser } from './use-user.js';

export const useAuthActions = () => {
  const [user, setUser] = useUser();

  const isAuthenticated = useCallback(() => {
    return !!user;
  }, [user]);

  const login = useCallback(
    (id: number) => {
      const token = createToken(id);
      const refreshToken = createRefreshToken(id, '1'); // Example token version
      setUser({ id, token, refreshToken });
    },
    [setUser],
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  return [isAuthenticated, login, logout] as const;
};
