'use client'
import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function SearchBox(){
    const [search,setSearch]=useState('');
    const router=useRouter();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        router.push(`/search/${search}`);
    }
  return (
        <form 
            onSubmit={handleSubmit} 
            className="flex px-20 pt-5 items-center w-full"
        >
            <input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search keywords..." 
                className="flex h-14 rounded-md placeholder-gray-500 outline-none bg-transparent w-[500px] border border-gray-300 focus:border-amber-500 px-4"
            />
            <button 
                disabled={search === ''} 
                className="cursor-pointer ml-4 disabled:text-gray-400 disabled:cursor-not-allowed text-amber-600 hover:text-amber-700 font-medium"
            >
                Search
            </button>
        </form>
  )
}
