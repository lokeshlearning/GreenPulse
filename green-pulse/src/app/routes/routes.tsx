import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/home-page/HomePage";
import NotFound from "./pages/NotFound";
import Dashboard from "../../features/dashboard/Dashboard";
import ErrorPage from "./pages/ErrorPage";

export const router= createBrowserRouter(
[
    {
     path:"/",
     element:<HomePage/>,
     errorElement:<ErrorPage/>
    },
    {
     path:"/dashboard",
     element:<Dashboard/>,
     errorElement:<ErrorPage/>
    },
    {
     path:"*",
     element:<NotFound/>,
     errorElement:<NotFound/>
    }
]
)