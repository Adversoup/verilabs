# VeriLabs - AI Venture Studio

## Overview

VeriLabs is a Turkish-language AI venture studio website built with a modern React-based stack. The application showcases the company's venture studio model, projects (Galgo and ProtoNest), team, partnership opportunities, and press updates. It features a dark, sophisticated design inspired by modern tech startups like Linear and Stripe, with a focus on typography and glassmorphism effects.

The application is a full-stack solution with a React frontend using Vite, an Express backend for API endpoints, and support for PostgreSQL database through Drizzle ORM. The site includes multiple pages describing the venture studio's mission, methodology, projects, team, and contact capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**: React 18+ with TypeScript, built using Vite for fast development and optimized production builds. The application uses a file-based routing approach with Wouter for client-side navigation.

**UI Component System**: Built on shadcn/ui component library with Radix UI primitives. All components follow the "New York" style variant with custom theming. Components are highly composable and use CVA (class-variance-authority) for variant management.

**Styling Approach**: Tailwind CSS with extensive customization for the dark theme aesthetic. Uses CSS variables for theming with support for light/dark modes. Custom color system based on HSL values with opacity controls for glassmorphism effects. Typography uses Inter font family exclusively.

**State Management**: TanStack Query (React Query) handles server state with aggressive caching (`staleTime: Infinity`). Form state managed through React Hook Form with Zod schema validation. No global client state management needed due to simple data flow.

**Design System**: Follows strict design guidelines defined in `design_guidelines.md`. Key principles include:
- Typography-focused hero sections (no large images)
- Glassmorphism cards with backdrop blur
- Consistent spacing using Tailwind's spacing scale (2, 4, 6, 8, 16, 24)
- Dark gradient backgrounds with white text at varying opacity levels
- Indigo accent color for CTAs

### Backend Architecture

**Server Framework**: Express.js running in ESM mode with TypeScript. Vite middleware integration in development for HMR (Hot Module Replacement) and seamless frontend-backend integration.

**API Design**: RESTful API with `/api` prefix. Currently implements a contact form submission endpoint (`POST /api/contact`) that validates input using Zod schemas and stores data.

**Request Processing**: Custom middleware for JSON parsing with raw body capture, request logging with duration tracking, and comprehensive error handling with Zod validation error formatting.

**Development vs Production**: In development, Vite middleware serves the React app with HMR. In production, static files are served from the `dist/public` directory after build.

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`. Supports both production database connections and in-memory storage fallback.

**Storage Abstraction**: `IStorage` interface allows swapping between `MemStorage` (in-memory Map-based) and database implementations. Currently using in-memory storage with plans for PostgreSQL integration.

**Schema Design**: 
- `users` table: Basic user authentication (username, password)
- `contacts` table: Contact form submissions with name, email, message, and timestamp

**Data Validation**: Zod schemas generated from Drizzle table definitions using `createInsertSchema`. Custom validation rules applied (e.g., email format, string length constraints with Turkish error messages).

### External Dependencies

**UI & Component Libraries**:
- Radix UI: Complete primitive component library for accessible UI elements (dialogs, dropdowns, tooltips, etc.)
- shadcn/ui: Pre-built component system built on Radix primitives
- Lucide React: Icon library for consistent iconography
- TanStack Query: Server state management and caching
- React Hook Form: Form state and validation
- Wouter: Lightweight client-side routing

**Database & ORM**:
- Drizzle ORM: Type-safe SQL query builder and schema management
- @neondatabase/serverless: Serverless PostgreSQL driver for Neon database
- Drizzle-Zod: Bridge between Drizzle schemas and Zod validation

**Build & Development Tools**:
- Vite: Frontend build tool and dev server
- TypeScript: Type safety across frontend and backend
- Tailwind CSS: Utility-first CSS framework
- PostCSS with Autoprefixer: CSS processing

**Validation & Utilities**:
- Zod: Schema validation for forms and API requests
- date-fns: Date manipulation and formatting
- clsx & tailwind-merge: Conditional className utilities

**Deployment Context**: 
- Replit-specific plugins for development (@replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner)
- Environment-based configuration for DATABASE_URL
- Build process: Vite for frontend, esbuild for backend bundling

**SEO & Meta Tags**: 
- React Helmet Async for dynamic meta tag management
- Pre-configured Open Graph and Twitter card metadata
- robots.txt and sitemap.xml for search engine optimization