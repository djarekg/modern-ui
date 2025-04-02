/// <reference types="vite/client" />
/// <reference types="urlpattern-polyfill" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_API: string;
  readonly VITE_PEXELS_PHOTO_URL_FORMAT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
