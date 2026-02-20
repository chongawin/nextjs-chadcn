import type { Metadata } from 'next'

interface Page {
  id?: string
  name?: string
  description?: string
  seo?: {
    title?: string
    description?: string
    image?: string
  }
}

export function generatePageMetadata(route: string, page?: Page | null): Metadata {
  const defaultTitle = 'Next.js ChadCN Project'
  const defaultDescription = 'Monolithic Next.js with Payload CMS'

  const title = page?.seo?.title || page?.name || defaultTitle
  const description = page?.seo?.description || page?.description || defaultDescription

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: route,
      type: 'website',
    },
  }
}
