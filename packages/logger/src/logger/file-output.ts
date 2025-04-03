import fs from 'node:fs';
import path from 'node:path';

const dir = globalThis.MuiLoggerLogDir;
const filePath = path.join(__dirname, dir, 'log.txt');

/**
 * Ensures that the log file exists.
 */
export const ensureLogFile = () => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
};

/**
 * Writes a message to the log file.
 *
 * @param {string} message The message to write to the log file.
 */
export const writeToFile = (message: string) => {
  fs.appendFileSync(filePath, `${message}\n`, 'utf8');
};
