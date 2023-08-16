import React from 'react'

export const Pagination = ({ pages, setCurrentpage, currentpage, totalPages }) => {    
    return (
        <div className=''>
            <ul className='flex justify-center items-center flex-wrap text-[1rem] p-3 gap-3 cursor-pointer'>
                {
                    currentpage <= 1 ?
                        <i disabled className='bg-red-600 rounded-full text-[19px] bx bx-skip-next-circle bx-rotate-180' onClick={() => setCurrentpage(currentpage)} ></i>
                        :
                        <i className='bg-green-400 rounded-full text-[19px] p-1 bx bx-skip-next-circle bx-rotate-180 hover:bg-green-200' onClick={() => setCurrentpage(currentpage - 1)} ></i>
                }
                {
                    pages.map((page) => <li className={`flex justify-center items-center p-3 text-white  w-[20px] h-[20px]  m-2 font-fira font-bold rounded-3xl border-[2px] border-red-500 ${currentpage === page && "bg-teal-300 text-black "}`} onClick={() => setCurrentpage(page)} key={page}>{page}</li>)
                }
                {
                    currentpage === totalPages ? 
                    <i className='bg-red-600 rounded-full text-[19px] bx bx-skip-next-circle'></i>
                    :
                    <i className='p-1 bg-green-400 rounded-full text-[19px] bx bx-skip-next-circle hover:bg-green-200' onClick={() => setCurrentpage(currentpage + 1)}></i>
                }
            </ul>
        </div>
    )
}
