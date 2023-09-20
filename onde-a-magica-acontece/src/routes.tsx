import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/home"

export default function Router() {
    const routes = createBrowserRouter([{
        path: "/",
        element: <Home/>
    },{
       //...
       
    }]);

    return <RouterProvider router={routes}/>
}