'use client'
import {  useEffect } from 'react'
export default function error({error,reset}){
    useEffect(()=>{
        console.log(error);
    },[error])
  return (
    <div className='flex rounded-md gap-5 text-center align-center justyfy-center bg-gray-500 flex-col w-[500px] p-5 m-auto mt-10'>
        <h1 className='text-white'>Something went wrong. Please try again</h1>
        <button className='hover:bg-emerald-700 flex cursor-pointer text-white m-auto p-2 rounded-md bg-emerald-400 ' onClick={()=>reset()}>Try again</button>
    </div>
  )
}
