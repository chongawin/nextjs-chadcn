# Next.js ChadCN Project

A monolithic architecture project combining Next.js 16 with Payload CMS, featuring a public-facing website and a comprehensive admin panel.

## 📋 Project Structure

```
nextjs_chadcn/
├── src/
│   ├── shared/              # Reusable code for both frontend and payload
│   │   ├── utils/           # Pure utility functions (type guards, formatters)
│   │   ├── constants/       # Shared constants (locales, pagination)
│   │   ├── interfaces/      # Shared TypeScript types
│   │   └── theme/           # MUI theme configuration
│   │
│   ├── frontend/            # Public-facing website
│   │   ├── features/        # Feature-based modules
│   │   │   ├── category/    # Category feature
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   ├── interfaces/
│   │   │   │   ├── services/
│   │   │   │   ├── enums/
│   │   │   │   ├── pages/
│   │   │   │   └── transforms/
│   │   │   └── product/     # Product feature
│   │   │       └── ...
│   │   ├── components/      # Global reusable components
│   │   │   ├── icons/
│   │   │   ├── ui/
│   │   │   ├── layouts/
│   │   │   └── providers/   # React Query, Theme providers
│   │   ├── hooks/           # Global hooks
│   │   ├── utils/           # Frontend utilities
│   │   ├── libs/            # External library configs (axios)
│   │   ├── constants/
│   │   ├── enums/
│   │   └── interfaces/
│   │
│   └── payload/             # Admin panel (Payload CMS)
│       ├── features/        # Feature-specific admin code
│       │   ├── category/    # Category admin
│       │   │   ├── collections/  # Collection definitions
│       │   │   ├── components/
│       │   │   ├── hooks/
│       │   │   ├── interfaces/
│       │   │   ├── pages/     # Custom admin pages
│       │   │   └── server/    # Server-side handlers & services
│       │   └── product/
│       │       └── ...
│       ├── components/      # Global admin UI components
│       │   ├── ui/          # Custom cells, fields
│       │   ├── layouts/
│       │   └── providers/
│       ├── hooks/           # Global admin hooks
│       ├── migrations/      # Database migrations
│       ├── scripts/         # Seed scripts, commands
│       ├── plugins/         # Custom Payload plugins
│       └── constants/
│
├── app/                     # Next.js app directory
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css
│
├── payload.config.ts       # Payload CMS configuration
├── tsconfig.json          # TypeScript with path aliases
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies
```

## 🏗️ Architecture Patterns

### Frontend Features Structure

Each feature (e.g., `category`, `product`) follows this pattern:

```typescript
// features/category/

// enums/category.enum.ts - Query keys and constants
export enum CategoryQueryKey {
  GET_CATEGORY_LIST = 'getCategoryList',
  GET_CATEGORY_DETAIL = 'getCategoryDetail',
}

// interfaces/category.interface.ts - TypeScript types
export interface GetCategoryListRequest extends BaseAdminRequest {}
export interface GetCategoryListResponse { /* ... */ }

// services/category.service.ts - API calls
export const getCategoryList = async (request) => {
  return await axiosInstance.get('/api/categories', { params: request })
}

// hooks/useGetCategoryList.ts - React Query hooks with locale support
const useGetCategoryList = (request, options) => {
  const locale = useLocale() // from next-intl
  return useQuery({
    queryKey: [CategoryQueryKey.GET_CATEGORY_LIST, { locale, ...request }],
    queryFn: () => getCategoryList({ locale, ...request }),
    ...options
  })
}

// pages/CategoryListPage.tsx - Client components
'use client'
export const CategoryListPage = () => { /* ... */ }

// components/ - Feature-specific UI components
```

### Payload CMS Features Structure

Each feature follows this pattern:

```typescript
// features/category/

// collections/category.collection.ts - Payload collection definition
const Categories: CollectionConfig = { /* ... */ }

// server/handlers/ - Custom API endpoints
// server/services/ - Server-side business logic
// server/hooks/ - Payload collection lifecycle hooks (beforeChange, etc.)

// hooks/ - Admin React Query hooks
const useAdminGetCategoryDetail = (request, options) => {
  const locale = useAdminLocale() // Uses payload locale
  return useQuery({
    queryKey: [CategoryQueryKey.GET_CATEGORY_DETAIL, { locale, ...request }],
    queryFn: () => getCategoryDetail({ locale, ...request }),
  })
}

// pages/ - Custom admin pages
// components/ - Admin-specific UI components
```

## 📦 Dependencies

### Core
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety

### Frontend
- **next-intl** - Internationalization
- **@tanstack/react-query** - Data fetching & caching
- **axios** - HTTP client
- **@mui/material** - UI component library

### Backend/Admin
- **Payload CMS** - Headless CMS
- **@payloadcms/ui** - Payload admin UI

### Styling
- **@emotion/react** - CSS-in-JS
- **@emotion/styled** - Styled components

## ✨ Key Features

### Path Aliases
Access modules easily with path aliases configured in `tsconfig.json`:

```typescript
import { useGetCategoryList } from '@/frontend/features/category/hooks'
import { Categories } from '@/payload/features/category/collections'
import { DEFAULT_LOCALE } from '@/shared/constants'
```

### Shared Code
Common utilities, types, and constants in `/src/shared/` are accessible to both frontend and payload:

```typescript
import type { BaseAdminRequest } from '@/shared/interfaces'
import { isCollection } from '@/shared/utils'
import { DEFAULT_LOCALE } from '@/shared/constants'
import { baseTheme } from '@/shared/theme'
```

### React Query Integration
Global React Query setup in `Providers` component with:
- 5-minute stale time
- Automatic retry on failure
- Locale-aware query keys

### i18n Support
- Frontend uses `next-intl` for public content
- Admin uses `useAdminLocale` from Payload's locale system
- Shared constants define supported locales

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Generate types from Payload collections
pnpm payload generate:types

# Run development server
pnpm dev
```

### Add a New Feature

1. **Create feature directories** (both frontend and payload):
```bash
mkdir -p src/frontend/features/myfeature/{components,hooks,interfaces,services,enums,pages,transforms}
mkdir -p src/payload/features/myfeature/{collections,components,hooks,interfaces,pages,services,server/{handlers,services,hooks}}
```

2. **Create interfaces** in `interfaces/myfeature.interface.ts`
3. **Create enums** in `enums/myfeature.enum.ts`
4. **Create services** in `services/myfeature.service.ts`
5. **Create React Query hooks** in `hooks/useGetMyFeature.ts`
6. **Create collection** in `collections/myfeature.collection.ts` (for Payload)

## 📝 Development Guidelines

### Frontend
- Use `'use client'` directive for interactive components
- Leverage React Query for server state management
- Use `useLocale()` from next-intl for i18n
- Follow MUI theming system
- Keep components in features folders (feature-specific) or components folders (generic)

### Payload Admin
- Use Payload UI components for consistency
- Server-side handlers go in `server/handlers/`
- Server-side services go in `server/services/`
- Custom hooks for collections go in `server/hooks/`
- Use `useAdminLocale()` for locale handling

### Shared Code
- Only put code used by BOTH frontend and payload here
- No frontend-specific imports (React Query, next-intl for frontend)
- No Payload-specific imports

## 🔗 API Routes

Implement API routes in `app/api/` using Next.js API routes:

```typescript
// app/api/categories/route.ts
export async function GET(request: Request) {
  const categories = await payload.find({
    collection: 'categories',
  })
  return Response.json(categories)
}
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Payload CMS Documentation](https://payloadcms.com)
- [React Query Documentation](https://react-query.tanstack.com)
- [next-intl Documentation](https://next-intl-docs.vercel.app)
- [MUI Documentation](https://mui.com)

## 📄 License

MIT
