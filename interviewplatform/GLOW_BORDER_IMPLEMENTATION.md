# Glow Border Animation Implementation

## Overview
This implementation adds a smooth, mouse-follow glow border animation to FAQ question cards in a Next.js + Tailwind CSS component. The glow effect follows the user's cursor globally and applies a beautiful border-only gradient to each card.

## Features

✅ **Global Pointer Tracking** - Updates CSS variables `--mx` and `--my` on `:root` using `requestAnimationFrame` throttling  
✅ **Event Tracking** - Monitors `pointermove`, `pointerdown`, and `pointerleave` events globally  
✅ **Reusable CSS Class** - `glow-border` class can be applied to any element  
✅ **Border-Only Effect** - Uses CSS mask/webkit-mask with XOR (exclude) compositing to create border-only glow  
✅ **Customizable Variables** - Control border width, glow color, opacity, and fade distance via CSS variables  
✅ **Rounded Corner Support** - Works seamlessly with `border-radius`  
✅ **Accessibility** - Respects `prefers-reduced-motion` by reducing glow opacity  
✅ **Smooth Hover Animation** - FAQ cards scale smoothly on hover with Tailwind transitions  
✅ **Next.js App Router** - Fully compatible with "use client" directive  

## Files Modified/Created

### 1. [app/globals.css](app/globals.css)
Added global CSS variables and the `.glow-border` class:

```css
:root {
  --mx: 0px;           /* Mouse X position */
  --my: 0px;           /* Mouse Y position */
  --bw: 2px;           /* Border width */
  --spot-hsl: 39, 94%; /* Glow color (HSL) - orange */
  --spot-alpha: 0.6;   /* Glow opacity */
  --spot-fade: 100px;  /* Fade distance */
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --spot-alpha: 0.2; /* Reduced opacity for accessibility */
  }
}
```

The `.glow-border::before` pseudo-element creates the effect:
- Uses `radial-gradient` centered at mouse position
- Uses double radial-gradient with `mask-composite: intersect` to create border-only effect
- Respects `border-radius: inherit`

### 2. [app/hooks/usePointerTracker.ts](app/hooks/usePointerTracker.ts)
Custom React hook that initializes global pointer tracking:

```typescript
export const usePointerTracker = () => {
  useEffect(() => {
    // Tracks pointer movement and updates CSS variables
    // Uses requestAnimationFrame for performance optimization
    // Throttles updates to prevent excessive reflows
  }, []);
};
```

**Key Features:**
- Runs once on component mount with empty dependency array
- Updates `--mx` and `--my` CSS variables on `:root`
- Uses `requestAnimationFrame` to throttle updates
- Tracks `pointermove`, `pointerdown`, and `pointerleave` events
- Cleans up event listeners on unmount

### 3. [app/components/landing/faq.tsx](app/components/landing/faq.tsx)
Updated FAQ component to use the new glow-border system:

**Key Changes:**
- Removed per-card mouse event handlers
- Removed local glow position state and animation refs
- Calls `usePointerTracker()` hook on component mount
- Applied `glow-border` class to each FAQ card container
- Set CSS variables inline for customization per card
- Added smooth hover scale animation with Tailwind

**Usage in JSX:**
```tsx
<div className="glow-border faq-card"
  style={
    {
      '--bw': '2px',
      '--spot-hsl': '39, 94%',
      '--spot-alpha': '0.6',
      '--spot-fade': '100px',
    } as React.CSSProperties
  }
>
  {/* Card content */}
</div>
```

## How It Works

### 1. Global Pointer Tracking
When any FAQ card mounts, `usePointerTracker()` initializes the global pointer listener:
- Window-level `pointermove` event updates mouse coordinates
- Updates are throttled with `requestAnimationFrame` for performance
- CSS variables `--mx` and `--my` are set on the document root

### 2. Glow Border Rendering
Each card with `glow-border` class displays the glow effect:
- `::before` pseudo-element covers the entire card
- `radial-gradient` uses global mouse position to create dynamic gradient
- Gradient appears to follow the mouse across all cards simultaneously
- Mask compositing extracts only the border portion (no inner fill)

### 3. Visual Effect
- Glow appears at card corners and edges nearest the cursor
- Smooth fade-out controlled by `--spot-fade` distance
- Color controlled by `--spot-hsl` (orange: 39, 94%)
- Opacity controlled by `--spot-alpha` (60% by default)
- Works with `border-radius` on any container

## CSS Variable Reference

| Variable | Default | Purpose |
|----------|---------|---------|
| `--mx` | 0px | Global mouse X position (updated by tracker) |
| `--my` | 0px | Global mouse Y position (updated by tracker) |
| `--bw` | 2px | Border width / glow ring thickness |
| `--spot-hsl` | 39, 94% | Glow color in HSL format (hue, saturation%) |
| `--spot-alpha` | 0.6 | Glow opacity (0-1) |
| `--spot-fade` | 100px | Distance over which glow fades to transparent |

## Customization

### Change Glow Color
Update `--spot-hsl` in CSS or inline styles:

```css
/* Purple glow */
--spot-hsl: 270, 100%;

/* Blue glow */
--spot-hsl: 220, 100%;

/* Red glow */
--spot-hsl: 0, 100%;
```

### Change Border Width
```css
--bw: 1px;  /* Thin border */
--bw: 4px;  /* Thick border */
```

### Change Glow Opacity
```css
--spot-alpha: 0.3;  /* Subtle */
--spot-alpha: 1.0;  /* Maximum */
```

### Per-Card Customization
Override variables inline:

```tsx
<div className="glow-border"
  style={{
    '--bw': '4px',
    '--spot-hsl': '270, 100%',
    '--spot-alpha': '0.8',
  } as React.CSSProperties}
>
  Custom glow card
</div>
```

## Performance Considerations

1. **RequestAnimationFrame Throttling** - Mouse position updates are throttled to the display refresh rate (typically 60fps)
2. **Shared Pointer Tracker** - Single global listener instead of per-card listeners
3. **CSS-Based Animation** - No JavaScript animation frames per card
4. **GPU Acceleration** - Gradients and masks leverage GPU for smooth rendering
5. **Passive Event Listeners** - Pointer events don't block scrolling (default behavior)

## Browser Support

- ✅ Chrome/Edge 88+ (full support)
- ✅ Firefox 85+ (full support)
- ✅ Safari 14+ (full support with -webkit- prefixes)
- ✅ Mobile browsers (touch-to-glow support)

The implementation uses:
- `radial-gradient()` - Widely supported
- `mask` / `-webkit-mask` - Webkit and modern browsers
- `mask-composite: intersect` - Modern browsers; `-webkit-mask-composite: xor` for Safari
- CSS Variables - All modern browsers

## Accessibility

### Reduced Motion
The implementation respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --spot-alpha: 0.2;
  }
}
```

Users with motion sensitivity will see a much dimmer glow that doesn't distract.

### Keyboard & Screen Readers
- No impact on keyboard navigation
- No impact on screen readers
- Glow is purely visual enhancement
- All content remains accessible

## Usage Example

The FAQ component automatically enables glow-border animation on all cards:

```tsx
"use client";

import { useState } from "react";
import { usePointerTracker } from "@/app/hooks/usePointerTracker";

const Faq = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  
  // Initialize global pointer tracker on mount
  usePointerTracker();

  return (
    <section>
      {/* Header and title */}
      
      {/* FAQ Cards with glow border */}
      <div className="glow-border faq-card">
        {/* Card content */}
      </div>
    </section>
  );
};
```

## Troubleshooting

### Glow doesn't appear
- Check browser console for errors
- Verify `usePointerTracker()` is called in component
- Ensure `glow-border` class is applied to card
- Check that CSS variables are set in globals.css

### Glow is too bright/dim
- Adjust `--spot-alpha` value (0-1 scale)
- Test in `prefers-reduced-motion: reduce` mode

### Glow appears in wrong location
- Verify `--mx` and `--my` are being updated (inspect `:root` in DevTools)
- Check that pointer events are firing globally

### Performance issues
- `requestAnimationFrame` throttling already applied
- If still slow, reduce `--spot-fade` distance or `--spot-alpha` opacity

## Future Enhancements

Possible improvements:
- Add `--mx-local` / `--my-local` for card-relative positioning
- Add glow intensity pulsing animation
- Add color cycling through HSL
- Add click/tap feedback pulse
- Add parallax effect with depth
