import type { BaseAdminRequest } from '@/shared/interfaces'

export type GetCategoryListRequest = BaseAdminRequest

export interface GetCategoryListResponse {
  docs: Category[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
}

export interface GetCategoryDetailRequest {
  id: number
  locale?: string
  draft?: boolean
}

export type GetCategoryDetailResponse = Category

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}
