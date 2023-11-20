import { createBrowserRouter, BrowserRouter,Routes, Route  } from "react-router-dom";
import LoginPage from "../views/PublicPages/LoginPage"
import LandingPage from "../views/PublicPages/LandingPage";
import CoursePage from "../views/PublicPages/CoursePage";
import TeacherPage from "../views/PublicPages/TeacherPage";
import PublicRoot from "../views/PublicPages/PublicRoot";
import DashboardPage from "../views/PrivatePages/DashboardPage";
import MyCoursePage from "../views/PrivatePages/MyCoursePage";
import ParticipantsPage from "../views/PrivatePages/ParticipantsPage";
import LeaderboardPage from "../views/PrivatePages/LeaderboardPage";






const router = createBrowserRouter([
            {   
              
                    path:'/',
                    element: <PublicRoot />,
                    children: [
                        {
                            path: '/',
                            element: <LandingPage />,
                        },
                        {
                            path: '/login',
                            element: <LoginPage />,
                            
                        },
                        {
                            path: '/course',
                            element: <CoursePage/>
                        },
                        {
                            path: '/teacher',
                            element: <TeacherPage/>
                        },
                        {
                            path: '/dashboard',
                            element: <DashboardPage />
                        },
                        {
                            path: '/mycourse',
                            element: <MyCoursePage/>
                        },
                        {
                            path: '/participants',
                            element: <ParticipantsPage />
                        },
                        {
                            path: '/leaderboard',
                            element: <LeaderboardPage />
                        }
                    ]
                
                
            },

])


export {router};

