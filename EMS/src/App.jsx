import { useContext, useEffect, useState } from "react"
import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage"
import { AuthContext } from "./Context/AuthProvider"
const App = () => {

  const [user,setUser]= useState(null)
  useEffect(()=>{
    setLocalStorage()
    getLocalStorage()
  },[])

  const handleLogin = (email,password)=>{
  if(AuthData && AuthData?.adminData?.find((a)=>email == a.email && password == a.password)){
    console.log("admin")    
    setUser("admin")
  }else if(AuthData && AuthData?.employeesData.find((e)=> email == e.email && password == e.password)){
    console.log("user")
    setUser("employee")
  }else{
    console.log("invalid credentials")
  }

}
    const AuthData = useContext(AuthContext)
  console.log('AuthData from context',AuthData)


  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>:''}
    
    {
      user == "admin"? <AdminDashboard/>: user == "employee"? <EmployeeDashboard/>:''
    }
   
    </>
  )
}

export default App