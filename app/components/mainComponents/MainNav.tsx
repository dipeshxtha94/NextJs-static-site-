import React from 'react'

const MainNav = () => {
    return (
        <main className='w-full flex flex-col md:flex-row md:justify-between md:p-2 xl:inline-flex xl:flex-row justify-center items-center m-1 xl:h-14 xl:pt-4 xl:pr-8 xl:pb-4 xl:pl-8 bg-white  text-black text-xs xl:text-base font-normal'>
            <div className='flex'>
                <p className='text-sm xl:text-2xl w-15 xl:w-40 font-medium xl:font-semibold'>Add new post</p>
                <div className='flex ml-5  xl:ml-5 w-15 xl:w-40 items-center'>
                    <img src="/u_plus.png" alt="" className='w-3 h-3 xl:w-5 xl:h-5'/>
                    <p>Add Contact</p>
                </div>
                <div className='flex ml-5 xl:ml-5 items-center'>
                    <img src="/u_cog.png" alt="" className='w-5 h-5'/>
                    <p>Settings</p>
                </div>
            </div>
            <div className='flex mt-2 xl:mt-0 xl:ml-72 rounded border border-neutral-300'>
               <input type="text" name="" placeholder='Search Content' id="" className='xl:pl-2'/>
               <img src="/u_search.png" alt="" className='xl:pr-1'/>
            </div>
        </main>
    )
}

export default MainNav