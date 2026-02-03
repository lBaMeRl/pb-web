# Component Folder Structure

Components organized by composition role, not feature.

## Folders

```
src/components/
├── ui/        # Leaf components (MenuItem, SocialLink, DitheredImage)
├── layout/    # Containers that compose others (Terminal, Header, Navigation)
├── screens/   # Full page content (EmployeeScreen, SocialsScreen)
├── effects/   # Visual overlays (Scanlines, Vignette)
└── boot/      # Boot sequence specific (BootSequence, BootLine, BootLogo)
```

## Rules

- **ui/** — Small, focused, receives data via props. No direct data imports.
- **layout/** — Structural containers. May import ui/ components. Define page skeleton.
- **screens/** — Import from data/, compose ui/ and layout/. One per navigation item.
- **effects/** — Pure visual, no logic. Render fixed overlays.
- **boot/** — Self-contained boot sequence. Only used during startup.

## Adding New Components

1. Is it a full page view? → `screens/`
2. Does it compose other components? → `layout/`
3. Is it a reusable UI element? → `ui/`
4. Is it a visual effect overlay? → `effects/`
