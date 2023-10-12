import React from 'react'


export const LocationInfo = ({ dimension, select }) => {

  return (
    <section className='relative z-10 bg-gray-600/40 rounded-3xl w-[85%] m-auto font-fira'>
      {
        select === null ?
          <section>
            <h2 className='text-center font-bold text-[32px] text-red-700 mt-[7%] p-5 '>{dimension?.name}</h2>
            <ul className='flex flex-col  items-center gap-2 pb-7'>
              <li className='font-bold text-white text-center'><span className='font-bold text-gray-950'>Type: </span>{dimension?.type}.</li>
              <li className='font-bold text-white text-center' ><span className='font-bold text-gray-950' >Dimension: </span>{dimension?.dimension}.</li>
              <li className='text-white text-center'><span className='font-bold text-gray-950'>Population: </span>{dimension?.residents.length}.</li>
            </ul>
          </section>
          :
          <section>
            <h2 className='text-center font-bold text-[32px] text-red-700 mt-[7%] p-5 '>{select?.name}</h2>
            <ul className='flex flex-col  items-center gap-2 pb-7'>
              <li className='font-bold text-white text-center'><span className='font-bold text-gray-950'>Type: </span>{select?.type}.</li>
              <li className='font-bold text-white text-center' ><span className='font-bold text-gray-950' >Dimension: </span>{select?.dimension}.</li>
              <li className='text-white text-center'><span className='font-bold text-gray-950'>Population: </span>{select?.residents?.length}.</li>
            </ul>        
          </section>

      }

    </section>
  )
}

