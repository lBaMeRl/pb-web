# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pb.OS is a retro terminal-themed portfolio website built with React 19, TypeScript, Vite 7, and Tailwind CSS 4. It simulates a vintage computer OS with boot sequence, CRT visual effects, and keyboard navigation.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # TypeScript compilation + Vite build
npm run preview   # Preview production build locally
```

Deployment is handled via Cloudflare Pages (wrangler.jsonc).

## Architecture

### Component Organization

- **`src/components/boot/`** - Boot sequence with timed text display and dithered logo
- **`src/components/layout/`** - Terminal wrapper, Header (with live clock), Navigation
- **`src/components/screens/`** - Content screens (EmployeeScreen, SocialsScreen)
- **`src/components/ui/`** - Reusable components (MenuItem, SocialLink, DitheredImage, AsciiLogo)
- **`src/components/effects/`** - CRT visual effects (Scanlines, Vignette)

### State Flow

App.tsx manages boot completion state and current screen selection. Navigation state is passed down via props. No state management library is needed for this scope.

### Custom Hooks

- `useBootSequence` - Manages boot sequence timing and progression
- `useKeyboardNavigation` - Arrow keys, Enter, Home, End with focus management
- `useTypewriter` - Typewriter text animation effect
- `usePreloadedImage` - Image loading and preprocessing

### Key Utility

`utils/dither.ts` implements Floyd-Steinberg dithering to convert images to a 6-level green phosphor palette, creating the retro CRT aesthetic.

### Data Layer

Static data files in `src/data/` (profile.ts, socials.ts, bootMessages.ts). Social URLs are configured via environment variables (VITE_LINKEDIN_URL, VITE_GITHUB_URL, etc.) - see `.env.example`.

## Styling Approach

- Tailwind CSS utilities for layout
- Custom CSS in `index.css` for CRT effects (scanlines, vignette, flicker, glow)
- Theme variables in `:theme` block for green phosphor color scheme (#00ff00, #003300, #001100)
- Custom animations: fadeIn, screenOn, blink, flicker

## Design Principles

- Keyboard navigation first, mouse as fallback
- Full TypeScript strict mode with interfaces for all props
- Minimal dependencies (only React and React DOM in production)
- Accessibility via ARIA labels and semantic HTML

## Standards

This project has documented standards in `agent-os/standards/`. **You MUST read the relevant standard files before planning or making changes to any section of the codebase.**

| Area | Standards Location | When to Read |
|------|-------------------|--------------|
| Components | `agent-os/standards/components/` | Adding/modifying components |
| CSS/Styling | `agent-os/standards/css/` | Adding styles, animations, theme changes |
| Data Layer | `agent-os/standards/data/` | Adding/modifying data files |
| Custom Hooks | `agent-os/standards/hooks/` | Creating or modifying hooks |

### Compliance Rules

1. **Before planning**: Read all standards in the affected area(s)
2. **Before implementing**: Verify your approach complies with the standards
3. **If conflicts arise**: Ask the user whether to make an exception or update the standard — do not silently deviate
4. **Index file**: `agent-os/standards/index.yml` lists all standards with descriptions
