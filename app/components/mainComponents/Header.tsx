import React from 'react'

const Header = () => {
  return (
    <main className='mt-2 xl:mt-6 grid items-center grid-cols-2 ml-14 md:grid-cols-4 xl:grid-cols-4 mr-1 xl:mr-8 xl:ml-10'>     
      <div className='bg-white text-black w-20 xl:w-52'>
        <img src="/InfoBox.png" alt="" />
      </div>

      <div className='bg-white text-black w-20 xl:w-52'>
      <img src="/InfoBox (1).png" alt="" />
      </div>

      <div className='bg-white text-black w-20 xl:w-52 mt-1 xl:mt-0'>
      <img src="/InfoBox (2).png" alt="" />
      </div>

      <div className='bg-white text-black w-20 xl:w-52 mt-1 xl:mt-0'>
      <img src="/InfoBox (3).png" alt="" />
      </div>
    </main>
  )
}

export default Header