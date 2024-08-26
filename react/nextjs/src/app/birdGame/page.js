'use client'
import { Button, Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const BirdGame = () => {
    const [randomNum, setRandomNum]=useState(0)
    const [isGameStart, setISGameStart]=useState(false)
   
    // const [isGameStopped, setIsGameStopped]=useState(false)
    const cage=['','','💣','','','','💣','💣','','💣','','💣',]
    useEffect(()=>{
      if( isGameStart){setTimeout(()=>{
        let newRandomNumber=Math.floor(Math.random() * cage.length)
          if(newRandomNumber===randomNum){
            newRandomNumber===cage.length-1?newRandomNumber=0: newRandomNumber+=1
          }
            setRandomNum(newRandomNumber)
      },50);
    }
      
    },[randomNum,isGameStart]);
    // const handleStop=()=>{
    //   setIsGameStopped(!isGameStopped)
    // }
    const handleStart=()=>{
      setISGameStart(!isGameStart)
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen mt-2'>
            <div className='grid grid-cols-4 gap-2'>{randomNum}
            {cage.map((item,id)=>{
                return <div className={`p-2 m-2 h-44 shadow w-24 bg-gray-300 rounded-md flex justify-center items-center ${item === '💣' ? 'animate-bounce' : ''}`}>{item}
                {id===randomNum && <Image src='https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/chafinch-flying-flight-bird-animal-ks1_ver_1.png'
                width={70}
                height={70}/>}
                {id===randomNum && isGameStart && item &&  <Image src='https://giphy.com/gifs/IntoAction-war-nti-nuclear-threat-rElyrFiHFjlrUIfYbN'
                  width={100}
                  height={100}
                />}
                </div>
            })}
            <div className='mt-4 space-x-4 justify-end'>
            <Button onClick={handleStart}>{isGameStart? 'Stop' : 'Start'}</Button></div>  

            </div>
            
    </div>
  )
}

export default BirdGame