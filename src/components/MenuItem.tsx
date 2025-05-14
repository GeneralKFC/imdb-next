'use client'
import Link from 'next/link'
import React, { ComponentType, SVGProps } from 'react'
interface ItemProps{
    title:'string';
    address:'string';
    Icon:ComponentType<SVGProps<SVGSVGElement>>
}
export default function MenuItem({title,address,Icon}:ItemProps){
  return (
    <Link className='hover:text-amber-500' href={address}>
        <Icon className="text-2xl sm:hidden"/>
        <p className='uppercase hidden sm:inline text-1xl'>{title}</p>
    </Link>
  )
}
