import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

import { DEFAULT_LOCALE } from '@/shared/constants'

export default getRequestConfig(async () => {
  const store = await cookies()
  const locale = (store.get('locale')?.value || DEFAULT_LOCALE) as 'th' | 'en'

  return {
    locale,
    messages: (await import(`@/frontend/messages/${locale}.json`)).default,
  }
})
