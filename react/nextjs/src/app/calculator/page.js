// import { Button } from '@nextui-org/react'
// import React from 'react'

// const Calculator = () => {
//     const calcNum=[<Button>1</Button>, <Button>2</Button>,<Button>3</Button>,<Button>4</Button>,<Button>5</Button>,<Button>6</Button>,<Button>7</Button>,<Button>8</Button>,<Button>9</Button>,<Button>+</Button>,<Button>-</Button>,<Button>*</Button>,<Button>/</Button>,<Button>**</Button>,<Button>%</Button>,<Button>del</Button>]
//   return (
//     <div>Calculator
//        {calcNum.map((item)=>{
//         return <div className='flex-row gap-2'>{item}</div>
//        })}

//     </div>
//   )
// }

// export default Calculator

'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

const Calculator = () => {
    const [output, setOutput] = useState('')
    const handleChange=()=>{
      switch(keys){
        case '+', '-', '*', '/','.':
          setOutput(output+keys)
      }
    }
    const buttons= [
      [{keys:'AC',className:'bg-orange-300'},
      {keys:'%',className:'bg-orange-300'},
      {keys:'<',className:'bg-orange-300'},
      {keys:'/',className:'bg-orange-300'}],
      [{keys:'7',className:'bg-gray-300'},
      {keys:'8',className:'bg-gray-300'},
      {keys:'9',className:'bg-gray-300'},
      {keys:'*',className:'bg-orange-300'}],
      [{keys:'4',className:'bg-gray-300'},
      {keys:'5',className:'bg-gray-300'},
      {keys:'6',className:'bg-gray-300'},
      {keys:'-',className:'bg-orange-300'}],
      [{keys:'1',className:'bg-gray-300'},
      {keys:'2',className:'bg-gray-300'},
      {keys:'3',className:'bg-gray-300'},
      {keys:'+',className:'bg-orange-300'}],
      [{keys:'+/-',className:'bg-orange-300'},
      {keys:'0',className:'bg-gray-300'},
      {keys:'.',className:'bg-gray-300'},
      {keys:'=',className:'bg-blue-300'}],
      
    ]
  return (
    <div className='bg-black w-80 p-2 mt-4 mx-8'>
        <div className='text-white border-2 border-black mb-2 shadow-lg'>{output}</div>
        <div className='mt-2'>{buttons.map((item,id)=>{
          return <div className=' '>{item.map((val,idx)=>{
            return <Button onClick={()=>{handleChange()}} className={val.className + ' rounded-full mx-1 my-1'}>{val.keys}</Button>
            
          })}</div>
        })}</div>

        {/* <Button className='bg-gray-200' onClick={()=>{setOutput('')}}>AC</Button>
        <Button className='bg-gray-200'onClick={()=>{setOutput(eval(output*-1))}}>+/-</Button>
        <Button className='bg-gray-200'onClick={()=>{setOutput(eval(output+ '/100'))}}>%</Button>
        <Button className='bg-gray-200' onClick={()=>{setOutput(output+ '/')}}>/</Button>
        <Button onClick={()=>setOutput(output+ 9) }>9</Button>
        <Button onClick={()=>setOutput(output+ 8)}  >8</Button>
        <Button onClick={()=>{setOutput(output+ 7)}}>7</Button>
        <Button className='bg-orange-500' onClick={()=>{setOutput(output+ '*')}}>*</Button>
        <Button onClick={()=>{setOutput(output+ 6)}}>6</Button>
        <Button onClick={()=>{setOutput(output+ 5)}}>5</Button>
        <Button onClick={()=>{setOutput(output+ 4)}}>4</Button>
        <Button className='bg-orange-500' onClick={()=>{setOutput(output+ '-')}}>-</Button>
        <Button onClick={()=>{setOutput(output+ 3)}}>3</Button>
        <Button onClick={()=>{setOutput(output+ 2)}}>2</Button>
        <Button onClick={()=>{setOutput(output+ 1)}}>1</Button>
        <Button onClick={()=>setOutput(output+ '+') } className='bg-orange-500'>+</Button>
        <Button onClick={()=>{setOutput(output+ 0)}}>0</Button>
        <Button onClick={()=>{setOutput(output+ '.')}}>.</Button>
        <Button onClick={()=> setOutput(eval(output) )}>=</Button> */}
    </div>
  )
}

export default Calculator