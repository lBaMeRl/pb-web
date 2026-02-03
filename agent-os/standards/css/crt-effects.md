# CRT Effects Classes

Custom CSS classes for complex CRT visual effects that can't be expressed as Tailwind utilities.

## Available Effects

| Class | Effect | Usage |
|-------|--------|-------|
| `.scanlines` | Horizontal line overlay | Fixed overlay via `<Scanlines />` |
| `.vignette` | Edge darkening gradient | Fixed overlay via `<Vignette />` |
| `.crt-flicker` | Subtle opacity animation | Wrap main content |
| `.text-glow` | Green text shadow | Normal emphasis text |
| `.text-glow-bright` | Intense text shadow | Focused/active elements |
| `.cursor-blink` | Blinking cursor effect | Terminal cursor `_` |
| `.screen-on` | CRT turn-on animation | Boot sequence container |
| `.crt-scrollbar` | Themed scrollbar | Scrollable containers |
| `.tab-active` | Pulsing glow animation | Active tab indicator |

## Rules

- **Overlays** (scanlines, vignette): Always `pointer-events: none` and high z-index
- **Animations**: Subtle — opacity changes < 5%, don't distract from content
- **Glow effects**: Use theme variables, not hardcoded colors

## When to Use Custom CSS vs Tailwind

```tsx
// Tailwind: Simple, single-property styles
className="text-phosphor border border-phosphor-dark"

// Custom CSS: Multi-property effects
className="scanlines"  // Gradient + positioning + z-index
className="text-glow"  // Multi-layer text-shadow
```
