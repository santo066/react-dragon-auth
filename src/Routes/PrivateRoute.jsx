import { useContext } from "react"
import { authContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(authContext);
    const location =useLocation();
    console.log(location)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}