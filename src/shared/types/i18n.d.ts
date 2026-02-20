import type frontendMessages from '@/frontend/messages/th.json'

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof frontendMessages
    Locale: 'th' | 'en'
  }
}
