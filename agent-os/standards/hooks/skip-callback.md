# Skip Callback Pattern

Timed sequences may include a `skip()` function when appropriate for the UX.

## Pattern

```ts
const skip = useCallback(() => {
  // Jump to final state
  setDisplayedText(text)
  setIsComplete(true)
  onComplete?.()
}, [text, onComplete])

return { displayedText, isComplete, skip }
```

## When to Include Skip

Consider case by case:
- **Boot sequences** — Yes, users may have seen it before
- **Typewriter effects** — Yes, impatient users can skip
- **Critical animations** — Maybe not, if they convey important info
- **Micro-interactions** — No, too fast to need skipping

## Implementation Rules

- `skip()` should immediately set final state
- Call `onComplete` callback if one exists
- State should be indistinguishable from natural completion

## Example Usage

```tsx
// Boot sequence with keypress to skip
useEffect(() => {
  const handleKeyDown = () => {
    if (isBooting) skip()
  }
  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [isBooting, skip])
```
