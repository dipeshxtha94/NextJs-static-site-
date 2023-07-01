'use client'

import React, { useState } from 'react'

const Sidebar = () => {
   const [flag, setFlag]= useState<Boolean>(true)

   const handleRight=()=>{
    setFlag(true)
   }

   const handleLeft=()=>{
    setFlag(false)
   }

    return (
        <main>
        {!flag && <img src="./Expand_right_double.png" onClick={handleRight} alt="" className=' pl-2 w-5 h-3'/>}
        {flag && <img src="./Expand_left_double.png" onClick={handleLeft} alt="" className='pl-2 w-5 h-3'/>}
        
        {flag && <main className='flex flex-col bg-neutral-900 w-20 h-full xl:w-64 text-xs xl:text-base text-white font-medium' style={{ fontFamily: 'Poppins' }}>
           
            <div className='flex w-16 xl:w-56 h-8 mt-4 mb-2 items-center rounded-md text-xs xl:text-lg font-medium pl-3 m-auto bg-neutral-200 text-black'>
                <img src="/u_plus.png" alt="" className='w-4 xl:w-6 h-3 xl:h-5 xl:pr-1' />
                <p>New Item</p>
            </div>
            <hr className='bg-black' />
            <div className='flex flex-col'>
                <div className='flex justify-between pb-1 xl:p-4 items-center'>
                    <div className='flex items-center'>
                        <img src="/darhboard.png" alt="" className='w-3 h-2 xl:w-5 xl:h-4 pr-1' />
                        <p>Dashboard</p>
                    </div>
                    <img src="/Expand_up.png" alt="" className='w-3 h-3 xl:w-4 xl:h-4' />
                </div>
                <div className='flex flex-col ml-3 xl:ml-8'>
                    <p className='xl:mb-2'>Commarce</p>
                    <p className='xl:mb-2'>Analytics</p>
                    <p className='xl:mb-2'>Crypto</p>
                    <p className='xl:mb-2'>Helpdesk</p>
                    <p className='xl:mb-2'>Monitoring</p>
                    <p className='xl:mb-2'>Fitnes</p>
                </div>
            </div>
            <hr />
            <div className='flex justify-between pt-1 xl:p-4 items-center'>
                <div className='flex items-center'>
                    <img src="/darhboard.png" alt="" className='w-3 h-2 xl:w-5 xl:h-4 pr-1' />
                    <p>Application</p>
                </div>
                <img src="/Expand_down.png" alt="" className='w-3 h-3 xl:w-4 xl:h-4' />
            </div>
            <hr />
            <div className='flex justify-between pt-1 xl:p-4 items-center'>
                <div className='flex items-center'>
                    <img src="/darhboard.png" alt="" className='w-3 h-2 xl:w-5 xl:h-4 pr-1' />
                    <p>Elements</p>
                </div>
                <img src="/Expand_down.png" alt="" className='w-3 h-3 xl:w-4 xl:h-4' />
            </div>
            <hr />
            <div className='flex justify-between pt-1 xl:p-4 items-center'>
                <div className='flex items-center'>
                    <img src="/darhboard.png" alt="" className='w-3 h-2 xl:w-5 xl:h-4 pr-1' />
                    <p>Forms</p>
                </div>
                <img src="/Expand_down.png" alt="" className='w-3 h-3 xl:w-4 xl:h-4' />
            </div>
            <hr />
            <div className='flex justify-between pt-1 xl:p-4 items-center'>
                <div className='flex items-center'>
                    <img src="/darhboard.png" alt="" className='w-3 h-2 xl:w-5 xl:h-4 pr-1' />
                    <p>Plugins</p>
                </div>
                <img src="/Expand_down.png" alt="" className='w-3 h-3 xl:w-4 xl:h-4' />
            </div>
            <hr />
            <div className='flex justify-between pt-1 xl:p-4 items-center'>
                <div className='flex items-center'>
                    <img src="/darhboard.png" alt="" className='w-3 h-2 xl:w-5 xl:h-4  pr-1' />
                    <p>Elements</p>
                </div>
                <img src="/Expand_down.png" alt="" className='w-3 h-3 xl:w-4 xl:h-4' />
            </div>
            <hr />
            <div className='flex justify-between pt-1 xl:p-4 items-center'>
                <div className='flex items-center'>
                    <img src="/darhboard.png" alt="" className='w-3 h-2 xl:w-5 xl:h-4  pr-1' />
                    <p>Datagrids</p>
                </div>
                <img src="/Expand_down.png" alt="" className='w-3 h-3 xl:w-4 xl:h-4' />
            </div>
            <hr />
            <div className='flex justify-between pt-1 xl:p-4 items-center'>
                <div className='flex items-center'>
                    <img src="/darhboard.png" alt="" className='w-3 h-2 xl:w-5 xl:h-4  pr-1' />
                    <p>Settings</p>
                </div>
                <img src="/Expand_down.png" alt="" className='w-3 h-3 xl:w-4 xl:h-4' />
            </div>
        </main>}
        </main>
    )
}

export default Sidebar