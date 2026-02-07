# Date Format

All dates use DD/MM/YYYY. Use `en-GB` locale for `toLocaleDateString()`.

```ts
// Correct
date.toLocaleDateString('en-GB')  // "07/02/2026"

// Wrong
date.toLocaleDateString('en-US')  // "2/7/2026"
```

- Never use `en-US` or locale-less date formatting
- Header clock already uses `en-GB` — keep consistent
