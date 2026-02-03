# Animation Naming

Keyframe names describe the effect; class names add context prefix.

## Pattern

```css
/* Keyframe: semantic effect name */
@keyframes blink { ... }
@keyframes flicker { ... }
@keyframes fadeIn { ... }

/* Class: adds usage context */
.cursor-blink { animation: blink 1s step-end infinite; }
.crt-flicker { animation: flicker 0.15s infinite; }
.fade-in { animation: fadeIn 0.3s ease-out forwards; }
```

## Naming Rules

| Keyframe | Class | Why |
|----------|-------|-----|
| `blink` | `cursor-blink` | Clarifies it's for cursor elements |
| `flicker` | `crt-flicker` | Groups with other CRT effects |
| `fadeIn` | `fade-in` | Generic utility, kebab-case |
| `screenOn` | `screen-on` | Describes the CRT turn-on effect |
| `tabGlow` | `tab-active` | Describes purpose, not animation |

## Guidelines

- Keyframe: camelCase, describes visual motion (`fadeIn`, `screenOn`)
- Class: kebab-case, describes usage context (`cursor-blink`, `crt-flicker`)
- Keep keyframes and classes adjacent in CSS for easy maintenance
