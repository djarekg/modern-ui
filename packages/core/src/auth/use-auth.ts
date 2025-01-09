import { useAuthActions } from './use-auth-actions.js';

export const useAuth = () => {
  const [isAuthenticated, login, logout] = useAuthActions();

  return { isAuthenticated, login, logout } as const;
};
