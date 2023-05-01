import React from 'react'
import { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick} from '../assets'

const Demo = () => {
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/*searc */}
      <div className='flex flex-col gap-2 w-full'>
          <form className='relative flex   justify-center  items-center'
          onSubmit={() => {}}
          >
            <img src={linkIcon}
                 alt="link_icon"
                 className='absolute left-0 my-2 ml-3 w-5' 
                 />

             <input type="url"
                    placeholder='Ponha a URL aqui'
                    value=''
                    onChange={(() =>  {})}
                    required
                    className='block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' 
                    />

              <button 
                  type='submit'
                  className='hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400
                  peer-focus:border-gray-700
                  peer-focus:text-gray-700'
                  >
                    ←
              </button>
        </form>

        {/* Browser URL History*/}      
      </div>

        {/* Display results*/}
    </section>
  )
}

export default Demo