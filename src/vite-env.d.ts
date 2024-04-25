/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CLIENT_ID: string;
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
