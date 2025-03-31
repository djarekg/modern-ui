declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_TOKEN_SECRET: string;
      CORS_ORIGIN: string;
      PORT: number;
      PEXELS_API_KEY: string;
      PEXELS_API: string;
    }
  }
}

export {};
