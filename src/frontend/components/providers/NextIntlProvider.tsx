'use client'

import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

interface NextIntlProviderWrapperProps {
  locale: string
  messages: any
  children: ReactNode
}

export function NextIntlProviderWrapper({
  locale,
  messages,
  children,
}: NextIntlProviderWrapperProps) {
  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages}
      timeZone="Asia/Bangkok"
    >
      {children}
    </NextIntlClientProvider>
  )
}
