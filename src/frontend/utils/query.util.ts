import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/frontend/constants'

interface GetUrlQueryStateOptions {
  defaultPage?: number
  defaultPageSize?: number
}

export const getUrlQueryState = (
  searchParams: Record<string, unknown> | URLSearchParams,
  options?: GetUrlQueryStateOptions,
) => {
  const page = searchParams instanceof URLSearchParams 
    ? Number(searchParams.get('page')) 
    : Number(searchParams.page)
  const pageSize = searchParams instanceof URLSearchParams
    ? Number(searchParams.get('limit'))
    : Number(searchParams.limit)
  const search = searchParams instanceof URLSearchParams
    ? searchParams.get('search')
    : searchParams.search

  return {
    page: page || options?.defaultPage || DEFAULT_PAGE,
    pageSize: pageSize || options?.defaultPageSize || DEFAULT_PAGE_SIZE,
    search: search ?? '',
  }
}
