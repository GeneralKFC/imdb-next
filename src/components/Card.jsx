'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi'
export default function Card({el}) {
  return (
    <div className='flex rounded-md p-1 border border-black-50 hover:shadow-lg/40'>
    <Link className='flex flex-col gap-1 ' href={`/movie/${el.id}`}>
    <div className='flex w-full h-50'>
      <Image className='sm:rounded-t-lg group-hover:opacity-75 object-cover transition-opasity duration-300' width={500}  height={300} alt={el.title || 'mImg'} src={`https://image.tmdb.org/t/p/original/${el.backdrop_path||el.poster_path}`}></Image>
    </div>
      <p className='line-clamp-1 text-md'>{el.overview}</p>
      <h2 className='flex font-bold'>{el.title||el.name}</h2>
      <p className='flex'>
        {el.release_date||el.first_air_date}
        <FiThumbsUp className='h-5 mr-1 ml-3'/>
        {el.vote_count}
      </p>
    </Link>
    </div>
  )
}
