import type { BaseAdminRequest } from '@/shared/interfaces'

export type GetCategoryListRequest = BaseAdminRequest

export interface GetCategoryListResponse {
  docs: Category[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

export interface GetCategoryDetailRequest {
  id: string | number
  locale?: string
  draft?: boolean
}

export type GetCategoryDetailResponse = Category

export interface CreateCategoryRequest {
  name: string
  slug: string
  description?: string
  isActive?: boolean
  locale?: string
}

export type CreateCategoryResponse = Category

export interface UpdateCategoryRequest {
  id: string | number
  name?: string
  slug?: string
  description?: string
  isActive?: boolean
  locale?: string
}

export type UpdateCategoryResponse = Category

export interface DeleteCategoryRequest {
  id: string | number
  locale?: string
}

export interface DeleteCategoryResponse {
  id: string | number
  message: string
  success: boolean
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}
