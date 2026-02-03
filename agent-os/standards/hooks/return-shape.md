# Hook Return Shape

Custom hooks return an object with state, actions, and computed values.

## Pattern

```ts
return {
  // State values
  focusedIndex,
  visibleLines,

  // Actions (functions to call)
  setFocus,
  skip,

  // Computed/derived values
  isBooting: state === 'booting',
  isFocused: (index: number) => index === focusedIndex,
}
```

## Examples

```ts
// useKeyboardNavigation
return { focusedIndex, setFocus, isFocused }

// useBootSequence
return { state, visibleLines, skip, isBooting }

// useTypewriter
return { displayedText, isComplete, skip }

// usePreloadedImage
return { image, loading, error, isReady }
```

## Why Objects, Not Tuples

- **Named destructuring** — `{ focusedIndex }` clearer than `[0]`
- **Extensibility** — Add new values without breaking consumers
- **Self-documenting** — Property names describe purpose
