import { useEffect, useState } from "react"
import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage"
const App = () => {

  const [user,setUser]= useState(null)
  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // })
 
  const handleLogin = (email,password)=>{
  if(email == "admin@gmail.com" && password == "123"){
    console.log("admin")    
    setUser("admin")
  }else if(email == 'user@gmail.com' && password == '123'){
    console.log("user")
    setUser("employee")
  }else{
    console.log("invalid credentials")
  }

}

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