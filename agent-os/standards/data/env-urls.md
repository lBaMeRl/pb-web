# Environment Variables for URLs

External URLs use Vite environment variables with safe fallbacks.

## Pattern

```ts
url: import.meta.env.VITE_LINKEDIN_URL || '#',
```

## Rules

- Prefix: `VITE_` (required for Vite client-side exposure)
- Naming: `VITE_{PLATFORM}_URL` (e.g., `VITE_GITHUB_URL`)
- Fallback: Always `'#'` — keeps link functional, goes nowhere
- Define in `.env.example` for documentation

## .env.example

```
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_GITHUB_URL=https://github.com/yourusername
VITE_INSTAGRAM_URL=https://instagram.com/yourhandle
VITE_YOUTUBE_URL=https://youtube.com/@yourchannel
```

## Why '#' Fallback

- Link stays clickable (no broken UI)
- App works without .env during development
- Empty string could cause navigation issues
