import { useAuthActions } from './use-auth-actions.js';
import { useUser } from './use-user.js';

export const useAuth = () => {
  const [user] = useUser();
  const [login, logout] = useAuthActions();

  return [user, login, logout] as const;
};
