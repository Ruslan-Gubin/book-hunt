import { baseFetch } from "./baseApi"

const fetchGet = <T>( url: string, params?: string): Promise<T> => {
  return baseFetch({url,  method: 'GET', params: params ? params : null})
}

export {
   fetchGet,
}