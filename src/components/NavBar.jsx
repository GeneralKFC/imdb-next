'use client'
import React from 'react'
import NavBarItem from "./NavBarItem"
export default function NavBar(){
  return (
    <div className='flex gap-6 w-full h-20 bg-indigo-400 items-center justify-center'>
        <NavBarItem title="Trending" param="fetchTrending"/>
        <NavBarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
