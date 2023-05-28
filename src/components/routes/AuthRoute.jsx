import { Outlet, Navigate } from "react-router-dom";

const AuthRoute = () => {
    if(localStorage.getItem('token'))
        return <Navigate to="/shop"/>
        
    return <Outlet />
}

export default AuthRoute;
