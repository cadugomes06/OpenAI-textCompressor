import React  from 'react'
import './App.css'
import bg from './assets/facewoman-side.jpg'
import Hero from './components/Hero'
import Demo from './components/Demo'

const App = () => {
 
  return (

   <main className='relative'>   
    <div className='h-screen w-screen bg-cover brightness-50'>
     <img src={bg} 
          alt="background"
          className='h-full w-full bg-right' 
          />
    </div>

    <div  className='h-auto w-auto glassEffect  z-10 absolute top-0' />

    <div className=''>
     
         <Hero />
         <Demo />
      
    </div>

   </main>
  )
}

export default App
