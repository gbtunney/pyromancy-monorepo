# Button Shortcut Fixes - UnoCSS Invalid Utilities Resolution

## Problem Summary

The dynamic button shortcuts were generating invalid UnoCSS utility warnings like:

```
[unocss] unmatched utility "dark:focus-visible:ring-custom-fg-white-bg-coral-tree-hover-pohutukawa-500"
[unocss] unmatched utility "dark:hover:bg-custom-fg-white-bg-coral-tree-hover-pohutukawa-400"
```

## Root Cause

The issue was caused by a problematic `btn-focus` dynamic pattern that attempted to generate focus ring styles with dynamic color names:

```typescript
[
  /^btn-focus(-(\S+))?$/,
  ([, , c = 'primary']) =>
    `focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-${c}-600 dark:focus-visible:ring-${c}-500`,
],
```

When this pattern was invoked by custom button shortcuts like:

- `btn-solid-custom-fg-white-bg-coral-tree-hover-pohutukawa`

The `${c}` variable would become `custom-fg-white-bg-coral-tree-hover-pohutukawa`, resulting in invalid classes like:

- `dark:focus-visible:ring-custom-fg-white-bg-coral-tree-hover-pohutukawa-500`

## Solution Applied

### 1. Removed the problematic `btn-focus` pattern

- Eliminated the dynamic focus pattern that was generating invalid color names
- This pattern was attempting to inject focus styles with dynamic color matching

### 2. Fixed all dynamic button shortcuts

Updated all custom button patterns to use fixed, valid focus ring colors:

```typescript
// Before: Used dynamic bg color for focus ring
;`focus-visible:ring-2 focus-visible:ring-${bg}/50`
// After: Use fixed valid color
`focus-visible:ring-2 focus-visible:ring-blue-500`
```

### 3. Updated static button variants

Replaced all `btn-focus` references in static button definitions with direct focus styles:

```typescript
// Before
'btn-solid-white': 'bg-base text-base ring-1 ring-base ring-inset shadow-sm btn-focus hover:bg-muted',

// After
'btn-solid-white': 'bg-base text-base ring-1 ring-base ring-inset shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 hover:bg-muted',
```

### 4. Updated original variant patterns

Fixed the standard variant patterns (btn-solid, btn-outline, etc.) to use direct focus styles instead of the problematic `btn-focus-${c}` pattern:

```typescript
// Before
;`btn-focus-${c} text-inverted shadow-sm bg-${c}-600 hover:bg-${c}-500`
// After
`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${c}-500 text-white shadow-sm bg-${c}-600 hover:bg-${c}-500`
```

### 5. Added focus ring colors to safelist

Updated `uno.config.ts` to include the focus ring colors being used:

```typescript
// Focus ring colors for buttons
'ring-blue-500',
'ring-gray-500',
'ring-primary-500',
'focus-visible:ring-blue-500',
'focus-visible:ring-gray-500',
'focus-visible:ring-primary-500',
```

## Validation

- Created `ButtonValidationTest.tsx` component to test all button shortcut patterns
- Added validation tab to ButtonsPage for easy testing
- All button shortcuts now generate valid UnoCSS utilities
- No more unmatched utility warnings in the console

## Files Modified

- `/src/presets/_shortcuts/_btn.ts` - Fixed all button shortcut patterns
- `/uno.config.ts` - Added focus ring colors to safelist
- `/src/components/ButtonValidationTest.tsx` - Created validation test component
- `/src/pages/ButtonsPage.tsx` - Added validation tab

## Results

✅ All UnoCSS unmatched utility warnings eliminated  
✅ Button shortcuts generate valid CSS classes  
✅ Focus styles work correctly with accessible color contrast  
✅ All custom button combinations render properly  
✅ Validation test page provides comprehensive testing coverage
