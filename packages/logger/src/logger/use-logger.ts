import memoize from '@github/memoize';

import { toast } from '../toast/toast.js';

type LoggerOptions = {
  ui: boolean;
};

export const useLogger = ({ ui = false }: LoggerOptions = {} as LoggerOptions) => {
  const debug = memoize((message: string, ...data: unknown[]) => {
    console.debug(message, data);

    if (ui) {
      toast({ message, type: 'debug' });
    }
  });

  const error = memoize((message: string, ...data: unknown[]) => {
    console.error(message, data);

    if (ui) {
      toast({ message, type: 'error' });
    }
  });

  const info = memoize((message: string, ...data: unknown[]) => {
    console.log(message, data);

    if (ui) {
      toast({ message, type: 'info' });
    }
  });

  const warn = memoize((message: string, ...data: unknown[]) => {
    console.warn(message, data);

    if (ui) {
      toast({ message, type: 'warning' });
    }
  });

  return { debug, error, info, warn };
};
