import React from 'react'

const Form2 = () => {
    return (
        <main className='mr-5 ml-5 mt-5 p-9 rounded-sm  bg-white text-neutral-800'>
            <section>
                <p className='text-xl font-semibold'>Form title</p>
                <p className='font-light text-base'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            </section>
            <section className='flex mt-3'>
                <img src="/ButtonLang.png" alt="" className='w-20 h-7 mr-3' />
                <img src="ButtonLang (1).png" alt="" className='w-20 h-7' />
            </section>
            <section className='font-light mt-3'>
                <form action="">
                    <label htmlFor="title" className='text-sm'>Label title</label>
                    <input type="text" placeholder='Placeholder Content' className='w-full rounded p-2 h-8 border text-base border-neutral-200' />
                    <div className='mt-3 flex justify-between'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-sm'>Label title</label>
                            <select name="" id="" className='p-2 h-8 border text-sm w-24 md:w-40 xl:w-60 rounded border-neutral-200'>
                            <option value="choose">Choose</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="title" className='text-sm'>Label title</label>
                            <input type="text" placeholder='Placeholder Content' className=' p-2 w-24 md:w-40 xl:w-60 rounded h-8 border text-base border-neutral-200' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="title" className='text-sm'>Label title</label>
                            <input type="text" placeholder='Placeholder Content' className='p-2 w-24 md:w-40 xl:w-60 rounded h-8 border text-base border-neutral-200' />
                        </div>
                    </div>
                    <div className='flex mt-3 justify-between'>
                    <div className='flex flex-col'>
                            <label htmlFor="title" className='text-sm'>Label title</label>
                            <input type="text" placeholder='Placeholder Content' className=' p-2 w-36 md:w-60 xl:w-96 rounded h-8 border text-base border-neutral-200' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="title" className='text-sm'>Label title</label>
                            <input type="text" placeholder='Placeholder Content' className='p-2 w-36 md:w-60 xl:w-96 rounded h-8 border text-base border-neutral-200' />
                        </div>
                    </div>
                    <div className='flex flex-col mt-3'>
                         <label htmlFor="title" className='text-sm'>Label title</label>
                    <textarea name="" placeholder='Placeholder Content' className='p-2 rounded border text-base border-neutral-200' id="" cols={30} rows={6}></textarea>
                    </div>
                   
                </form>
            </section>
        </main>
    )
}

export default Form2