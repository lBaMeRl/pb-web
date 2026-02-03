# CRT Visual Hierarchy

Use phosphor color variants and glow effects to establish visual hierarchy. Combines importance level with interaction state.

## Color Variants

| Class | Use Case |
|-------|----------|
| `text-phosphor-bright` | Active/focused elements, primary actions |
| `text-phosphor` | Main content, default text |
| `text-phosphor-dim` | Secondary info, labels, hints |
| `text-phosphor-dark` | Borders, disabled, metadata |

## Glow Effects

```tsx
// High emphasis (focused items, headers)
className="text-phosphor-bright text-glow-bright"

// Normal emphasis (readable content)
className="text-phosphor text-glow"

// No glow for subdued elements
className="text-phosphor-dim"
```

## Interaction States

- **Focused/Active**: `text-phosphor-bright` + `text-glow-bright` + inverted bg
- **Hover**: `text-phosphor-bright` or `hover:text-phosphor-bright`
- **Default**: `text-phosphor` + `text-glow`
- **Disabled/Inactive**: `text-phosphor-dark`, no glow

## Background Colors

- `bg-crt-black` — Solid black for image containers
- `bg-crt-black/30` — Transparent overlay for content boxes
- `bg-phosphor/10` — Subtle highlight for focused cards
- `bg-phosphor` — Full invert for focused menu items
