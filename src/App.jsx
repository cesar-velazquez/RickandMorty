import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { getRandomDimension } from './utils/random';
import { LocationForm } from './components/LocationForm'
import { LocationInfo } from './components/LocationInfo';
import { ResidentList } from './components/ResidentList';


function App() {

  const [dimension, setDimension] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.search.value;
    callAxios(idLocation);
  }


  const callAxios = (id) => {    
    const urlBackgroundDimension = `https://rickandmortyapi.com/api/location/${id}`;    
    axios
      .get(urlBackgroundDimension)
      .then(({ data }) => setDimension(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const randomdimension = getRandomDimension(126);
    callAxios(randomdimension)
  }, [])
  return (    
    <main className={`bg-[url(/imgs/fondo.png)]  min-h-screen  grid  justify-center`} >
      <header>
        {
          dimension?.residents.length === 0 ?
            <div>
              <h1 className=' mt-10 font-fira h-[6rem] flex justify-center items-center p-[1rem] m-[1rem] rounded-2xl border-8 border-green-500 bg-gradient-to-r from-green-300 to-green-600'>Lo sentimos, aqui no hay habitantes, Recarga de nuevo</h1>
              <img className='rounded-full' src="/imgs/elements/nohabitantes.jpg" alt="Sin Habitantes" />
            </div>
            :
            <div>
              <div className=' flex justify-center '>
                <img className='absolute top-0 sm:h-[200px]' src="/imgs/elements/bolaverde.png" alt="" />
                <img className='z-10' src="/imgs/elements/nombre.png" alt="" />
              </div>
            </div>
        }
        <LocationInfo dimension={dimension} />
      </header>
      <section>
        <LocationForm handleSubmit={handleSubmit} />        
      </section>
      <section>
        <ResidentList residents={dimension?.residents ?? []} dimension={dimension} />
      </section>
    </main>

  )
}

export default App
