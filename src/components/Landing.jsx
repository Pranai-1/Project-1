import { useEffect,useState } from "react"
import Navbar from "./navbar"
import { Link, useNavigate } from "react-router-dom"
function Landing(){
    const navigate=useNavigate()
    const[logged,setLogged]=useState(false)

    useEffect(()=>{
     let token=localStorage.getItem("token")
      fetch("http://localhost:3000/admin/me",
      {
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        }).then(response=>response.json()).then((data)=>{
      if(data.message=='success'){
        setLogged(true)   
      }else{
        setLogged(false)
     }
      })
    },[])
   

   return (
        <>
        
         {/* Hero Section starting.... */}
         <div className='h-screen w-screen  bg-indigo-100 p-10'>
          <div className="h-full flex items-center justify-center flex-wrap">
            <div className="mr-[100px]">
          <p className="mt-[50px] w-max font-bold text-2xl mb-3">Admin Dashboard</p>
          <button onClick={()=>{
          if(logged==true){
            navigate("/admin/courses")
          }else{
            alert("Log in to continue")
          }
          }} className="h-[30px] w-max pr-2 pl-2 pt-0.5 pb-1 cursor-pointer mt-3 bg-red-500  font-medium text-white  rounded-lg hover:bg-blue-600">View courses</button>
          </div>
          <img className="h-[300px] w-max" src="https://static.vecteezy.com/system/resources/previews/000/523/309/original/web-development-and-programming-coding-concept-seo-optimization-modern-web-design-on-laptop-screen-vector.jpg" alt="Image"/>
         </div>
         </div>
            
        </>
      )
}
export default Landing