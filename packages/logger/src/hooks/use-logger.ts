import { toast } from '../toast/toast.js';

type LoggerOptions = {
  ui: boolean;
};

export const useLogger = ({ ui = false }: LoggerOptions = {} as LoggerOptions) => {
  const debug = (message: string, ...data: unknown[]) => {
    console.debug(message, data);

    if (ui) {
      toast({ message, type: 'debug' });
    }
  };

  const error = (message: string, ...data: unknown[]) => {
    console.error(message, data);

    if (ui) {
      toast({ message, type: 'error' });
    }
  };

  const info = (message: string, ...data: unknown[]) => {
    console.log(message, data);

    if (ui) {
      toast({ message, type: 'info' });
    }
  };

  const warn = (message: string, ...data: unknown[]) => {
    console.warn(message, data);

    if (ui) {
      toast({ message, type: 'warning' });
    }
  };

  return { debug, error, info, warn };
};
