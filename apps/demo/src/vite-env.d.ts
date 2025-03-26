/// <reference types="vite/client" />
/// <reference types="urlpattern-polyfill" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
