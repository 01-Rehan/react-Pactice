import React from "react"
import { useAuth } from "../../context/Auth-context";

export const Login = () => {

    const {isLogged,setLogged} = useAuth();

    function loginChecker(){
        setLogged(!isLogged);
    }

  return (
    <div style={{textAlign:"center"}}>
      <h3>This is a Login Page</h3>
      {
        !isLogged &&  <input maxLength={10} placeholder="Enter Your Number"/>
      }
      <button onClick={loginChecker} >{!isLogged ? 'Login' : 'Log Out'}</button>
    </div>
  );
};
