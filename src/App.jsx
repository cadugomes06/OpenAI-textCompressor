import React  from 'react'
import './App.css'
import bg from './assets/facewoman-side.jpg'
import Hero from './components/Hero'
import Demo from './components/Demo'

const App = () => {
 
  return (

   <main className='relative mb-0'>   
    <div className='h-[1100px] max-w-full bg-cover brightness-50 mb-0'>
     <img src={bg} 
          alt="background"
          className='h-full w-full bg-contain' 
          />

    </div>

    <div  className='h-auto w-auto glassEffect z-10 absolute top-0' />


    <div className=''>
     
         <Hero />
         <Demo />
      
    </div>

   </main>
  )
}

export default App
