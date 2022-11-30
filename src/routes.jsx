import MainPage from "./pages/MainPage";
import AuthLayout from "./layouts/AuthLayout";
import {Navigate} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SigupPage";
import PostsListPage from "./pages/Posts/PostsListPage";
import PostPage from "./pages/Posts/PostPage";
import React from "react";
import PostsLayout from "./layouts/PostsLayout";

const routes = (isLoggedIn, location) => [
    {
        path:"/",
        element: <MainPage/>
    },
    {
        path:"auth",
        element: <AuthLayout/>,
        children:[{
            path: "",
            element: <Navigate to="/auth/signUp"/>
        },
            {
                path:"login",
                element: <LoginPage/>
            },
            {
                path:"signup",
                element: <SignUpPage/>
            },
            {
                path: "*",
                element: <Navigate to="/auth/signUp"/>
            }]
    },
    {
        path:"posts",
        element: isLoggedIn? (<PostsLayout/>) : (<Navigate to="/auth/login" state = {{referrer: location}}/>),
        children: [{
            path:"",
            element: <PostsListPage/>
        },
            {
                path: ":postId",
                element: <PostPage/>
            }
        ]
    },
    {
        path:"*",
        element: <Navigate to={isLoggedIn? "/posts" : "/"}/>
    }
]

export default routes;
