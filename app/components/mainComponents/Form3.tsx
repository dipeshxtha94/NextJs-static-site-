import React from 'react'

const Form3 = () => {
    return (
        <main className='mr-5 ml-5 mt-5 p-9 rounded-sm flex flex-col xl:flex-row justify-between text-neutral-800'>
            <section className='bg-white pt-3 pb-3 pr-10 pl-10'>
                <div className='flex flex-col'>
                <p className='text-xl font-semibold'>Form title</p>
                <p className='font-light text-base'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
                </div>
                <div className='flex flex-col'>
                <label htmlFor="title" className='text-sm'>Label title</label>
                    <input type="text" placeholder='Placeholder Content' className='w-full rounded p-2 h-8 border text-base border-neutral-200' />
                    <div className='mt-3 flex flex-col justify-between'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-sm'>Label title</label>
                            <select name="" id="" className='p-2 h-8 border text-sm w-full rounded border-neutral-200'>
                            <option value="choose">Choose</option>
                            </select>
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="title" className='text-sm'>Label title</label>
                            <input type="text" placeholder='Placeholder Content' className=' p-2 w-full rounded h-8 border text-base border-neutral-200' />
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="title" className='text-sm'>Label title</label>
                            <input type="text" placeholder='Placeholder Content' className='p-2 w-full rounded h-8 border text-base border-neutral-200' />
                        </div>
                        <div className='flex flex-col mt-3'>
                         <label htmlFor="title" className='text-sm'>Label title</label>
                    <textarea name="" placeholder='Placeholder Content' className='p-2 rounded border text-base border-neutral-200' id="" cols={30} rows={6}></textarea>
                    </div>
                    </div>
                </div>
            </section>
            <section className='bg-white pt-3 pb-3 pr-7 pl-7'>
               <div>
                <p className='text-xl font-semibold'>Form Title</p>
               </div>
               <div className='flex flex-col'>
                <label htmlFor="title" className='text-sm'>Label title</label>
                    <input type="text" placeholder='Placeholder Content' className='w-full rounded p-2 h-8 border text-base border-neutral-200' />
                    <div className='mt-3 flex flex-col justify-between'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-sm'>Label title</label>
                            <select name="" id="" className='p-2 h-8 border text-sm w-full rounded border-neutral-200'>
                            <option value="choose">Choose</option>
                            </select>
                        </div>
                        </div>
                        <div className='flex flex-col mt-3'>
                         <label htmlFor="title" className='text-sm'>Label title</label>
                    <textarea name="" placeholder='Placeholder Content' className='p-2 rounded border text-base border-neutral-200' id="" cols={30} rows={6}></textarea>
                    </div>
                    <div className='mt-1 xl:mt-3 m-auto w-full'>
                        <button className='bg-blue-500 text-white pt-2 pb-2 pl-6 pr-6 rounded-md w-full'>Button title</button>
                    </div>
               </div>
            </section>
        </main>
    )
}

export default Form3