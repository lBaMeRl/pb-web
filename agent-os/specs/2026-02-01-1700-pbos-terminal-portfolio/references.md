# Visual References

## Source Images

Located in `frontend-examples/`:

1. **Jose Chumbo profile.png** - Profile photo to be dithered
2. **weyland yutani os.jpg** - Primary UI inspiration (Alien franchise terminal)
3. **background.png** - Additional reference material
4. **pip boy.png** - Fallout Pip-Boy for secondary inspiration
5. **logo.jpg** - Logo to convert to ASCII art

## Weyland-Yutani Terminal Analysis

Key visual elements from the reference:
- Green phosphor on dark background
- Clean, corporate aesthetic
- Employee record layout with photo
- Horizontal dividers
- Monospace typography
- Tab/section navigation at top
- System information in header

## CRT Effect References

Standard CRT visual effects to implement:
- **Scanlines** - Horizontal lines every 2-4px
- **Vignette** - Darker edges, brighter center
- **Flicker** - Subtle brightness variation
- **Glow** - Text shadow/bloom effect
- **Curvature** - Optional screen edge curve (CSS transform)

## Typography

- **VT323** - Google Font, authentic terminal look
- Fallback: monospace system fonts

## Color Palette

```css
--phosphor-bright: #00ff00;
--phosphor-medium: #00cc00;
--phosphor-dim: #00aa00;
--phosphor-dark: #003300;
--crt-black: #0a0a0a;
--crt-bg: #001100;
```
