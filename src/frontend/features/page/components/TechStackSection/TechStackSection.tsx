'use client'

import { useTranslations } from 'next-intl'

import { TechStackItem } from './TechStackItem'

export const TechStackSection = () => {
  const t = useTranslations('home.techStack')

  const techStack = [
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-600' },
    { name: 'React 19', icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
    { name: 'TanStack Query', icon: '🔄', color: 'from-red-500 to-orange-600' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-500 to-teal-600' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
    { name: 'next-intl', icon: '🌍', color: 'from-green-500 to-emerald-600' },
    { name: 'Radix UI', icon: '✨', color: 'from-purple-500 to-pink-600' },
    { name: 'pnpm', icon: '📦', color: 'from-orange-500 to-red-600' },
  ]

  return (
    <div className="mt-20 w-full max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{t('title')}</h2>
        <p className="text-slate-600 dark:text-slate-400">{t('description')}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techStack.map((tech) => (
          <TechStackItem key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  )
}
