import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { getRandomDimension } from './utils/random';
import { LocationInfo } from './components/LocationInfo';
import { ResidentList } from './components/ResidentList';


function App() {
  const [word, setWord] = useState("")
  const [results, setResults] = useState([])
  const [dimension, setDimension] = useState(null);
  const [select, setSelect] = useState(null);
  


  const handleChange = (e) => {
    const dimensionSearch = e.target.value;
    setWord(dimensionSearch)

    const filterDimension = results.filter((dim) =>
      dim.name.toLowerCase().includes(dimensionSearch.toLowerCase()));
    setResults(filterDimension);

    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${dimensionSearch}`)
      .then(({ data }) => setResults(data.results))
      .catch((err) => console.log(err))
  }

  const handleButton = (select) => {
    if (select) {
      setResults([])
      setSelect(select)
      const url = `https://rickandmortyapi.com/api/location/?name=${select}`;
      axios
        .get(url)
        .then(({ data }) => setSelect(data.results[0]))
        .catch((err) => console.log(err))
    }
  }

  const inicio = () => {
    const id = getRandomDimension(126)
    const urlBackgroundDimension = `https://rickandmortyapi.com/api/location/${id}`;
    axios
      .get(urlBackgroundDimension)
      .then(({ data }) => setDimension(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const randomdimension = getRandomDimension(126);
    inicio(randomdimension)
  }, [])
  return (
    <main className={`bg-[url(/imgs/fondo.png)] min-h-screen
    grid justify-center`} >
      <header>
        {dimension?.residents?.length === 0 || select?.residents?.length === 0 ? (
          <div>
            <h1 className='mt-10 font-fira h-[6rem] flex justify-center items-center p-[1rem] m-[1rem] 
    rounded-2xl border-8 border-green-500 bg-gradient-to-r from-green-300 to-green-600'>
              Sorry, there are no inhabitants here, <a href='/' className='hover:font-semibold underline'>Recharge again</a>
            </h1>
            <img className='rounded-full mx-auto max-w-[30%] ' src="/imgs/elements/nohabitantes.jpg"
              alt="Sin Habitantes" />
          </div>
        ) : (
          <div className='flex justify-center'>
            <img className='absolute top-0 sm:h-[200px]' src="/imgs/elements/bolaverde.png" alt="" />
            <img className='z-10' src="/imgs/elements/nombre.png" alt="" />
          </div>
        )}




        <LocationInfo select={select} dimension={dimension} />
      </header>

      <section className='relative z-10 '>
        <div className=' flex justify-center mt-10 pt-1 px-4'>
          <i className='bx bx-tada bxs-planet bx-border-circle
          border-black border-solid bg-white p-2 sm:mr-3'></i>
          {
            dimension?.residents?.length === 0 ?
            <input
            id='search'
            disabled
            onChange={handleChange}
            value={word}
            className=' text-center border-2 border-r-0 border-green-400 focus:border-4
            focus:border-green-400 sm:w-[70%] max-w-xl outline-none'
            type="text"
            placeholder='Recharge again...'
            autoComplete='off'
          />
          :
          <input
          id='search'
          onChange={handleChange}
          value={word}
          className=' text-center border-2 border-r-0 border-green-400 focus:border-4
          focus:border-green-400 sm:w-[70%] max-w-xl outline-none'
          type="text"
          placeholder='Search a location...'
          autoComplete='off'
        />
          }
        </div>

        <article className='max-w-[400px] m-auto '>
          {word.length > 0 && (
            <section>
              <ul>
                {
                  results.map((result) => (
                    <button className='w-[80%] border
                      border-red-500 flex
              justify-center m-auto px-4 py-1 text-white
              hover:bg-red-600 hover:border-2 hover:border-green-400
              hover:scale-105 transition-colors duration-500'
                      key={result.id}
                      onClick={() => handleButton(result.name)}
                    >
                      {result.name}
                    </button>
                  ))
                }
              </ul>
            </section>
          )}
        </article>

        <p className=' text-[#8EFF8B] bg-black/70 rounded-3xl p-4 text-center font-fira text-[15px]
        font-medium leading-normal my-7 '> ¡Welcome to the crazy universe of:
          {select === null ?
            <span className='flex justify-center font-semibold text-xl' >"{dimension?.name}"</span>
            :
            <span className='flex justify-center font-semibold text-xl'>"{select?.name}"</span>} </p>
      </section>

      <section>
        <ResidentList
          selectResidents={select?.residents ?? []} select={select}
          residents={dimension?.residents ?? []} dimension={dimension} />
      </section>
    </main>

  )
}

export default App
