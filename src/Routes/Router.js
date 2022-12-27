import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Feed from "../Pages/Feed/Feed";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import People from "../Pages/People/People";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/feed',
                element: <Feed></Feed>
            },
            {
                path: '/people',
                element: <People></People>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])