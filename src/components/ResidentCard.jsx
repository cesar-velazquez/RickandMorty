import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({ residentUrl }) => {
  const [infresident, setInfresident] = useState(null)

  const residentStatus = {
    Alive: "bg-green-300",
    Dead: "bg-red-600",
    unknown: "bg-slate-400"
  }

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setInfresident(data))
      .catch((err) => console.log(err))
  }, [])
  return (
      <article className='w-[300px] border-[2px] border-green-400 pt-2 mb-8 mx-1 '>
        <header >
          <img className='' src={infresident?.image} alt="" />
          <div className='flex items-center gap-2 p-3 py-4 m-5 text-white border-2 h-5 w-[40%]'>
              <div className={`h-[10px] aspect-square ${residentStatus[infresident?.status]} rounded-full`} ></div>
              {infresident?.status}
            </div>          
        </header>
        <section className='font-fira'>
          <h3 className='text-[#FBFBFB] text-[25px] h-[40px] text-center shrink-0 font-bold mb-5 sm:text-[26px] sm:mb-10 ' >{infresident?.name}</h3>
          <ul className='leading-8 p-5 mt-5'>
            <li className='text-[#FBFBFB] text-[20px] font-semibold' ><span className='text-[#938686] font-fira text-[16px] font-medium'>Species: </span>{infresident?.species}</li>
            <li className='text-[#FBFBFB] text-[20px] font-semibold' ><span className='text-[#938686] font-fira text-[16px] font-medium' >Origin: </span>{infresident?.origin.name}</li>
            <li className='text-[#FBFBFB] text-[20px] font-semibold'><span className='text-[#938686] font-fira text-[16px] font-medium' >Times appear: </span>{infresident?.episode.length}</li>
          </ul>
        </section>
      </article>
  )
}

export default ResidentCard