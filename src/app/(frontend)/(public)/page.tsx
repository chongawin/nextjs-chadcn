import type { Metadata } from 'next'

import { Route } from '@/frontend/enums'
import { HomePage } from '@/frontend/features/page/pages'
import { generatePageMetadata } from '@/frontend/utils'

export async function generateMetadata(): Promise<Metadata> {
  // Simplified metadata without database connection
  // In production, you would fetch page data from CMS
  return generatePageMetadata(Route.HOME, {
    name: 'Home',
    description: 'Welcome to Next.js ChadCN Project',
  })
}

export default async function Page() {
  return <HomePage />
}

