import React from 'react'
import ResidentCard from './ResidentCard'

export const ResidentList = ({residents}) => {  
  console.log(residents?.length)
  return (
  <div>
    {
      residents?.length == 1 && <section className='grid justify-center ' >    
      {
        residents.map((resident) =><ResidentCard residentUrl={resident} key={resident}/>)
      }
    </section>
    }
        {
      residents?.length == 2 && <section className='grid justify-center sm:grid sm:grid-cols-2 xl:grid-cols-2' >    
      {
        residents.map((resident) =><ResidentCard residentUrl={resident} key={resident}/>)
      }
    </section>
    }
        {
      residents?.length > 2 && <section className='grid justify-center sm:grid sm:grid-cols-2 xl:grid-cols-3' >    
      {
        residents.map((resident) =><ResidentCard residentUrl={resident} key={resident}/>)
      }
    </section>
    }
      
  </div>
  )
}
