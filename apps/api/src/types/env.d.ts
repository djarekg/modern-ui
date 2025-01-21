declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_TOKEN_SECRET: string;
      HASH_SECRET: string;
      PORT: number;
    }
  }
}

export {};
