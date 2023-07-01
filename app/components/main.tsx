import React from 'react'
import MainNav from './mainComponents/MainNav'
import Header from './mainComponents/Header'
import Form1 from './mainComponents/Form1'
import Form2 from './mainComponents/Form2'
import Form3 from './mainComponents/Form3'

const Main = () => {
  return (
    <main className='w-full bg-neutral-100' style={{fontFamily:'Poppins'}}>
        <MainNav />
        <Header />
        <Form1 />
        <Form2 />
        <Form3 />
    </main>
  )
}

export default Main