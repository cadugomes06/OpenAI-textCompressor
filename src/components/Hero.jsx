import React from 'react'
import ai from '../assets/ai.png'

const Hero = () => {
  return (
    <header className='w-full h-16 absolute top-0 flex px-6 pt-6 flex-col items-center'>
        <nav className='w-full flex items-center justify-between '>
           <img src={ai} 
                alt="img"
                className='h-12 w-12 object-contain'
                />


            <button
               className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500  bg-white; rounded-2xl text-white py-2 px-4 font-semibold'
               onClick={() => window.open('https://github.com/cadugomes06/OpenAI-textCompressor')}
               >
             Github
            </button>
      </nav>   

     <div className='w-full flex justify-center items-center flex-col '>

          <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-white sm:text-6xl   text-center;'
          >
                 Resuma Artigos com
               <br className='max-md:hidden' />
               <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent bg-white;'>
            <span> </span> OpenAI GPT-4
          </span>
          </h1>

          <h2 className='mt-5 text-lg text-white sm:text-xl text-center max-w-lg'>
              Simplifique sua leitura com o compressor de texto, um projeto que transforma longos artigos em um resumo coerente e limpo para sua leitura.

          </h2>
      </div>


            
    </header>
  )
}

export default Hero