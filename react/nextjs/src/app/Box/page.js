'use client'
import { backgroundColorChanger, changeToCircle, changeToNormal, decreaseMargin, moveDown, moveLeft, moveMarginToLeft, moveRight, moveUp } from '@/redux/reduceSlice/boxSlice';
import { Button, Input } from '@nextui-org/react';
import React from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
   const dispatch = useDispatch();
   const {  width, height,margin,borderRadius,marginRight,marginLeft,marginUp,marginDown,backgroundColor } = useSelector((state) => state.box)
   const handleChange=(event)=>{
    debugger;
    if(event.key==="Enter"){
      dispatch(backgroundColorChanger(event.target.value));
    }
    
   }
    
  return (
    <div>
        <div style={{backgroundColor: backgroundColor,margin: margin,width: width,height: height,borderRadius:borderRadius,marginLeft: marginLeft,marginRight: marginRight,marginUp: marginUp, marginDown:marginDown}}>

        </div>
        <div><Input type='text' placeholder='backgroundCOlor: ' onKeyPress={handleChange} className='w-[20%] p-4 m-4' /></div>
        <div>
        <button onClick={()=> borderRadius===0?dispatch(changeToCircle()):dispatch(changeToNormal())} className='bg-slate-400 w-[15%] p-4 m-4 rounded-lg'>Change to {borderRadius===0?'Circle':'Square'} </button>
        <button onClick={()=> dispatch(moveMarginToLeft())} className='w-[15%] p-4 m-4 bg-slate-400 rounded-lg'> Margin +</button>
        <button onClick={()=> dispatch(decreaseMargin())} className='w-[15%] p-4 m-4 bg-slate-400 rounded-lg'> Margin -</button>
        <Button onClick={()=>dispatch(moveRight())}><FaArrowLeft/></Button>
        <Button onClick={()=>dispatch(moveLeft())}><FaArrowRight/></Button>
        <Button onClick={()=>dispatch(moveDown())}><FaArrowUp/></Button>
        <Button onClick={()=>dispatch(moveUp())}><FaArrowDown/></Button>

          
        {/* <button onClick={()=> dispatch(increaseWidth())}>-</button> */}
        </div>
    </div>
  )
}

export default Box