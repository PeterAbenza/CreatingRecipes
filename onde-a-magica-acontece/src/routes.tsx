import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/home"
import Registro from "./Pages/Login-Registro/registro"
import Login from "./Pages/Login-Registro/login"

export default function Router() {
    const routes = createBrowserRouter([{
        path: "/",
        element: <Home/>
    },{
        path: "/register",
        element: <Registro/>
    },{
        path: "/login",
        element: <Login/>
    }]);

    return <RouterProvider router={routes}/>
}