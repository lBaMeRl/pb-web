# Options Interface Pattern

Hooks accept a single options object with a typed interface.

## Pattern

```ts
interface UseKeyboardNavigationOptions {
  itemCount: number           // Required
  onSelect?: (index: number) => void  // Optional callback
  initialIndex?: number       // Optional with default
  loop?: boolean              // Optional with default
}

export function useKeyboardNavigation({
  itemCount,
  onSelect,
  initialIndex = 0,
  loop = true,
}: UseKeyboardNavigationOptions) {
  // ...
}
```

## Naming Convention

- Interface: `Use{HookName}Options`
- Place interface directly above the hook function

## Call Site

```ts
// Named params make intent clear
const { focusedIndex } = useKeyboardNavigation({
  itemCount: tabs.length,
  onSelect: (index) => navigate(tabs[index]),
  horizontal: true,
})
```

## Why Options Object

- **Clean defaults** — Destructure with `= defaultValue` inline
- **Readable calls** — Named params, not positional arguments
- **Easy to extend** — Add optional params without breaking API
