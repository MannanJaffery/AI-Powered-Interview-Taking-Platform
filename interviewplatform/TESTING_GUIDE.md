# Testing & Visual Guide

## 🧪 How to Test the Glow Border Animation

### 1. Visual Testing
1. Start your Next.js development server:
   ```bash
   npm run dev
   ```
2. Navigate to the FAQ section of your website
3. Move your mouse around the page and observe:
   - ✅ Orange glow appears and follows cursor globally
   - ✅ Glow appears only at card borders (not filling interior)
   - ✅ Glow works on all 5 FAQ cards simultaneously
   - ✅ Smooth fade effect as glow moves away from edges
   - ✅ Glow works with rounded corners (no hard edges)

### 2. Interaction Testing
- **Expand a card**: Click/tap a question to expand
  - ✅ Card scales up smoothly on hover
  - ✅ Glow continues working in expanded state
  - ✅ Close button works
- **Mobile**: Test on touch device
  - ✅ Glow follows touch pointer
  - ✅ No console errors

### 3. Performance Testing
Open Chrome DevTools:
1. **Performance Tab**:
   - Record interaction (move mouse around FAQ section)
   - ✅ Should see smooth 60fps frame rate
   - ✅ No frame drops or jank

2. **Elements Tab**:
   - Inspect `:root` element
   - ✅ `--mx` and `--my` update as you move mouse
   - ✅ Values change to match mouse coordinates

3. **Console**:
   - ✅ No TypeScript errors
   - ✅ No console warnings

### 4. Accessibility Testing

#### Keyboard Navigation:
- Use `Tab` to navigate through FAQ items
- ✅ All items accessible via keyboard
- ✅ Enter/Space to expand/collapse
- ✅ Glow effect doesn't interfere with navigation

#### Reduced Motion Testing:
1. Open DevTools
2. Go to Rendering tab
3. Check "Emulate CSS media feature prefers-reduced-motion"
4. ✅ Glow should appear much dimmer (alpha: 0.2 instead of 0.6)
5. ✅ Glow still works but won't distract motion-sensitive users

#### Screen Reader Testing:
- Use screen reader to read FAQ items
- ✅ All text content is accessible
- ✅ Glow effect is purely visual, no impact on accessibility

### 5. Browser Compatibility Testing

Test in different browsers:
- **Chrome** ✅ Full support
- **Firefox** ✅ Full support  
- **Safari** ✅ Full support (with -webkit- prefixes)
- **Edge** ✅ Full support

### 6. Responsive Testing

#### Desktop (1920px width):
- ✅ Glow follows mouse smoothly
- ✅ All cards display properly
- ✅ Split-pane answer layout works

#### Tablet (768px width):
- ✅ Glow effect works
- ✅ Stack layout responsive
- ✅ Touch/pointer events work

#### Mobile (375px width):
- ✅ Cards fit screen
- ✅ Glow effect responsive
- ✅ Touch events update glow position

## 🔍 CSS Variables Inspector

To inspect the current CSS variables in browser console:

```javascript
// Get all CSS variables from :root
const styles = getComputedStyle(document.documentElement);
console.log('--mx:', styles.getPropertyValue('--mx'));
console.log('--my:', styles.getPropertyValue('--my'));
console.log('--bw:', styles.getPropertyValue('--bw'));
console.log('--spot-hsl:', styles.getPropertyValue('--spot-hsl'));
console.log('--spot-alpha:', styles.getPropertyValue('--spot-alpha'));
console.log('--spot-fade:', styles.getPropertyValue('--spot-fade'));

// Watch variables update in real-time:
setInterval(() => {
  const styles = getComputedStyle(document.documentElement);
  console.clear();
  console.log('--mx:', styles.getPropertyValue('--mx'));
  console.log('--my:', styles.getPropertyValue('--my'));
}, 100);
```

## 🎨 Customization Testing

### Test Color Changes:
```html
<!-- Temporarily modify a card's glow color -->
<div class="glow-border faq-card"
  style="
    --bw: 2px;
    --spot-hsl: 270, 100%; /* Change to purple */
    --spot-alpha: 0.6;
    --spot-fade: 100px;
  "
>
```

Expected: Glow changes to purple while maintaining smooth animation

### Test Border Width Changes:
```html
<div class="glow-border faq-card"
  style="
    --bw: 4px; /* Thicker border */
    --spot-hsl: 39, 94%;
    --spot-alpha: 0.6;
    --spot-fade: 100px;
  "
>
```

Expected: Glow ring appears thicker

### Test Opacity Changes:
```html
<div class="glow-border faq-card"
  style="
    --bw: 2px;
    --spot-hsl: 39, 94%;
    --spot-alpha: 1.0; /* Maximum opacity */
    --spot-fade: 100px;
  "
>
```

Expected: Glow appears much brighter/more vivid

### Test Fade Distance Changes:
```html
<div class="glow-border faq-card"
  style="
    --bw: 2px;
    --spot-hsl: 39, 94%;
    --spot-alpha: 0.6;
    --spot-fade: 200px; /* Longer fade */
  "
>
```

Expected: Glow affects larger area before fading

## 📊 Expected Behavior Checklist

### Pointer Tracking
- [ ] Global listener tracks mouse position
- [ ] CSS variables update in real-time
- [ ] requestAnimationFrame throttles updates
- [ ] No performance degradation at 60fps
- [ ] Works across entire window

### Glow Effect
- [ ] Orange glow appears at cursor position
- [ ] Glow follows mouse smoothly
- [ ] Border-only effect (no interior fill)
- [ ] Works with rounded corners
- [ ] Smooth fade transition
- [ ] Works on all FAQ cards simultaneously

### Hover Animation
- [ ] Cards scale on hover
- [ ] Transition is smooth (300ms)
- [ ] Glow effect continues during hover
- [ ] Both collapsed and expanded states scale

### Accessibility
- [ ] Reduced motion preference respected
- [ ] Glow dimmed when prefers-reduced-motion
- [ ] No impact on keyboard navigation
- [ ] No impact on screen readers
- [ ] All content remains accessible

### Code Quality
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] All Tailwind classes modern format
- [ ] Clean component structure
- [ ] Reusable hook implementation
- [ ] Proper cleanup on unmount

## 🐛 Debugging Tips

### If glow doesn't appear:
```javascript
// Check if CSS variables are being set
const root = document.documentElement;
console.log(getComputedStyle(root).getPropertyValue('--mx'));
console.log(getComputedStyle(root).getPropertyValue('--my'));

// Should output: "0px" (or cursor position like "1234px")
```

### If glow is jittery:
- Check browser performance (FPS in DevTools)
- Verify requestAnimationFrame is working
- Look for other heavy animations on page
- Check CSS isn't overriding mask properties

### If glow color is wrong:
```javascript
// Verify HSL value
const hsl = getComputedStyle(document.documentElement).getPropertyValue('--spot-hsl');
console.log(hsl); // Should be "39, 94%"
// Format: hsl(<hue>, <saturation>%, <lightness>%)
// So actual HSL becomes: hsl(39, 94%, <alpha>)
```

### If glow fills entire card instead of border:
- Check mask properties in computed styles
- Verify border-width (`--bw`) CSS variable is set
- Ensure mask-composite is 'intersect' (modern) or '-webkit-mask-composite' is 'xor' (webkit)

## 📱 Mobile Testing Considerations

### Touch/Pointer Events
- Glow updates on `pointermove` (works with touch)
- Glow updates on `pointerdown` (instant feedback)
- Glow continues until `pointerleave`

### Performance on Mobile
- RequestAnimationFrame prevents battery drain
- No per-card listeners
- Efficient CSS-based animation
- Should work smooth on mid-range devices

## ✅ Sign-Off Checklist

Before considering implementation complete:

- [ ] Visual effect matches design intent
- [ ] Smooth 60fps animation on desktop
- [ ] Works on mobile without lag
- [ ] Accessible with reduced motion
- [ ] Keyboard navigation unaffected
- [ ] No console errors or warnings
- [ ] All TypeScript types correct
- [ ] CSS variables properly scoped
- [ ] Cleanup functions execute properly
- [ ] Documentation complete
- [ ] Ready for production deployment

---

**Current Status**: ✅ Ready for testing
