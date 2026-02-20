'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Button } from '@/frontend/components/ui'

const HomePage = () => {
  const t = useTranslations('home')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col items-center justify-center gap-12">
          {/* Hero Content */}
          <div className="text-center space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
              </span>
              {t('badge')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('hero.title1')}
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                {t('hero.title2')}
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all"
            >
              <Link href="/categories">
                <span className="mr-2">📁</span>
                {t('buttons.browseCategories')}
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-300 hover:border-purple-500 hover:bg-purple-50 dark:border-slate-700 dark:hover:border-purple-500 dark:hover:bg-purple-950/50"
            >
              <Link href="/products">
                <span className="mr-2">🛍️</span>
                {t('buttons.viewProducts')}
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-10 blur-2xl transition-all group-hover:opacity-20"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-2xl shadow-lg">
                  🚀
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{t('features.nextjs.title')}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('features.nextjs.description')}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 blur-2xl transition-all group-hover:opacity-20"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-2xl shadow-lg">
                  🎨
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{t('features.shadcn.title')}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('features.shadcn.description')}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 blur-2xl transition-all group-hover:opacity-20"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl shadow-lg">
                  📦
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{t('features.payload.title')}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('features.payload.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-20 w-full max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                {t('techStack.title')}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                {t('techStack.description')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-600' },
                { name: 'React 19', icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
                { name: 'TanStack Query', icon: '🔄', color: 'from-red-500 to-orange-600' },
                { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-500 to-teal-600' },
                { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
                { name: 'next-intl', icon: '🌍', color: 'from-green-500 to-emerald-600' },
                { name: 'Radix UI', icon: '✨', color: 'from-purple-500 to-pink-600' },
                { name: 'pnpm', icon: '📦', color: 'from-orange-500 to-red-600' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 text-center transition-all hover:scale-105 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 transition-opacity group-hover:opacity-10`}></div>
                  <div className="relative">
                    <div className="mb-2 text-3xl">{tech.icon}</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{tech.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Structure */}
          <div className="mt-20 w-full max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                {t('projectStructure.title')}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                {t('projectStructure.description')}
              </p>
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
        </div>
      </div>
    </div>
  )
}

export default HomePage
