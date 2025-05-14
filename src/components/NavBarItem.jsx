'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
const NavBarItem = ({title,param}) => {
  const searchParams=useSearchParams();
  const genre=searchParams.get('genre');
  return (
    <div className='flex items-center'>
        <Link 
        className={`duration-300 ease-in hover:text-orange-100 text-xl text-orange-200 ${genre===param?'underline underline-offset-8 decoration-red-500 rounded-lg':''}`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavBarItem