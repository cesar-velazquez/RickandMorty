import React from 'react'


export const LocationInfo = ({ dimension, select }) => {

  return (
    <section className='relative z-10 w-[85%] m-auto font-fira'>
      {
        select === null ?
          <section className='bg-black/80 px-4 rounded-3xl  font-bold text-center text-red-600  
          sm:border-2
          '>
            <h2 className='text-center font-bold text-[32px]  text-red-700 mt-[7%] p-5 '>{dimension?.name}</h2>
            <ul className='flex flex-col  items-center text-sm pb-7 gap-4
            sm:flex-row sm:text-green-600 sm:justify-center sm:gap-12 '>
              <li className=' '><span className=' text-white'>Type: </span>{dimension?.type}</li>
              <li className=' ' ><span className=' text-white' >Dimension: </span>{dimension?.dimension}</li>
              <li className=' '><span className=' text-white'>Population: </span>{dimension?.residents.length}</li>
            </ul>
          </section>
          :
          <section className='bg-black/80 px-4 rounded-3xl  font-bold text-center text-red-600  
          sm:border-2'>
            <h2 className='text-center font-bold text-[32px]  text-red-700 mt-[7%] p-5'>{select?.name}</h2>
            <ul className='flex flex-col  items-center text-sm pb-7 gap-4
            sm:flex-row sm:text-green-600 sm:justify-center sm:gap-12 '>
              <li className=''><span className='text-white'>Type: </span>{select?.type}.</li>
              <li className='' ><span className='text-white' >Dimension: </span>{select?.dimension}.</li>
              <li className=''><span className='text-white'>Population: </span>{select?.residents?.length}.</li>
            </ul>        
          </section>

      }

    </section>
  )
}

