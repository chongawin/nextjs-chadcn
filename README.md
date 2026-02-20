# Next.js ChadCN with Payload CMS

A modern, full-stack web application built with Next.js 16, Payload CMS, and shadcn/ui components. This project follows a monolithic architecture with clear separation between frontend, backend (Payload CMS), and shared code.

## 📚 Documentation

- **[🚀 Getting Started](#getting-started)** - Setup and installation instructions
- **[🏗️ Project Architecture](#project-architecture)** - Architecture overview and folder structure
- **[🗄️ Database](#database-setup)** - Database configuration and migrations
- **[📦 Collections](#collections)** - Payload CMS collections overview
- **[🔧 Development](#development)** - Development workflow and commands

## 🏗️ Project Architecture

This project follows a **feature-based monolithic architecture** with clear separation of concerns:

```
src/
├── app/                    # Next.js App Router
│   ├── (frontend)/         # Frontend route group
│   │   ├── (public)/       # Public pages (homepage, etc.)
│   │   └── layout.tsx      # Frontend layout with providers
│   ├── (payload)/          # Payload CMS admin route group
│   │   ├── admin/          # Admin panel
│   │   ├── api/            # Payload API routes
│   │   └── layout.tsx      # Payload layout
│   ├── api/                # Custom API routes
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
│
├── frontend/               # Frontend application code
│   ├── features/           # Feature modules (category, product, page)
│   │   └── [feature]/
│   │       ├── components/ # Feature-specific components
│   │       ├── hooks/      # React Query hooks
│   │       ├── services/   # API service functions
│   │       ├── interfaces/ # TypeScript interfaces
│   │       ├── enums/      # Enums and constants
│   │       └── pages/      # Page components
│   ├── components/         # Shared components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── layouts/        # Layout components
│   │   ├── providers/      # React context providers
│   │   └── icons/          # Icon components
│   ├── messages/           # i18n translation files
│   │   ├── th.json         # Thai translations
│   │   └── en.json         # English translations
│   ├── hooks/              # Global hooks
│   ├── utils/              # Utility functions
│   ├── libs/               # Third-party lib wrappers
│   ├── constants/          # Global constants
│   ├── enums/              # Global enums
│   └── interfaces/         # Global interfaces
│
├── payload/                # Payload CMS backend code
│   ├── features/           # CMS feature modules
│   │   └── [feature]/
│   │       ├── collections/    # Collection definitions
│   │       ├── components/     # Admin UI components
│   │       ├── hooks/          # Server-side hooks
│   │       └── access/         # Access control
│   ├── components/         # Shared Payload components
│   ├── hooks/              # Global Payload hooks
│   ├── migrations/         # Database migrations
│   ├── plugins/            # Custom Payload plugins
│   └── scripts/            # Utility scripts
│
├── shared/                 # Code shared between frontend and backend
│   ├── features/           # Shared feature logic
│   │   └── [feature]/
│   │       └── server/
│   │           └── services/   # Server-side services
│   ├── components/         # Shared React components
│   │   └── providers/      # Shared providers (LocalizationProvider)
│   ├── i18n/               # Internationalization config
│   │   └── request.ts      # next-intl request config
│   ├── utils/              # Shared utilities
│   ├── constants/          # Shared constants
│   ├── interfaces/         # Shared TypeScript interfaces
│   └── types/              # Shared type definitions
│
└── payload.config.ts       # Payload CMS configuration
```

### Design Principles

1. **Feature-Based Organization** - Code is organized by feature rather than by type
2. **Route Groups** - Next.js route groups separate frontend and admin concerns
3. **Server/Client Separation** - Clear distinction between server and client code
4. **Shared Code** - Common logic lives in `shared/` to avoid duplication
5. **Type Safety** - TypeScript throughout with strict type checking

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router and Turbopack
- **CMS:** [Payload CMS 3.x](https://payloadcms.com/) - Headless CMS
- **Database:** [PostgreSQL](https://www.postgresql.org/) with Postgres adapter
- **UI Library:** [shadcn/ui](https://ui.shadcn.com/) - Accessible component system
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- **State Management:** [TanStack Query](https://tanstack.com/query) - Server state management
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/) - i18n for Next.js
- **Type Safety:** [TypeScript 5](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 10+
- PostgreSQL 14+ (via Docker or local installation)

### Installation

1. **Clone the repository**
   ```bash
   cd nextjs_chadcn
   ```

2. **Copy environment variables**
   ```bash
   cp .env.example .env
   ```

3. **Configure environment variables**
   
   Update `.env` with your database connection:
   ```env
   DATABASE_URI=postgresql://localhost:5432/payload
   PAYLOAD_SECRET=your-secret-key-here
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

4. **Start PostgreSQL with Docker** (optional)
   
   If you don't have PostgreSQL installed:
   ```bash
   docker run --name postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=payload -p 5432:5432 -d postgres:14
   ```

5. **Install dependencies**
   ```bash
   pnpm install
   ```

6. **Run database migrations**
   ```bash
   pnpm payload migrate
   ```

7. **Start the development server**
   ```bash
   pnpm dev
   ```

8. **Open your browser**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)

### First Time Setup

On first launch, you'll be prompted to create an admin user. Follow the on-screen instructions.

## Development

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload
pnpm dev --turbopack  # Start dev server with Turbopack (faster)

# Building
pnpm build            # Create production build
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript type checking

# Database
pnpm migrate:create   # Create new migration
pnpm migrate          # Run pending migrations
pnpm migrate:down     # Rollback last migration
```

### Adding a New Feature

1. **Create feature directory structure**
   ```bash
   mkdir -p src/frontend/features/my-feature/{components,hooks,services,interfaces,enums}
   mkdir -p src/payload/features/my-feature/collections
   ```

2. **Define TypeScript interfaces**
   ```typescript
   // src/frontend/features/my-feature/interfaces/my-feature.interface.ts
   export interface MyFeature {
     id: string
     name: string
   }
   ```

3. **Create Payload collection**
   ```typescript
   // src/payload/features/my-feature/collections/my-feature.collection.ts
   import type { CollectionConfig } from 'payload'
   
   export const MyFeature: CollectionConfig = {
     slug: 'my-features',
     fields: [
       { name: 'name', type: 'text', required: true }
     ]
   }
   ```

4. **Add to Payload config**
   ```typescript
   // src/payload.config.ts
   import { MyFeature } from './payload/features/my-feature/collections'
   
   export default buildConfig({
     collections: [Users, Categories, Products, MyFeature]
   })
   ```

## Database Setup

### Migrations

When you make changes to collections (add fields, new collections, etc.), generate a migration:

```bash
# Create a new migration
pnpm migrate:create add-my-feature

# Apply migrations
pnpm migrate

# Rollback last migration
pnpm migrate:down
```

**Important:** Migrations are required for:
- Adding/removing collections
- Adding/removing fields
- Changing field types
- Updating access control

### Database Connection

The app connects to PostgreSQL using the `DATABASE_URI` environment variable:

```env
# Format: postgresql://[user]:[password]@[host]:[port]/[database]
DATABASE_URI=postgresql://postgres:postgres@localhost:5432/payload
```

## Collections

### Users (Authentication)

- **Purpose:** Admin users with access to CMS
- **Auth:** Email/password authentication
- **Access:** Protected admin panel

### Categories

- **Purpose:** Product categorization
- **Fields:** name, slug, description, isActive
- **Relations:** One-to-many with Products

### Products

- **Purpose:** Product management
- **Fields:** name, slug, description, price, category
- **Relations:** Belongs to Category

### Pages

- **Purpose:** CMS-managed pages
- **Fields:** name, slug, content, seo
- **Features:** SEO metadata, rich text editor

## Project Guidelines

### Naming Conventions

- **Files:** `kebab-case.tsx`, `my-component.tsx`
- **Components:** `PascalCase` - `MyComponent`
- **Functions:** `camelCase` - `myFunction`
- **Interfaces:** `PascalCase` - `MyInterface`
- **Enums:** `PascalCase` - `MyEnum`
- **Constants:** `UPPER_SNAKE_CASE` - `MY_CONSTANT`

### Import Order

1. React and Next.js imports
2. Third-party libraries
3. Internal absolute imports (`@/...`)
4. Relative imports (`./`, `../`)
5. Type imports (last)

### Component Structure

```typescript
'use client' // if client component

import { useState } from 'react'
import type { MyProps } from './types'

export function MyComponent({ prop }: MyProps) {
  const [state, setState] = useState()
  
  return <div>Content</div>
}
```

## Deployment

### Environment Variables

Required for production:
```env
DATABASE_URI=postgresql://...
PAYLOAD_SECRET=<strong-random-string>
NEXT_PUBLIC_SERVER_URL=https://your-domain.com
```

### Build for Production

```bash
pnpm build
pnpm start
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## Contributing

1. Follow the project structure and naming conventions
2. Write TypeScript with strict types
3. Use feature-based organization
4. Keep components small and focused
5. Write meaningful commit messages

## License

MIT

## Support

For questions and issues, please open a GitHub issue.
