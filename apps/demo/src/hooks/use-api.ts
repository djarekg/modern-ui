import { treaty } from '@elysiajs/eden';
import type { App } from '@mui/api';

export const useApi = () => {
  const { auth } = treaty<App>('localhost:4003');
  // const client = treaty<App>(process.env.API_URL);

  return { auth };
};
