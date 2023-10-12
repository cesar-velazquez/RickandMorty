import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'
import { Pagination } from './Pagination';

const PAGE_INITIAL = 1;
export const ResidentList = ({ residents, dimension, 
  selectResidents, select }) => {
  const [currentpage, setCurrentpage] = useState(1);

  //cantidad de residentes por pagina 
  const RESIDENTS_PER_PAGE = 20;

  //cantidad total de pags
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)
  // console.log(totalPages)
  const SelectTotalPages = Math.ceil(selectResidents.length / RESIDENTS_PER_PAGE)
  // console.log(SelectTotalPages)

  //Residentes que se van a mostrar en la página actual
  const sliceStart = (currentpage - 1) * RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(sliceStart, sliceEnd)
  // console.log("residentsInPage", residentsInPage)
  const residentsSelectInPage =selectResidents.slice(sliceStart, sliceEnd)
// console.log("residentsSelectInPage", residentsSelectInPage)

  // const SelectResidentsInPage = selectResidents.slice(sliceStart, sliceEnd)

  //Generación del arreglo de las paginas que se van a mostrar
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  // console.log("pages", pages)


  const pagesSelect = []
  for (let i = 1; i <= SelectTotalPages; i++) {
    pagesSelect.push(i);    
  }
  // console.log("pagesSelect", pagesSelect)


  useEffect(() => {
    setCurrentpage(PAGE_INITIAL)
  }, [dimension, select])

  return (
    <div>
      {
        select === null ?
          (
            <section>
              {
                residents?.length == 1 && 
                <section className='grid justify-center ' >
                  {
                    residents.map((resident) => 
                    <ResidentCard residentUrl={resident} 
                    key={resident} />)
                  }
                </section>
              }
              {
                residents?.length == 2 && 
                <section className='grid justify-center sm:grid 
                sm:grid-cols-2 xl:grid-cols-2' >
                  {
                    residents.map((resident) => 
                    <ResidentCard residentUrl={resident} 
                    key={resident} />)
                  }
                </section>
              }
              {
                residents?.length > 2 &&
                <section className='grid justify-center 
                sm:grid sm:grid-cols-2 xl:grid-cols-3' >
                  {
                    residentsInPage.map((resident) => 
                    <ResidentCard residentUrl={resident} 
                    key={resident} />)
                  }
                </section>
              }
            </section>
          )
          :
          (
            <section>
              {
                selectResidents?.length == 1 && <section className='grid justify-center ' >
                  {
                    selectResidents.map((selectResident) => 
                    // <ResidentCard select={select} selectResidents={selectResidents} key={selectResident} 
                    <ResidentCard residentUrl={selectResident} key={selectResident}/>)
                  }
                </section>
              }
              {
                selectResidents?.length == 2 && <section className='grid justify-center sm:grid sm:grid-cols-2 xl:grid-cols-2' >
                  {
                    selectResidents.map((selectResident) => 
                    // <ResidentCard select={select} selectResidents={selectResidents} key={selectResident} 
                    <ResidentCard residentUrl={selectResident} key={selectResident}/>)
                  }
                </section>
              }
              {
                selectResidents?.length > 2 &&
                <section className='grid justify-center sm:grid sm:grid-cols-2 xl:grid-cols-3' >
                  {
                    // SelectResidentsInPage.map((selectResident) => 
                    residentsSelectInPage.map((selectResident) => 
                    // <ResidentCard select={select} selectResidents={selectResidents} key={selectResident} 
                    <ResidentCard residentUrl={selectResident} 
                    key={selectResident}/>)
                  }
                </section>
              }
            </section>
          )
      }

      <section>
        <Pagination 
        pages={pages} 
        setCurrentpage={setCurrentpage} 
        currentpage={currentpage} 
        totalPages={totalPages} 
        select={select}
        pagesSelect={pagesSelect}
        SelectTotalPages={SelectTotalPages}
        />
      </section>

    </div>
  )
}
