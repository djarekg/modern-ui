export const useLogger = () => {
  const { debug, log, info, warn, error } = globalThis.MuiLogger;
  return { debug, log, info, warn, error };
};
