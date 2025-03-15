/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly GRAPHQL_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
