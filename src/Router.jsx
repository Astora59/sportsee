import {createBrowserRouter} from "react-router-dom"
import Home from './Pages/Home/Home';
import Userpage from "./Pages/Userpage/Userpage"
import Error from "./Pages/Error/Error"

// const listRoutes = [
//     {
//         path:"/",
//         element: <Home />
//     },
//     {
//         path:"/:id",
//         element: <Userpage />
//     },
//     {
//         path:"*",
//         element: <Error />
//     }
// ]


const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />
    },
    {
        path:"/user/:id",
        element: <Userpage />
    },
    {
        path:"*",
        element: <Error />
    }
])

export default router 

// export function RoutesSite() {
//     return (
//         <Routes>
//         {listRoutes.map(route => <Route path={route.path} element={route.element} />)}
//       </Routes>
//     )
// }