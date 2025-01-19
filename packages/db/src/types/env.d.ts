declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HASH_SECRET: string;
    }
  }
}

export {};
