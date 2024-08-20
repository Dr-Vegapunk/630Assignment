'use client'
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { FaAngry, FaThumbsUp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaFaceAngry, FaRegFaceSurprise } from "react-icons/fa6";
const Facebook = () => {
    const [reaction, setReaction]=useState(null)
    const changeReaction=(newReaction)=>{
        setReaction(reaction===newReaction?null:newReaction)

    }
    const GenerateButton=()=>{
        if(reaction==='angry'){
            return <Button onClick={()=>changeReaction('angry')} className={reaction=='angry'?'text-orange-500 font-semibold':null}><FaAngry/>angry</Button>

        }else if(reaction==='wow'){
            return <Button onClick={()=>changeReaction('wow')} className={reaction=='wow'?'text-orange-500 font-semibold':null}><FaThumbsUp/>wow</Button>
        }else if(reaction==='love'){
            return <Button onClick={()=>changeReaction('love')} className={reaction=='love'?'text-red-500 font-semibold':null}><FaThumbsUp/>angry</Button>
        }
        else{
            <Button onClick={()=>changeReaction('like')} className={reaction=='like'?'text-blue-500 font-semibold':null }><FaThumbsUp/>Like</Button>
        }
    }
  return (
   
    <div className='flex-col justify-center items-center m-2 p-2'>

        <div className='bg-slate-200 flex m-2 p-2 shadow-md gap-4 w-36'>
        <FaThumbsUp onClick={()=>changeReaction('like')} className={reaction=='like'?'text-blue-500 font-semibold':null }/>
        <FcLike onClick={()=>changeReaction('love')} className={reaction=='love'?'text-blue-500 font-semibold':null}/>
        <FaRegFaceSurprise onClick={()=>changeReaction('wow')} className={reaction=='wow'?'text-blue-500 font-semibold':null} color='orange'/>
        <FaFaceAngry onClick={()=>changeReaction('angry')} className={reaction=='angry'?'text-blue-500 font-semibold':null} color='red'/>    

        </div>
            <GenerateButton/>
        
    </div>
  )
}

export default Facebook