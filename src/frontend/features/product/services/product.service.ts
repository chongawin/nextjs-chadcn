import { isAxiosError } from 'axios'
import type { GetProductListRequest, GetProductListResponse } from '@/frontend/features/product/interfaces'
import { axiosInstance } from '@/frontend/libs'

export const getProductList = async (request: GetProductListRequest) => {
  try {
    const { data } = await axiosInstance.get<GetProductListResponse>('/api/products', {
      params: request,
    })
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data
    }
    throw error
  }
}
