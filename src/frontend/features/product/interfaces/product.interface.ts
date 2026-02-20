import type { BaseAdminRequest } from '@/shared/interfaces'

export interface GetProductListRequest extends BaseAdminRequest {
  categoryId?: string | number
}

export interface GetProductListResponse {
  docs: Product[]
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

export interface GetProductDetailRequest {
  id: string | number
  locale?: string
  draft?: boolean
}

export type GetProductDetailResponse = Product

export interface CreateProductRequest {
  name: string
  slug: string
  description?: string
  price: number
  categoryId?: string | number
  isActive?: boolean
  locale?: string
}

export type CreateProductResponse = Product

export interface UpdateProductRequest {
  id: string | number
  name?: string
  slug?: string
  description?: string
  price?: number
  categoryId?: string | number
  isActive?: boolean
  locale?: string
}

export type UpdateProductResponse = Product

export interface DeleteProductRequest {
  id: string | number
  locale?: string
}

export interface DeleteProductResponse {
  id: string | number
  message: string
  success: boolean
}

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
