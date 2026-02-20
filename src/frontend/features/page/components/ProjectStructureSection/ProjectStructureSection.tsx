'use client'

import { useTranslations } from 'next-intl'

export const ProjectStructureSection = () => {
  const t = useTranslations('home.projectStructure')

  return (
    <div className="mt-20 w-full max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{t('title')}</h2>
        <p className="text-slate-600 dark:text-slate-400">{t('description')}</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-3 text-sm font-medium text-slate-600 dark:text-slate-400">
              src/
            </span>
          </div>
        </div>
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm text-slate-700 dark:text-slate-300 font-mono leading-relaxed">
            {`├── app/                    # Next.js App Router
│   ├── (frontend)/         # Frontend routes
│   │   ├── (public)/       # Public pages
│   │   └── layout.tsx      # Frontend layout
│   ├── (payload)/          # Payload admin
│   │   ├── admin/          # Admin panel
│   │   └── layout.tsx      # Payload layout
│   ├── api/                # Custom API routes
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── frontend/               # Frontend features
│   ├── features/
│   │   ├── category/       # Category feature
│   │   ├── product/        # Product feature
│   │   └── page/           # Page feature
│   ├── components/         # UI components
│   │   ├── ui/             # shadcn/ui
│   │   ├── layouts/        # Layout components
│   │   ├── providers/      # React providers
│   │   └── icons/          # Icon components
│   ├── messages/           # i18n translations
│   │   ├── th.json         # Thai
│   │   └── en.json         # English
│   ├── hooks/              # Custom hooks
│   ├── utils/              # Utilities
│   ├── libs/               # Library wrappers
│   ├── constants/          # Constants
│   ├── enums/              # Enums
│   └── interfaces/         # TypeScript types
├── payload/                # Payload CMS
│   ├── features/           # CMS collections
│   ├── components/         # Payload components
│   ├── hooks/              # Server hooks
│   ├── migrations/         # DB migrations
│   ├── plugins/            # Custom plugins
│   └── scripts/            # Utility scripts
└── shared/                 # Shared code
    ├── components/         # Shared components
    │   └── providers/      # LocalizationProvider
    ├── i18n/               # i18n config
    │   └── request.ts      # next-intl config
    ├── features/           # Shared logic
    ├── utils/              # Utilities
    ├── constants/          # Constants
    ├── interfaces/         # Interfaces
    └── types/              # Type definitions`}
          </pre>
        </div>
      </div>
    </div>
  )
}
