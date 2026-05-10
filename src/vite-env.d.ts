interface ImportMetaEnv {
    readonly VITE_SITE_VARIANT: "dev" | "prod";
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
