# Pb.OS Retro Terminal Portfolio - Implementation Plan

## Overview

Build a retro terminal-themed portfolio website for José Chumbo, branded as **Pb.OS version 2026.1** from **Chumbo Corporation**. Green phosphor CRT aesthetic inspired by Weyland-Yutani (Alien).

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4 + Cloudflare Pages

---

## Task 1: Save Spec Documentation

Create `agent-os/specs/2026-02-01-1700-pbos-terminal-portfolio/` with:
- `plan.md` - This full plan
- `shape.md` - Shaping notes and decisions
- `references.md` - Visual references studied
- `visuals/` - Copy reference images

---

## Task 2: Project Setup

Initialize Vite + React + TypeScript project:

```bash
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss @tailwindcss/vite
```

**Files to create/modify:**
- `vite.config.ts` - Add Tailwind plugin
- `src/index.css` - Tailwind imports + CRT theme
- `tailwind.config.ts` - Custom phosphor color palette
- Add VT323 font (Google Fonts or local)

**Custom Colors:**
```
phosphor: #00ff00 (bright)
phosphor-dim: #00aa00
phosphor-dark: #003300
crt-black: #0a0a0a
crt-bg: #001100
```

---

## Task 3: CRT Effects Layer

Create the terminal container with visual effects:

**Files:**
- `src/components/layout/Terminal.tsx` - Main wrapper
- `src/components/effects/Scanlines.tsx` - Horizontal line overlay
- `src/components/effects/Vignette.tsx` - Edge darkening
- `src/index.css` - Add scanlines, vignette, flicker animations

**Effects:**
- Scanlines: repeating-linear-gradient (1px black lines)
- Vignette: radial-gradient darkening edges
- Flicker: subtle opacity animation (0.98-1.0)
- Text glow: text-shadow with phosphor color

---

## Task 4: Boot Sequence

Create the system boot animation:

**Files:**
- `src/components/boot/BootSequence.tsx` - Orchestrator
- `src/components/boot/BootLine.tsx` - Individual line with typewriter
- `src/hooks/useBootSequence.ts` - State machine
- `src/hooks/useTypewriter.ts` - Character-by-character animation
- `src/data/bootMessages.ts` - Boot message content

**Boot Flow:**
1. "CHUMBO CORPORATION BIOS v2026.1"
2. Loading messages with [OK] status
3. "Loading Pb.OS Desktop Environment..."
4. Transition to main interface
5. Press any key to skip

---

## Task 5: Keyboard Navigation System

Implement arrow key + Enter navigation:

**Files:**
- `src/hooks/useKeyboardNavigation.ts` - Navigation hook
- `src/components/ui/MenuItem.tsx` - Focusable menu item

**Behavior:**
- Arrow keys (up/down or left/right) move focus
- Enter/Space selects current item
- Visual focus indicator (brackets or highlight)
- Loop at list boundaries
- Works alongside mouse clicks

---

## Task 6: Navigation & Layout

Create header and tab navigation:

**Files:**
- `src/components/layout/Header.tsx` - Logo + system time
- `src/components/layout/Navigation.tsx` - Tab bar
- `src/App.tsx` - Route between screens

**Tabs:**
- EMPLOYEE - Profile section
- SOCIALS - Social links

**Header displays:**
- ASCII logo (left)
- "Pb.OS version 2026.1"
- System time (right)

---

## Task 7: Image Processing

Implement ASCII logo and dithered photo:

**Files:**
- `src/utils/dither.ts` - Floyd-Steinberg dithering algorithm
- `src/utils/ascii.ts` - ASCII art utilities (optional)
- `src/components/ui/AsciiLogo.tsx` - Logo display
- `src/components/ui/DitheredImage.tsx` - Canvas-based dithering
- `src/assets/ascii/logo.txt` - Pre-generated ASCII logo

**Logo:** Convert `frontend-examples/logo.jpg` to ASCII art (pre-generate)

**Profile Photo:**
- Runtime canvas dithering
- Floyd-Steinberg error diffusion
- 5-6 shade green palette
- Render to canvas element

---

## Task 8: Employee Screen

Create the profile display:

**Files:**
- `src/components/screens/EmployeeScreen.tsx`
- `src/data/profile.ts` - Profile data

**Layout (Weyland-Yutani inspired):**
```
┌─────────────────────────────────────────┐
│  [DITHERED PHOTO]  │  EMPLOYEE RECORD   │
│                    │  ─────────────────  │
│                    │  NAME: JOSE CHUMBO │
│                    │  ID: PB-2026-001   │
│                    │  STATUS: ACTIVE    │
│                    │  CLEARANCE: LVL 5  │
│                    │                    │
│                    │  [Bio text...]     │
└─────────────────────────────────────────┘
```

---

## Task 9: Socials Screen

Create social links display:

**Files:**
- `src/components/screens/SocialsScreen.tsx`
- `src/components/ui/SocialLink.tsx`
- `src/data/socials.ts` - Social link data (placeholders)

**Links:**
- LinkedIn
- GitHub
- Instagram
- YouTube

**Style:** Terminal-style buttons, keyboard navigable, open in new tab

---

## Task 10: Polish & Integration

Final integration and refinements:

- Wire up all components in App.tsx
- Test full boot → navigate → select flow
- Test keyboard navigation end-to-end
- Ensure mouse works alongside keyboard
- Fine-tune animation timings
- Mobile responsiveness (simplified layout)

---

## Task 11: Deploy to Cloudflare Pages

Configure and deploy:

1. Build production bundle: `npm run build`
2. Push to GitHub repository
3. Connect repo to Cloudflare Pages
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy and verify

---

## Project Structure

```
pb-web/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Terminal.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Navigation.tsx
│   │   ├── boot/
│   │   │   ├── BootSequence.tsx
│   │   │   └── BootLine.tsx
│   │   ├── screens/
│   │   │   ├── EmployeeScreen.tsx
│   │   │   └── SocialsScreen.tsx
│   │   ├── ui/
│   │   │   ├── AsciiLogo.tsx
│   │   │   ├── DitheredImage.tsx
│   │   │   ├── MenuItem.tsx
│   │   │   └── SocialLink.tsx
│   │   └── effects/
│   │       ├── Scanlines.tsx
│   │       └── Vignette.tsx
│   ├── hooks/
│   │   ├── useKeyboardNavigation.ts
│   │   ├── useBootSequence.ts
│   │   └── useTypewriter.ts
│   ├── utils/
│   │   └── dither.ts
│   ├── data/
│   │   ├── profile.ts
│   │   ├── socials.ts
│   │   └── bootMessages.ts
│   └── assets/
│       ├── images/
│       └── ascii/
│           └── logo.txt
└── frontend-examples/  (existing references)
```

---

## Verification

After implementation, verify:

1. **Boot Sequence**: Page loads with animated boot sequence, can skip with any key
2. **Keyboard Nav**: Arrow keys move between tabs and items, Enter selects
3. **Mouse Nav**: All items clickable, proper hover states
4. **CRT Effects**: Scanlines, vignette, and text glow visible
5. **Employee Screen**: Dithered photo renders in green-scale, profile info displays
6. **Socials Screen**: All links work, open in new tab
7. **Build**: `npm run build` succeeds without errors
8. **Deploy**: Site accessible on Cloudflare Pages URL

**Test Commands:**
```bash
npm run dev     # Local development
npm run build   # Production build
npm run preview # Preview production build locally
```
