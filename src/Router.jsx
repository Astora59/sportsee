import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Userpage from "./Pages/Userpage/Userpage"

const listRoutes = [
    {
        path:"/",
        element: <Home />
    },
    {
        path:"/:id",
        element: <Userpage />
    }
]

export function RoutesSite() {
    return (
        <Routes>
        {listRoutes.map(route => <Route path={route.path} element={route.element} />)}
      </Routes>
    )
}