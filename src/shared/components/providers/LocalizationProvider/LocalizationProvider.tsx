import { NextIntlClientProvider } from 'next-intl'

const LocalizationProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>
}

export default LocalizationProvider
