import { createContext,useEffect,useState } from "react";

import { getLocalStorage } from "../Utils/localStorage";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [user,setUser]= useState(null)

 useEffect(()=>{
   const {employeesData,adminData} = getLocalStorage()
   setUser({employeesData,adminData})

 },[])

  return (
    <div>
      <AuthContext.Provider value={user}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider