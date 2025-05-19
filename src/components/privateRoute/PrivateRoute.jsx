
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({requiredRole}) => {
    const token = localStorage.getItem("accessToken")
    const user = JSON.parse(localStorage.getItem("user"))

    if(!token || !user){
        return <Navigate to={"/"} />
    }

    if(requiredRole && user.role !== requiredRole){
        return <Navigate to={"/unauthorize"} />
    }

    return <Outlet />

}

export default PrivateRoute
