'use client';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'

const Login=()=>{
  let [num, setNum] = useState(10);
  const handleIncrement = ()=>{
    if(num>=0 && num<10){
      setNum(num + 1)

    }else{
      alert('Number is greater than 10')
    }
    
  }
  const handleDecrement = ()=>{
    if(num>0
      
    ){
      setNum(num - 1)

    }else{
      alert('number is less than 0')
    }
      
    }
  return (
     <div className="flex flex-col items-center justify-center h-screen p-7 bg-gray-200 m-10 rounded-lg bg-sh shadow-2xl">
         <h2 className="text-3xl font-bold underline text-center  text-blue-600 p-10 bg-gray-400 rounded-lg bg-sh shadow-2xl m-10 border-gray-600 border-2 bg-opacity-50"  >Login</h2>
         <input type="text" placeholder="Username" className="placeholder-black bg-white rounded-lg bg-sh shadow-2xl m-2 border-gray-600 border-2 border-white placeholder-opacity-60 "/>
         <input type="password" placeholder="Password" className="placeholder-black bg-white rounded-lg bg-sh shadow-2xl m-2 border-gray-600 border-2 border-white placeholder-opacity-60 "/>
         <p className="text-center text-black text-sm p-2  underline m-2 hover:text-blue-800">Don't have an account? <a href="./register" className="text-blue-600 underline m-2 hover:text-blue-800">Register</a></p>
         <div>
            <Button onClick={handleIncrement}>Increment</Button>
            {num}
            <Button onClick={handleDecrement}>Decrement</Button>
            </div>
     </div>
     
     
  )
 }
 
 export default Login;