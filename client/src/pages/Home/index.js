import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
   <div className='flex p-3 nav justify-evenly align-top text-lg '>

   <span onClick={()=>{navigate("/")}}>Home</span>
   <span onClick={()=>{navigate("/login")}}>Login</span>
   <span onClick={()=>{navigate("/register")}}>Register</span>
   <span onClick={()=>{navigate("/products")}}>Products</span>
   <span onClick={()=>{navigate("/product")}}>Product</span>
   </div>
  )
}

export default Home