import type { BaseAdminRequest } from '@/shared/interfaces'

export type GetProductListRequest = BaseAdminRequest

export interface GetProductListResponse {
  docs: Product[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
}

export interface GetProductDetailRequest {
  id: number
  locale?: string
  draft?: boolean
}

export type GetProductDetailResponse = Product

export interface Product {
  id: number
  name: string
  slug: string
  description?: string
  price: number
  categoryId?: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}
