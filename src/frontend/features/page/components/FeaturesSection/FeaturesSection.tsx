'use client'

import { useTranslations } from 'next-intl'

import { FeatureCard } from './FeatureCard'

export const FeaturesSection = () => {
  const t = useTranslations('home.features')

  const features = [
    {
      icon: '🚀',
      title: t('nextjs.title'),
      description: t('nextjs.description'),
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-blue-500',
    },
    {
      icon: '🎨',
      title: t('shadcn.title'),
      description: t('shadcn.description'),
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500',
    },
    {
      icon: '📦',
      title: t('payload.title'),
      description: t('payload.description'),
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500',
    },
  ]

  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  )
}
