import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/frontend/constants'

interface UseUrlQueryStateProps {
  scrollToTop?: boolean
  defaultPage?: number
  defaultLimit?: number
}

const useUrlQueryState = ({
  scrollToTop = true,
  defaultPage = DEFAULT_PAGE,
  defaultLimit = DEFAULT_PAGE_SIZE,
}: UseUrlQueryStateProps = {}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const page = Number(searchParams.get('page') ?? defaultPage)
  const limit = Number(searchParams.get('limit') ?? defaultLimit)
  const search = searchParams.get('search') ?? ''

  const handlePageChange = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', newPage.toString())
      params.set('limit', limit.toString())
      router.push(`${pathname}?${params.toString()}`, { scroll: scrollToTop })
    },
    [searchParams, router, pathname, limit, scrollToTop],
  )

  return {
    pagination: { page, limit, handlePageChange },
    search: { search },
  }
}

export default useUrlQueryState
