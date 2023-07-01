import React from 'react'

const page = () => {
    return (
        <main className='bg-slate-300 w-full flex justify-center items-center h-screen'>
            <main className='flex justify-center m-auto w-full xl:w-1/2 bg-white'>
            <section className='w-1/2 h-full'>
                <img src="/Rectangle 38.png" alt=""/>
            </section>
            <section className='w-1/2 pl-2 pt-1 pr-2 pb-1 xl:p-7'>
                <div>
                    <p className='text-sm xl:text-xl font-semibold'>Login</p>
                    <p className='font-light text-xs xl:text-base'>Donec tortor quam at duis tortor.</p>
                </div>
                <div className='mt-1 xl:mt-5'>
                <label htmlFor="title" className='text-sm xl:text-lg'>Email</label>
                    <input type="text" placeholder='Placeholder Content' className='w-full rounded p-2 h-8 border text-xs xl:text-base border-neutral-200' />
                    <label htmlFor="title" className='text-sm xl:text-lg mt-1 xl:mt-4'>Password</label>
                    <input type="text" placeholder='Placeholder Content' className='w-full rounded p-2 h-8 border text-xs xl:text-base border-neutral-200' />
                    <p className='text-xs xl:text-xm font-semibold text-right mt-1'>Forgot Password?</p>
                    <button className='bg-blue-500 text-white text-sm xl:text-xl mt-2 xl:mt-6 rounded-md pt-1 pb-1 pr-3 pl-3 w-full'>Login</button>
                    <button className='bg-white text-black mt-2 xl:mt-10 text-sm xl:text-xl rounded-md pt-1 pb-1 pr-3 pl-3 w-full border-neutral-600 border'>Register Now</button>
                </div>
            </section>
            </main>
        </main>
    )
}

export default page