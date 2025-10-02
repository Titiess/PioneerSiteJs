# Design Guidelines for Pioneer Multi-Purpose Cooperative Society Ltd.

## Design Approach
**Reference-Based Approach**: Corporate microfinance aesthetic with Nigerian professional services influence. Dark, trustworthy, sophisticated design that conveys financial stability and reliability.

## Core Design Elements

### A. Color Palette

**Dark Mode Primary Colors:**
- Primary Background: `#0B2A25` (--pine) - Deep pine green
- Secondary Background: `#132E29` (--pine-2) - Slightly lighter pine for gradients
- Text on Dark: `#EDF7F2` (--mint) - Soft mint for high readability
- Neutral: `#F4F1EA` (--cream) - Rare neutral accent
- Primary CTA: `#1F6F54` (--accent) - Forest green for buttons
- Icon Accent: `#A3D65C` (--lime) - Bright lime, use sparingly
- Dark Text: `#152235` (--text) - For light backgrounds
- White: `#FFFFFF`

**Gradient Backgrounds:**
- Section gradients: Linear gradient from `--pine` to `--pine-2` (180deg)
- Dark overlay on hero: `rgba(11, 42, 37, 0.78)`

### B. Typography

**Font Family:**
- System font stack: `system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif`

**Sizes:**
- Hero H1: `clamp(2rem, 5vw, 3.5rem)` - Fluid, responsive
- Page H1: `2rem - 2.4rem`
- Headings: Bold weight, tight leading
- Body: Comfortable reading line-height
- Buttons: Bold weight

### C. Layout System

**Spacing:**
- Section padding: `64px` top/bottom (desktop)
- Card padding: `24px - 32px`
- Component spacing: Tailwind units of `4, 6, 8, 12, 16`

**Grid Systems:**
- `.grid-3`: 3 columns on desktop, collapses to 1 on mobile
- `.grid-2`: 2 columns on desktop, collapses to 1 on mobile
- Breakpoint: `768px` for mobile/tablet transition

### D. Component Library

**Header:**
- Sticky positioning with translucent background: `rgba(11, 42, 37, 0.92)`
- Backdrop blur effect
- Logo (left) + Navigation + CTA button (right)
- Active link visual state
- Reduces height on mobile

**Hero Section:**
- Full-width background image (`static/img/hero.jpg`)
- Dark overlay for text readability
- Centered content with H1 + subtitle
- Two action buttons: Primary ("Apply Now") + Outline ("View Requirements")
- Text color: `--mint` for high contrast

**Cards:**
- Translucent glass-effect background
- `1px` light border in `--mint` or similar
- Rounded corners (`8px - 12px`)
- Padding: `24px - 32px`
- Subtle shadow on hover

**Buttons:**
- `.btn-primary`: Background `--accent`, white text, rounded `10px`
- `.btn-outline`: Transparent background, `2px` mint border, mint text, rounded `10px`
- Large touch targets for accessibility
- Outline buttons on hero/images: Add backdrop blur to background

**Forms:**
- Rounded inputs (`8px`)
- Translucent background on dark sections
- High-contrast labels and text
- Clear focus states with outline
- Grid layout for multiple fields
- Error states with red border and flash messages

**Footer:**
- Dark background (darker than `--pine`)
- Subtle top border
- Copyright (left), Navigation links (right)
- Minimal height

**Sections:**
- Alternate between dark gradient backgrounds
- Consistent vertical rhythm with `64px` spacing
- Content max-width for readability

**Utility Components:**
- `.callout`: Accent background panel for CTAs
- `.alert`/`.flash`: Error/success message banners
- `<details>` accordion for FAQ with custom styling

### E. Images

**Hero Image:**
- Large background image: `static/img/hero.jpg`
- Placeholder: Dark, blurred professional office environment
- Full-width, fixed/cover positioning
- Dark overlay for text legibility

**Logo:**
- `static/img/logo.svg` 
- Placeholder: Simple lime-colored figure with "PIONEER COOPERATIVE" wordmark
- Used in header and as favicon

## Page-Specific Layouts

**Home:** Hero-only design. Clean, impactful single section.

**About:** Mission statement + "Why Choose Us" 3-card grid

**Loan Products:** Intro + 3-card product grid + callout panel

**Requirements:** Ordered list (12 items) + Apply button

**Apply:** Two-column form layout with Personal Info + Security sections

**Contact:** Two-column: Info list (left) + Contact form (right)

**FAQ:** Accordion list using `<details>`/`<summary>` elements

**Thank You:** Centered confirmation panel

## Accessibility & Responsiveness

- Semantic HTML with proper heading hierarchy
- Sufficient color contrast (mint on dark pine)
- Focus states on all interactive elements
- Alt text for all images
- Responsive grid collapse at `768px`
- Mobile-optimized navigation (hamburger if needed)
- Fluid typography with `clamp()`

## Visual Hierarchy

1. Strong hero with blurred background image draws immediate attention
2. Clear typography hierarchy with bold headings
3. Strategic use of lime accent color for icons/highlights
4. Glass-effect cards create depth and sophistication
5. Primary CTAs use accent green, secondary actions use outlined style
6. Gradients create subtle visual interest without distraction