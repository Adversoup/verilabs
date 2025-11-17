# Verilabs Design Guidelines

## Design Approach
**Reference-Based Approach**: Modern AI/tech startup aesthetic inspired by Linear's clean typography, Stripe's restraint, and contemporary venture studio presentations. Dark, sophisticated interface emphasizing credibility and technological expertise.

## Core Visual Identity

### Typography Hierarchy
- **Hero Headlines**: Extra large (text-4xl to text-6xl), semibold weight, tight tracking
- **Section Titles**: Large (text-2xl to text-4xl), semibold
- **Body Text**: Base to large (text-base to text-lg), regular weight
- **Supporting Text**: Small (text-sm to text-xs), 60-80% opacity for hierarchy
- **All text**: Tight tracking for modern, technical feel

### Layout System
**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 16, and 24 for consistent rhythm
- Component padding: p-4 to p-6
- Section spacing: py-16 to py-24
- Gap between elements: gap-3, gap-4, gap-6, gap-8
- Container: max-w-7xl with px-4 horizontal padding

### Color Treatment (Pre-defined)
Dark gradient foundation with glassmorphism accents:
- Primary CTA: Indigo accent
- Borders: White at 10% opacity
- Cards: White at 5% opacity with backdrop blur
- Text hierarchy: White at 100%, 80%, 70%, 60% for depth

## Component Library

### Navigation
- **Header**: Sticky, translucent with backdrop blur, 16-unit height
- Logo left, navigation center, CTA button right
- Active states with full opacity, inactive at 80%
- Mobile: Hamburger menu (implied, to be implemented)

### Hero Section
**No large hero image** - Typography-focused approach:
- Centered text layout, max-width 3xl
- Large headline with subtitle below
- Dual CTA buttons (primary + ghost) centered beneath
- Ample breathing room (py-16 minimum)

### Cards & Content Blocks
- **Project Cards**: Rounded-2xl, glassmorphism effect, generous padding (p-6)
- **Stat Cards**: Center-aligned, large numbers (text-4xl), descriptive labels below
- **Info Cards**: Grid layouts (2-3 columns on desktop, stack on mobile)
- Consistent border treatment and hover states

### CTAs & Buttons
- **Primary**: Rounded-xl, medium padding (px-4/px-5, py-2/py-3), solid background
- **Ghost**: Matching rounding, border-only style with subtle hover background
- **Placement**: Strategic positioning in hero, end of sections, navigation

### Footer
- **Multi-column layout** (4 columns desktop, stack mobile)
- Organized into: Brand/description, Pages, Resources, Contact
- Social links integrated into Resources column
- Divider with copyright/legal below
- Subtle text opacity for visual hierarchy

## Page-Specific Patterns

### Home Page
- Typography-first hero with dual CTAs
- Featured projects in 2-column grid
- 3-column stats section
- Clear visual separation between sections

### Content Pages (About, Model, Projects)
- Page title (h1) at top with generous spacing
- Introduction paragraph below title
- Content in grid layouts where appropriate (2-3 columns)
- Ordered/unordered lists for process steps

### Team & Press Pages
- Grid-based layouts for team members/articles
- Card-based presentation maintaining consistent styling
- Photo placeholders for team members

### Contact Page
- Split layout or card-based form
- Clear form fields with proper spacing
- Contact information alongside form

## Responsive Strategy
- **Desktop**: Multi-column grids, horizontal navigation
- **Tablet**: 2-column maximum, adapted navigation
- **Mobile**: Single column stack, simplified navigation (hamburger)
- Breakpoints: sm, md, lg with mobile-first approach

## Images
**Minimal image usage** - Focus on typography and UI:
- No large hero background image
- Team member photos in grid (headshots)
- Optional: Small product screenshots in project cards
- Optional: Partner/client logos if applicable
- All images should maintain consistent aspect ratios and styling

## Key Principles
- **Restraint over decoration**: Clean, purposeful design
- **Hierarchy through spacing**: Generous whitespace between sections
- **Consistent patterns**: Reuse card/button/layout patterns throughout
- **Technical credibility**: Dark theme, precise typography, professional polish
- **Performance-first**: Minimal animations, optimized assets