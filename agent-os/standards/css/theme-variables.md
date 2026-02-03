# Theme Variables

Define colors and fonts in Tailwind 4's `@theme` block for automatic class generation.

## Structure

```css
@theme {
  --color-phosphor: #00ff00;
  --color-phosphor-bright: #33ff33;
  --color-phosphor-dim: #00aa00;
  --color-phosphor-dark: #003300;
  --color-crt-black: #0a0a0a;
  --color-crt-bg: #001100;

  --font-family-terminal: 'VT323', monospace;
}
```

## Naming Convention

- Colors: `--color-{name}` → generates `text-{name}`, `bg-{name}`, `border-{name}`
- Fonts: `--font-family-{name}` → generates `font-{name}`

## Phosphor Color Scale

| Variable | Hex | Use |
|----------|-----|-----|
| `phosphor-bright` | #33ff33 | Active/focused elements |
| `phosphor` | #00ff00 | Default text |
| `phosphor-medium` | #00cc00 | Accent highlights |
| `phosphor-dim` | #00aa00 | Secondary text |
| `phosphor-dark` | #003300 | Borders, disabled |

## Why @theme

- Tailwind 4 convention — auto-generates utility classes
- Single source of truth — vars usable in both Tailwind classes and custom CSS
- IDE support — better autocomplete for generated classes
