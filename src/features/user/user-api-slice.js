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
                body: {...body}
            })  
        }), 
        getAllUserBadges: builder.query({
            query: () => {
                return '/userbadges'
            }
        }),
        getAllBadges: builder.query({
            query: () =>{
                return '/badges'
            }
        }),
        patchBadgesById: builder.mutation({
            query: ({userBadgeId , body}) => ({
                url: `/userbadges/${userBadgeId}`,
                method:'PATCH',
                body: {...body}
               
            })
        }),
        postBadgesById: builder.mutation({
            query: ({userBadgeId , body}) => ({
                url: `/learningtracks/${userBadgeId}`,
                method:'POST',
                body: {...body}

            })
        }),
        postUserProgress: builder.mutation({
            query: ({body}) => ({
                url: `/userprogress`,
                method: 'POST',
                body: {...body}
            })
        }), 
        getUserProgress: builder.query({
            query: ({batchId, subCourseId})=> {
                return `/userprogress/filter?batchId=${batchId}&subCourseId=${subCourseId}`
                // localhost:5000/userprogress/filter?batchId=UjSqxfyed7NP&subCourseId=nxpiqqindt_I
                
            
            }
        }),
        deleteUserProgress: builder.mutation({
            query: ({userId, batchId, subCourseId}) => ({
                url: `/userprogress/filter?userId=${userId}&batchId=${batchId}&subCourseId=${subCourseId}`,
                method: 'DELETE',
            })
        }),
        getUserProgressByBatch: builder.query({
            query: ({batchId})=>{
                return `/users/userprogress?batchId=${batchId}`
            }
        })
        


    })
})

export const { useUpdateSubcourseMaterialMutation,  useUserLibrariesQuery, 
                useUsersBadgesQuery, useUserBadgesQuery, useGetAllUserBadgesQuery,
                useGetBatchQuery,useGetMyCourseQuery, useGetDetailSubcourseQuery,
                useGetAllBadgesQuery, usePostBadgesByIdMutation, usePatchBadgesByIdMutation,
                usePostUserProgressMutation, useGetUserProgressQuery, useDeleteUserProgressMutation,
                useGetUserProgressByBatchQuery } = userApiSlice 