/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LINKEDIN_URL: string
  readonly VITE_GITHUB_URL: string
  readonly VITE_INSTAGRAM_URL: string
  readonly VITE_YOUTUBE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
