/// <reference types="vite-plugin-svgr/client" />

declare module "@fontsource-variable/inter";

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
