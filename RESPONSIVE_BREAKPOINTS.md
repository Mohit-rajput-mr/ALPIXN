# Responsive Breakpoints Guide

## Media Query Breakpoints

This document outlines all the responsive breakpoints used in the Alpixn Technologies website.

### Breakpoint Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    DESKTOP (Default)                         │
│                      1024px+                                 │
│  • Full navigation bar                                       │
│  • Multi-column layouts                                      │
│  • Larger typography                                         │
│  • All animations enabled                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  TABLET (≤ 1024px)                           │
│  • Hamburger menu appears                                    │
│  • Reduced columns (3 → 2)                                   │
│  • Slightly smaller logo                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  TABLET/MOBILE (≤ 992px)                     │
│  • 2-column layouts                                          │
│  • Stacked sections                                          │
│  • Horizontal scrolling tabs                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    MOBILE (≤ 768px)                          │
│  • Single column layouts                                     │
│  • Larger logo (28px icon)                                   │
│  • Reduced font sizes                                        │
│  • Full-width buttons                                        │
│  • Stacked navigation                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  MOBILE SMALL (≤ 576px)                      │
│  • Footer single column                                      │
│  • Minimal padding                                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  MOBILE TINY (≤ 480px)                       │
│  • Smallest logo (26px icon)                                 │
│  • Minimal typography                                        │
│  • Maximum content density                                   │
│  • All grids to single column                                │
└─────────────────────────────────────────────────────────────┘
```

## Common Device Sizes

### Desktop
- **1920x1080** - Full HD Display (Most common)
- **1366x768** - Laptop Standard
- **1440x900** - MacBook Pro 13"
- **2560x1440** - 2K Display

### Tablet
- **1024x768** - iPad (Portrait)
- **768x1024** - iPad (Landscape)
- **834x1194** - iPad Pro 11" (Portrait)
- **820x1180** - iPad Air (Portrait)

### Mobile
- **414x896** - iPhone XR, 11, 12, 13
- **390x844** - iPhone 13 Pro, 14
- **375x667** - iPhone SE, 6, 7, 8
- **360x800** - Samsung Galaxy S20/S21 (Most common Android)
- **412x915** - Pixel 6/7

## CSS Media Query Syntax Used

```css
/* Tablet and below */
@media (max-width: 1024px) {
  /* Hamburger menu appears */
  /* Logo size reduces */
}

/* Tablet/Large Mobile */
@media (max-width: 992px) {
  /* Grids reduce to 2 columns */
}

/* Mobile */
@media (max-width: 768px) {
  /* Single column layouts */
  /* Reduced typography */
}

/* Small Mobile */
@media (max-width: 576px) {
  /* Footer single column */
}

/* Tiny Mobile */
@media (max-width: 480px) {
  /* Maximum optimization */
  /* Smallest sizing */
}
```

## Navigation Behavior by Breakpoint

### Desktop (> 1024px)
```
┌──────────────────────────────────────────────────────────────┐
│ [A] ALPIXN  Home About ▼Offshore ▼Products ▼Expertise [...] [Contact Us] │
└──────────────────────────────────────────────────────────────┘
```

### Tablet/Mobile (≤ 1024px)
```
┌──────────────────────────────────────────────────────────────┐
│ [A] ALPIXN                                            [☰]    │
└──────────────────────────────────────────────────────────────┘
│ Home                                                         │
│ About                                                        │
│ Offshore Developer        ▼                                 │
│ Products                  ▼                                 │
│ Our Expertise            ▼                                  │
│ Technologies             ▼                                  │
│ Resources                ▼                                  │
│ [Contact Us]                                                │
└──────────────────────────────────────────────────────────────┘
```

## Grid Layouts by Breakpoint

### Industries Grid
- **Desktop:** 4 columns
- **Tablet (992px):** 3 columns  
- **Mobile (768px):** 2 columns
- **Small Mobile (480px):** 1 column

### Tech Stack Grid
- **Desktop:** 5 columns
- **Large Tablet (1200px):** 4 columns
- **Tablet (992px):** 3 columns
- **Mobile (768px):** 2 columns
- **Small Mobile (480px):** 2 columns

### Feature Cards (Why Choose Us)
- **Desktop:** 3 columns
- **Tablet (992px):** 2 columns
- **Mobile (768px):** 1 column

### Testimonials
- **Desktop:** 2 columns
- **Tablet (992px):** 1 column

### Engagement Models
- **Desktop:** 3 columns
- **Tablet (992px):** 2 columns
- **Mobile (768px):** 1 column

## Touch Target Sizes

Minimum touch target sizes for mobile usability:

- **Buttons:** 44px × 44px minimum
- **Navigation Links:** 48px height (with padding)
- **Hamburger Icon:** 40px × 40px (font-size: 1.5rem)
- **Dropdown Items:** 48px height minimum

## Font Size Scaling

### Headings (Main Titles)
```
Desktop:  3.5rem (56px)
  ↓
Tablet:   2.5rem (40px)  ← 28% reduction
  ↓
Mobile:   2rem (32px)    ← 20% reduction
  ↓
Small:    1.75rem (28px) ← 12% reduction
```

### Body Text
```
Desktop:  1rem (16px)
  ↓
Mobile:   0.95rem (15.2px)  ← 5% reduction
  ↓
Small:    0.9rem (14.4px)   ← 5% reduction
```

## Spacing Scale

### Container Padding
```
Desktop:  padding: 6rem 2rem;
  ↓
Tablet:   padding: 4rem 1.5rem;  ← 33% vertical reduction
  ↓
Mobile:   padding: 3rem 1rem;    ← 25% vertical reduction
```

## Testing Checklist

- [ ] Logo scales properly on all devices
- [ ] Hamburger menu opens/closes smoothly
- [ ] All dropdowns work on mobile
- [ ] No horizontal scrolling on any device
- [ ] Touch targets are at least 44px
- [ ] Text is readable on smallest devices (320px)
- [ ] Images don't overflow containers
- [ ] Forms are usable on mobile
- [ ] Footer is readable and usable
- [ ] All animations perform well on mobile

## Browser DevTools Testing

### Chrome DevTools Device Sizes
```javascript
// Recommended test sizes
const testSizes = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 12 Pro', width: 390, height: 844 },
  { name: 'Pixel 5', width: 393, height: 851 },
  { name: 'Samsung Galaxy S20', width: 360, height: 800 },
  { name: 'iPad Mini', width: 768, height: 1024 },
  { name: 'iPad Air', width: 820, height: 1180 },
  { name: 'Surface Pro 7', width: 912, height: 1368 },
  { name: 'Desktop', width: 1920, height: 1080 }
];
```

---

**Note:** All breakpoints use `max-width` media queries, meaning styles cascade from desktop down to mobile. This is a mobile-first approach with desktop defaults.

**Last Updated:** November 12, 2025

