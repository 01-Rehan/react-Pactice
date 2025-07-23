import { useAuth } from "../Auth-context";
import { Navigate } from "react-router-dom";

export const PrivateRouting = ({children}) =>{
    const {isLogged} = useAuth();

    return isLogged ? children : <Navigate to="/login" /> 

}