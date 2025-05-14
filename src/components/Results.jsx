'use client'
import React from 'react'
import Card from './Card'
export default function ResultPage({results}){
  return (
    <div className='gap-5 sm:grid sm:grid-cols-2 jg:grid-cols-3 xl:grid-cols-4 xl:grid-cols-5 mx:auto py-4 max-h-3xl max-w-6xl'>
      {results.map((el)=>(
        <Card key={el.id} el={el}/>
      ))}
    </div>
  )
}
