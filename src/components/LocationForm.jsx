import React from 'react'

export const LocationForm = ({handleSubmit}) => {  
  return (    
        <form className='relative z-10 ' onSubmit={handleSubmit} action="">          
          <div className=' flex justify-center my-10 p-4'>          
          <i className='bx bx-tada bxs-planet bx-border-circle border-black border-solid bg-white p-2 sm:mr-3'></i>
          <input id='search' className=' text-center border-2 border-r-0 border-green-400 focus:border-4 focus:border-green-400 sm:w-[70%] max-w-xl' type="text" placeholder='Type a location Id...' />                    
          <button  className=' bg-gradient-to-r from-[#36cc32] to-[#36cc32] flex text-white  px-6 border-2 border-l-[2px] border-green-400'> <i className='bx bx-search-alt text-xl'></i> </button>          
          </div>
          <p className=' text-[#8EFF8B] text-center font-fira text-[15px] font-medium leading-normal my-7'> ¡Welcome to the crazy universe! </p>
        </form>            
  )
}

