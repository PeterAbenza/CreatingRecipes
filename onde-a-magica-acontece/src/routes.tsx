import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/home"
import Registro from "./Pages/Login-Registro/registro"

export default function Router() {
    const routes = createBrowserRouter([{
        path: "/",
        element: <Home/>
    },{
        path: "/register",
        element: <Registro/>
    }]);

    return <RouterProvider router={routes}/>
}