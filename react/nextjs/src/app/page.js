import React from 'react'

const Login=()=>{
  return (
     <div className="flex flex-col items-center justify-center h-screen p-7 bg-gray-200 m-10 rounded-lg bg-sh shadow-2xl">
         <h2 className="text-3xl font-bold underline text-center  text-blue-600 p-10 bg-gray-400 rounded-lg bg-sh shadow-2xl m-10 border-gray-600 border-2 bg-opacity-50"  >Login</h2>
         <input type="text" placeholder="Username" className="placeholder-black bg-white rounded-lg bg-sh shadow-2xl m-2 border-gray-600 border-2 border-white placeholder-opacity-60 "/>
         <input type="password" placeholder="Password" className="placeholder-black bg-white rounded-lg bg-sh shadow-2xl m-2 border-gray-600 border-2 border-white placeholder-opacity-60 "/>
         <p className="text-center text-black text-sm p-2  underline m-2 hover:text-blue-800">Don't have an account? <a href="./register" className="text-blue-600 underline m-2 hover:text-blue-800">Register</a></p>
     </div>
  )
 }
 
 export default Login;