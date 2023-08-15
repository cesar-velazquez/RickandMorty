import React from 'react'

export const Pagination = ({ pages, setCurrentpage, currentpage, totalPages }) => {    
    return (
        <div className=''>
            <ul className='flex justify-center items-center flex-wrap text-[1rem] p-3'>
                {
                    currentpage <= 1 ?
                        <i disabled className='bg-red-600 rounded-full text-[19px] bx bx-skip-next-circle bx-rotate-180' onClick={() => setCurrentpage(currentpage)} ></i>
                        :
                        <i className='bg-green-400 rounded-full text-[19px] bx bx-skip-next-circle bx-rotate-180' onClick={() => setCurrentpage(currentpage - 1)} ></i>
                }
                {
                    pages.map((page) => <li className={` text-white m-2 font-fira rounded-3xl ${currentpage === page && "bg-green-300 text-black "}`} onClick={() => setCurrentpage(page)} key={page}>{page}</li>)
                }
                {
                    currentpage === totalPages ? 
                    <i className='bg-red-600 rounded-full text-[19px] bx bx-skip-next-circle'></i>
                    :
                    <i className='bg-green-400 rounded-full text-[19px] bx bx-skip-next-circle' onClick={() => setCurrentpage(currentpage + 1)}></i>
                }
            </ul>
        </div>
    )
}
