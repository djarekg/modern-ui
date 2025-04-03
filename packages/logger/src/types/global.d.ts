declare global {
  var MuiLogger: typeof import('../logger/logger.js').Logger;
  var MuiLoggerLogDir: string;
  var MuiLoggerLogLevel: import('../logger/log-level.js').LogLevel;
  var MuiLoggerLogToFile: boolean;
  var MuiLoggerLogToConsole: boolean;
  var MuiLoggerLogQueue: import('../logger/log-queue.js').LogQueue;
}

export {};
