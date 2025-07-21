# ✅ OKLCH Colors - You Already Have Them!

## 🎉 **Good News!**

When using `@unocss/preset-wind4`, **ALL standard Tailwind colors are already in OKLCH format!**

## **Standard Colors (Already OKLCH)**

```tsx
// These are all OKLCH colors:
<div className="bg-lime-500">Lime background</div>
<div className="bg-red-500">Red background</div>
<div className="bg-blue-500">Blue background</div>
<div className="bg-green-500">Green background</div>
<div className="bg-purple-500">Purple background</div>
<div className="bg-yellow-500">Yellow background</div>
<div className="bg-orange-500">Orange background</div>

// Gradients with OKLCH colors:
<div className="bg-gradient-to-r from-lime-600 to-lime-300">OKLCH Gradient</div>
<div className="bg-gradient-to-r from-red-500 to-orange-400">OKLCH Gradient</div>
<div className="bg-gradient-to-r from-blue-500 to-purple-500">OKLCH Gradient</div>
```

## **Your Custom OKLCH Colors**

```tsx
// Custom brand colors converted to OKLCH:
<div className="bg-oklch-green">Custom green in OKLCH</div>
<div className="bg-oklch-mint">Custom mint in OKLCH</div>
<div className="bg-oklch-coral">Custom coral in OKLCH</div>
<div className="bg-oklch-gold">Custom gold in OKLCH</div>

// Custom OKLCH gradients:
<div className="bg-gradient-to-r from-oklch-green to-oklch-mint">Custom OKLCH Gradient</div>
```

## **Arbitrary OKLCH Values**

```tsx
// Direct OKLCH values:
<div className="bg-[oklch(0.7_0.15_180)]">Arbitrary OKLCH background</div>
<div className="text-[oklch(0.4_0.2_220)]">Arbitrary OKLCH text</div>

// OKLCH gradients:
<div className="bg-gradient-to-r from-[oklch(0.3_0.1_150)] to-[oklch(0.9_0.05_60)]">
  Arbitrary OKLCH gradient
</div>
```

## **What This Means**

1. ✅ **No conversion needed** - `bg-lime-500` is already OKLCH
2. ✅ **Better gradients** - All your existing gradients are now perceptually uniform
3. ✅ **Wider color gamut** - Access to more vibrant colors
4. ✅ **Future-proof** - Using modern CSS color standards

## **Available Color Ranges (All OKLCH)**

- `lime-50` through `lime-950`
- `red-50` through `red-950`
- `blue-50` through `blue-950`
- `green-50` through `green-950`
- `purple-50` through `purple-950`
- `yellow-50` through `yellow-950`
- `orange-50` through `orange-950`
- `pink-50` through `pink-950`
- `indigo-50` through `indigo-950`
- `cyan-50` through `cyan-950`
- And many more!

**You've been using OKLCH colors all along! 🎨**
