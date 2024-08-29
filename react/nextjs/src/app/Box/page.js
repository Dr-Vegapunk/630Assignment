'use client'
import { backgroundColorChanger, changeToCircle, changeToNormal, moveDown, moveLeft, moveRight, moveUp, widthDecrement, widthIncrement } from '@/redux/reduceSlice/boxSlice';
import { Input } from '@nextui-org/react';
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
  const [customStyle, setCustomStyle]=useState({})
   const dispatch = useDispatch();
   const {  width, height,margin,borderRadius,marginRight,marginLeft,marginTop,marginBottom,backgroundColor } = useSelector((state) => state.box)
   const handleChange=(event)=>{
     let text=event?.target?.value
      const output=text.split(',').map((item)=>{
       return item.split(':')

     })
      const styles =  Object.fromEntries(output)
       setCustomStyle(styles)
        dispatch(backgroundColorChanger(event.target.value))
    }
    
   
   useEffect(()=>{
    document.body.addEventListener('keydown', (e)=>{
      switch (e.key){
        case 'ArrowUp':
          dispatch(moveUp())
          break;
        case 'ArrowDown':
          dispatch(moveDown())
          break; 
        case 'ArrowLeft':
          dispatch(moveLeft())
          break;
        case 'ArrowRight':
          dispatch(moveRight())
          break;
        case '+':
          dispatch(widthIncrement())
          break;
        case '-':
          dispatch(widthDecrement())
          break;
        
      }
    })
   },[])
    
return (
    <div>
        <div onClick={()=>{borderRadius===0?dispatch(changeToCircle()):dispatch(changeToNormal())}} style={{backgroundColor: backgroundColor,
          margin: margin,
          width: width,
          height: height,
          borderRadius:borderRadius,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
           marginBottom:marginBottom,
           ...customStyle}}>

        </div>
        <div>
          <Input type='text' placeholder='property:value' onChange={handleChange} className='w-[20%] p-4 m-4' /></div>
        
    </div>
)
}


export default Box