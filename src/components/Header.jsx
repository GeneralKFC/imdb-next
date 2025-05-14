'use client'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import MenuItem from './MenuItem'
import Link from 'next/link'

export default function Header(){
  return(
    <header className='flex justify-between w-full pt-5 pb-5 pl-20 pr-20 items-center'>
        <div className='flex gap-4'>
          <MenuItem title="home" address="/" Icon={AiFillHome}/>
          <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className='flex items-center gap-1'>
          <div className='flex items-center gap-1'>
          <Link href='/' className='flex font-bold text-2xl p-3 bg-orange-500 rounded-2xl'>
            IMDb
          </Link>
          <p className='text-xl hidden sm:inline'>Clone</p>
          </div>
        </div>
        
    </header>
  )
}
