import { useState } from 'haunted';

export const useUser = () => {
  const [user, setUser] = useState(null);

  return [user, setUser] as const;
};
