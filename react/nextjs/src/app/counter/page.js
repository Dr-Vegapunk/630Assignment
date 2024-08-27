'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/redux/reduceSlice/userSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='p-2 m-2'>
        <button className='p-2 m-2'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button className='p-2 m-2'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}