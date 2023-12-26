import { createSlice } from "@reduxjs/toolkit";


const userCourseSlice= createSlice({
                            name: 'user-course',
                            initialState: [
                                            {
                                                course1: [
                                                            {
                                                                tipe: 'link',
                                                                judulSubcourse: 'Link Pertemuan 1',
                                                                link: 'https',
                                                                opened: '',
                                                                due: '' 
                                                            }, 
                                                            {
                                                                tipe: 'Video',
                                                                judulSubcourse: 'Video Pembelajaran Sesi 1',
                                                                link: 'https',
                                                                opened: '',
                                                                due: ''    
                                                            },
                                                            {
                                                                tipe: 'File',
                                                                judulSubcourse: 'File Pembelajaran Sesi 1',
                                                                link: 'https',
                                                                opened: '',
                                                                due: ''    
                                                            },
                                                            {
                                                                tipe: 'Assignment',
                                                                judulSubcourse: 'Assignment Sesi 1',
                                                                link: 'https',
                                                                opened: '',
                                                                due: ''   
                                                            },
                                                        ],
                                                course2:   [
                                                            {
                                                                tipe: 'link',
                                                                judulSubcourse: 'Link Pertemuan 1',
                                                                link: 'https',
                                                                opened: '',
                                                                due: '' 
                                                            }, 
                                                            {
                                                                tipe: 'Video',
                                                                judulSubcourse: 'Video Pembelajaran Sesi 1',
                                                                link: 'https',
                                                                opened: '',
                                                                due: ''    
                                                            },
                                                            {
                                                                tipe: 'File',
                                                                judulSubcourse: 'File Pembelajaran Sesi 1',
                                                                link: 'https',
                                                                opened: '',
                                                                due: ''    
                                                            },
                                                            {
                                                                tipe: 'Assignment',
                                                                judulSubcourse: 'Assignment Sesi 1',
                                                                link: 'https',
                                                                opened: '',
                                                                due: ''    
                                                            },
                                                        ]
                                            }
                            ]
})