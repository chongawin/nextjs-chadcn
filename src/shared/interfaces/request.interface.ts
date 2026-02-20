export interface BaseSearchRequest {
  page?: number
  limit?: number
  search?: string
  sort?: string
}

export interface BaseAdminRequest<T = unknown, S = unknown> extends BaseSearchRequest {
  locale?: string
  where?: T
  select?: S
  draft?: boolean
}
