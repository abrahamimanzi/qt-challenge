import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const DcoreUrl = process.env.REACT_APP_D_CORE_URL

const baseQuery = fetchBaseQuery({
  baseUrl: DcoreUrl,
  prepareHeaders: (headers, {endpoint}) => {
    headers.set('Authorization', `Bearer`)
    headers.set('X-Channel', 'INTERNET_BANKING')
    headers.set('Content-Type', 'application/json')
    headers.set('accept', 'application/json')
    return headers
  },
})

const baseQueryIntercep: typeof baseQuery = async (args, api, extraOptions ) => {
  let queryResult = await baseQuery(args, api, extraOptions)
  return queryResult
}

const appApi = createApi({
  reducerPath: 'data',
  baseQuery: baseQueryIntercep,
  tagTypes: [],
  endpoints: (builder) => ({

  }),
})

export default appApi

export const {

} = appApi
