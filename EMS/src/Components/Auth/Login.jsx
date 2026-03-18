import { useState } from "react"
const Login = () => {
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })
    // twoway bounding 
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(formdata)
        
       setformdata({
        email:"",
        password:""
       })
        
    }
  return (
    <div className="flex items-center justify-center h-screen w-screen">
            
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
            <form className="flex flex-col items-center justify-center  " onSubmit={submitHandler}>
                <input value={formdata.email} onChange={(e)=>{setformdata({...formdata,email:e.target.value})}} required className=" outline-none bg-transparent  border-2 border-emerald-600 rounded-full px-5 py-3  text-white placeholder:text-gray-400" type="email" placeholder="Enter your email" />
                <input value={formdata.password} onChange={(e)=>{setformdata({...formdata,password:e.target.value})}} required className="outline-none bg-transparent  border-2 mt-3 border-emerald-600 rounded-full px-5 py-3  text-white placeholder:text-gray-400" type="password" placeholder="Enter your password " />
                <button className=" mt-5 outline-none  border-none bg-emerald-600 rounded px-5 py-3 text-white hover:bg-emerald-800" type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login