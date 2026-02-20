import React from 'react'
import type { Metadata } from 'next'

import { QueryClientProvider } from '@/frontend/components'
import { Navbar } from '@/shared/components'
import { LocalizationProvider } from '@/shared/components/providers'

export const metadata: Metadata = {
  title: 'Next.js ChadCN Project',
  description: 'Monolithic Next.js with Payload CMS',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocalizationProvider>
      <QueryClientProvider>
        <Navbar />
        {children}
      </QueryClientProvider>
    </LocalizationProvider>
  )
}
