import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BACKEND_URL }),
    endpoints: (builder) => ({
        sentimentAnalysis: builder.query({
            query: (id) => ({
                url: `coin_data/sentiment/${id}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  }
            }),
        }),

        getloginAPI: builder.mutation({
            query: (data) => ({
                url: `auth/api/login`,
                method: 'POST',
                body:data,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  }
            }),
        }),

        getRegisterAPI: builder.mutation({
            query: (data) => ({
                url: `auth/api/register`,
                method: 'POST',
                body:data,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  }
            }),
        }),

        getRegisterVerifyAPI: builder.mutation({
            query: (data) => ({
                url: `auth/api/verify`,
                method: 'POST',
                body:data,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  }
            }),
        }),

        getForgotPasswordAPI: builder.mutation({
            query: (data) => ({
                url: `auth/api/forgot-password`,
                method: 'POST',
                body:data,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  }
            }),
        }),

        getResetPasswordAPI: builder.mutation({
            query: (data) => ({
                url: `auth/api/reset-password`,
                method: 'POST',
                body:data,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  }
            }),
        }),

        getTeamDetails: builder.query({
            query: (id) => ({
                url: `fundamental/team/${id}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  }
            }),
        }),

        getBasicCryptoInfo: builder.query({
            query: (id) => ({
                url: `fundamental/basic_info/${id}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                  }
            }),
        }),






        basicInfoTurbo: builder.query({
            query: () => ({
                url: `fetch_and_get_basic_info/turbo`,
                method: 'GET',
            }),
        }),

        basicInfoPendle: builder.query({
            query: () => ({
                url: `fetch_and_get_basic_info/pendle`,
                method: 'GET',
            }),
        }),

        basicInfoFilecoin: builder.query({
            query: () => ({
                url: `fetch_and_get_basic_info/filecoin`,
                method: 'GET',
            }),
        }),


    })
})

export const {
    useSentimentAnalysisQuery,
    useGetloginAPIMutation,
    useGetRegisterAPIMutation,
    useGetRegisterVerifyAPIMutation,
    useGetForgotPasswordAPIMutation,
    useGetResetPasswordAPIMutation,

    useGetTeamDetailsQuery,
    useGetBasicCryptoInfoQuery,


    useBasicInfoTurboQuery,
    useBasicInfoPendleQuery,
    useBasicInfoFilecoinQuery,
} = userAPI