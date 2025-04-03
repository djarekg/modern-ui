import { ensureLogFile } from '@/logger/file-output.js';
import { LogQueue } from '@/logger/log-queue.js';
import { LogLevel } from './log-level.js';
import { logger } from './logger.js';

type CreateLoggerOptions = {
  dir: string;
  level: LogLevel;
  file: boolean;
  console: boolean;
};

/**
 * Initialize logger.
 *
 * @param {CreateLoggerOptions} options - Options for the logger.
 */
export const createLogger = ({
  dir = './logs',
  level = LogLevel.Info,
  file = false,
  console = true,
}: CreateLoggerOptions) => {
  globalThis.MuiLogger = logger();
  globalThis.MuiLoggerLogDir = dir;
  globalThis.MuiLoggerLogLevel = level;
  globalThis.MuiLoggerLogToFile = file;
  globalThis.MuiLoggerLogToConsole = console;
  globalThis.MuiLoggerLogQueue = new LogQueue();

  ensureLogFile();
};
