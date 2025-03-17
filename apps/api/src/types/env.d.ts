declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_TOKEN_SECRET: string;
      CORS_ORIGIN: string;
      PORT: number;
    }
  }
}

export {};
