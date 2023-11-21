import { apiSlice } from "../../app/api/api-slice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : builder => ({
        userLibraries: builder.query({
            query: ()=>{
            return '/users/userlibraries';
            }
        }),
        usersBadges: builder.query({
            query: ({batchId})=>{
                return `/batches/${batchId}/userbadges`;
            }
        }), 
        userBadges: builder.query({
            query: () =>{
                return '/users/userbadges'
            }
        }),
        getBatch: builder.query({
            query: ({batchId})=>{
                return `/batches/${batchId}`
            }
        }),
        getMyCourse: builder.query({
            query: ({learningTrackId}) =>{
                return  `/learningTracks/${learningTrackId}`
            }
        }),
        getDetailSubcourse: builder.query({
            query: ({subCourseId}) =>{
                return `/subcourses/${subCourseId}`
            }
        }),
        updateSubcourseMaterial: builder.mutation({
            query: ({subCourseId, body}) => ({
                url: `/subcourses/${subCourseId}`, 
                method:'PATCH',
                body: body
            })  
        })


    })
})

export const { useUpdateSubcourseMaterialMutation,  useUserLibrariesQuery, useUsersBadgesQuery, useUserBadgesQuery, useGetBatchQuery,useGetMyCourseQuery, useGetDetailSubcourseQuery } = userApiSlice 