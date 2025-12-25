# SafetyFirst GmbH - Arbeitssicherheit B2B Website

## Overview

A professional B2B website for an occupational safety (Arbeitssicherheit) company in Germany. The site serves as a lead generation and trust-building platform for small and medium-sized businesses seeking safety compliance services. Key services include DGUV V2 safety supervision, equipment inspections, training, fire safety, and electrical testing.

The application follows a full-stack TypeScript architecture with React frontend and Express backend, designed for German-speaking business clients in industrial, trade, and commercial sectors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Design System**: Material Design principles adapted for B2B professional services
- **Typography**: Inter font family with defined scale (48px H1 down to 14px small text)
- **Color Palette**: Trust-focused blues, grays, dark greens with high contrast

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: REST endpoints under `/api/*` prefix
- **Build Tool**: esbuild for server, Vite for client

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Current Storage**: In-memory storage class (MemStorage) with interface ready for database migration

### Project Structure
```
client/src/           # React frontend
  components/         # UI components (shadcn/ui + custom)
  pages/              # Route pages
  hooks/              # Custom React hooks
  lib/                # Utilities and query client
server/               # Express backend
  routes.ts           # API route definitions
  storage.ts          # Data access layer
shared/               # Shared types and schemas
  schema.ts           # Drizzle schema definitions
```

### Key Design Decisions
1. **Shared Schema Pattern**: Database schemas and validation rules defined once in `shared/schema.ts`, used by both frontend forms and backend API validation
2. **Component-First UI**: Heavy use of shadcn/ui primitives with custom composition for business-specific sections
3. **SEO Optimization**: German language meta tags, semantic HTML, proper heading hierarchy
4. **Mobile-First Design**: Responsive layouts with Tailwind breakpoints

## External Dependencies

### Database
- **PostgreSQL**: Required for production (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations in `./migrations` directory
- **Push Command**: `npm run db:push` to sync schema

### UI Component Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **React Hook Form**: Form handling with Zod resolver

### Build & Development
- **Vite**: Frontend dev server and bundler with HMR
- **TSX**: TypeScript execution for development server
- **Replit Plugins**: Dev banner and cartographer for Replit environment

### Session Management
- **connect-pg-simple**: PostgreSQL session store (available but not currently active)
- **express-session**: Session middleware infrastructure