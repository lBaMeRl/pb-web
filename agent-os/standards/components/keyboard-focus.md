# Keyboard Focus Pattern

Focusable components use controlled focus via `isFocused` prop to maintain terminal aesthetic consistency.

## Pattern

```tsx
interface Props {
  isFocused: boolean
  // ...other props
}

function Component({ isFocused }: Props) {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.focus()
    }
  }, [isFocused])

  return (
    <button ref={ref} className={isFocused ? 'focused-styles' : 'default-styles'}>
      {isFocused ? `[ ${children} ]` : children}
    </button>
  )
}
```

## Rules

- Parent component manages focus state via `useKeyboardNavigation` hook
- `isFocused` drives both visual styling AND actual DOM focus
- Focused items get brackets `[ ]`, glow effects, inverted colors
- Always include `onMouseEnter` to sync mouse hover with keyboard focus state
