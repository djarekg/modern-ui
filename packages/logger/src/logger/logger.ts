import { writeToFile } from '@/logger/file-output.js';
import { LogLevel } from '@/logger/log-level.js';
import { toast } from '../toast/toast.js';

export type LoggerOptions = {
  ui: boolean;
};

export const logger = ({ ui = false }: LoggerOptions = {} as LoggerOptions) => {
  const level = globalThis.MuiLoggerLogLevel;
  const logToFile = globalThis.MuiLoggerLogToFile;
  const logToConsole = globalThis.MuiLoggerLogToConsole;
  const logQueue = globalThis.MuiLoggerLogQueue;

  const debug = (message: string, ...data: unknown[]) => {
    if (level > LogLevel.Debug) {
      return;
    }

    if (logToConsole) {
      console.debug(message, data);
    }

    if (logToFile) {
      logQueue.enqueue(() => writeToFile(message));
    }

    if (ui) {
      toast({ message, type: 'debug' });
    }
  };

  const info = (message: string, ...data: unknown[]) => {
    if (level > LogLevel.Info) {
      return;
    }

    if (logToConsole) {
      console.log(message, data);
    }

    if (logToFile) {
      logQueue.enqueue(() => writeToFile(message));
    }

    if (ui) {
      toast({ message, type: 'info' });
    }
  };

  const warn = (message: string, ...data: unknown[]) => {
    if (level > LogLevel.Warning) {
      return;
    }

    if (logToConsole) {
      console.warn(message, data);
    }

    if (logToFile) {
      logQueue.enqueue(() => writeToFile(message));
    }

    if (ui) {
      toast({ message, type: 'warning' });
    }
  };

  const error = (message: string, ...data: unknown[]) => {
    if (level > LogLevel.Error) {
      return;
    }

    if (logToConsole) {
      console.error(message, data);
    }

    if (logToFile) {
      logQueue.enqueue(() => writeToFile(message));
    }

    if (ui) {
      toast({ message, type: 'error' });
    }
  };

  return { debug, error, info, warn };
};
