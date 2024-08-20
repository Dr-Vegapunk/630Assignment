'use client'
import React, { useState } from 'react'
import { FaRegHandRock, FaRegHandScissors } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import Confetti from 'react-confetti'
import { Button } from '@nextui-org/react';


const RockPaper = () => {
    const [userChoice, setUserChoice]=useState(null)
    const handleChange=(newChoice)=>{setUserChoice(newChoice)}
    const choices=[{name: 'Rock', icon:  <FaRegHandRock size={50} onClick={()=>handleChange('Rock')}/>},{name:'Paper',icon: <FaRegHandPaper size={50}onClick={()=>handleChange('Paper')}/>},{name:'Scissor',icon:<FaRegHandScissors size={50}onClick={()=>handleChange('Scissor')} />}]
    const randomNum= Math.floor(Math.random() * choices.length);
    const confetti=<Confetti
    width={1300}
    height={1300}
    
  />
  const Reset=()=>{setUserChoice(null)};
  const getResult = () => {
    if (choices[randomNum].name === userChoice) {
        return "DRAW";
    } else if (
        (userChoice === 'Rock' && choices[randomNum].name === 'Scissor') ||
        (userChoice === 'Paper' && choices[randomNum].name === 'Rock') ||
        (userChoice === 'Scissor' && choices[randomNum].name === 'Paper')
    ) {
        return "You won!";
    } else {
        return "You lost";
    }
};

  return (
    <div>

        {/* <FaRegHandRock/>
        <FaRegHandPaper />
        <FaRegHandScissors /> */}

        <div className='flex m-4 p-4 items-center'>
            <div className='bg-blue-600 w-[50%] h-72  text-black font-mono font-bold text-center bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] shadow-lg rounded-lg'>Computer
               <div className='bg-white  border-black border-4 rounded-2xl p-3 w-[50%] flex items-center justify-center ml-20 mb-2 animate-bounce mt-8 animate-border bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%]'><div>{userChoice && choices[randomNum].icon}</div>
                <div className='ml-4'>{userChoice && choices[randomNum].name}</div>
               </div>

            </div>
            <div className='bg-blue-800 w-[50%] h-72 text-black font-mono font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-[length:400%_400%] ml-4 rounded-lg' >You 
              <div className='flex  border-2 w-[10%] h-7 absolute inset-y-20 right-20 rounded justify-center animate-none'>{userChoice}</div>

           {choices.map((item)=>{
              return <div className='bg-white  border-black border-4 rounded-2xl p-3 w-[50%] flex items-center justify-center ml-20 mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-[length:400%_400%] shadow-lg '>
                        <div className='animate-bounce'>{item.icon}</div> <div className='ml-4'>{item.name}</div></div>

           })}
           
           
            
            </div>
        </div>
        <div className='text-center font-bold text-xl'>
                {userChoice && (
                    <>
                        {getResult()}
                        {(getResult() === "You won!") && confetti}
                    </>
                )}
            </div>
            <div className='flex justify-center items-center mt-8 '><Button className='bg-gradient-to-r from-blue-500 via-red-600 to-red-600 bg-[length:400%_400%]' onClick={()=>Reset()}>Reset</Button></div>
            
        
    </div>
  )
}

export default RockPaper