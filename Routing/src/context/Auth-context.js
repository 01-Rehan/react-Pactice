import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider ({children}){

    const [isLogged,setLogged] = useState(false);

    return(
        <AuthContext.Provider value={{isLogged,setLogged}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext);
export {useAuth , AuthProvider};