import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <main className='flex justify-between bg-black text-white text-xs xl:text-sm' style={{fontFamily:'Poppins'}}>
            <div className='grid grid-cols-2 md:flex xl:flex p-1 xl:pt-3 xl:pb-3 xl:pr-8 xl:pl-8 h-14 xl:h-12 items-center'>
               <div className='flex md:pr-3 xl:pr-5'>
                 <img src="/home.svg" className='' />
                 <p>Home</p>
               </div>
               <div className='flex md:pr-3 xl:pr-5'>
                 <img src="/list.svg" alt="" className=''/>
                 <p>Contents</p>
               </div>
               <div className='flex md:pr-3 xl:pr-5'>
                <img src="/u_list.svg" alt="" className=''/>
                <p>Categories</p>
               </div>
               <div className='flex md:pr-3 xl:pr-5'>
                <img src="/u_cog.svg" alt="" className=''/>
                <p>Settings</p>
               </div>
            </div>
            <div className='flex w-32 xl:w-44 h-7 m-auto items-center bg-white text-black rounded-2xl mr-2 xl:mr-10'>
            <img src="/Ellipse 1.png" alt="" className='w-7 h-7'/>
            <p className='text-xs xl:text-base'>İsmail İhsan Bülbül</p>
            </div>
            <hr />
        </main>
    )
}

export default Navbar