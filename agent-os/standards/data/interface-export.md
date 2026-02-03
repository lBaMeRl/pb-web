# Interface + Export Pattern

Colocate TypeScript interfaces with their data in the same file.

## Structure

```ts
// src/data/profile.ts

export interface ProfileData {
  name: string
  id: string
  // ...
}

export const profile: ProfileData = {
  name: 'JOSÉ CHUMBO',
  id: 'PB-2023-12',
  // ...
}
```

## Rules

- Interface defined first, data exported second
- Interface name = `{DataName}Data` or `{DataName}Entry` for arrays
- Export both interface AND const (components may need either)
- One domain concept per file (profile.ts, socials.ts, experience.ts)

## Why

- Small project — separate types/ folder is overkill
- Colocation — type and data change together, edit one file
- Import convenience — `import { profile, ProfileData } from '../../data/profile'`
