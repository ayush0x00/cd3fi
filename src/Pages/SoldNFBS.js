import React from 'react'
import Card from '../components/Sales/Card'
import certificate from '../Media/NFBCertificate.png'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { data } from '../fakeData'

export default function SoldNFBs() {
 
  const itemsPerPage = 8;
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)


  {/* Import your own fetched data for the items */}
  const items = data

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])



  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset)
    
  }


  return (
    <div className='flex flex-col '>
      <ReactPaginate
        breakLabel='...'
        pageCount={pageCount}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        className='text-white flex justify-center space-x-2 items-center sm:space-x-[3px] '
        previousLinkClassName='bg-teal-200 text-blue-900 py-1 px-2 rounded-lg sm:text-sm font-bold hover:bg-teal-300'
        nextLinkClassName='bg-teal-200 text-blue-900 px-2 py-1 rounded-lg sm:text-sm font-bold hover:bg-teal-300'
        pageLinkClassName='bg-white text-blue-800 px-2 py-1 rounded sm:px-1 sm:text-sm sm:hidden hover:bg-gray-600 hover:text-white'
        renderOnZeroPageCount={null}
      />
      <div className='text-white grid grid-cols-4 lg:grid-cols-2 justify-center xl:grid-cols-3 sm:grid-cols-1'>
        {currentItems.map((e,i)=>{
          {/* Send data according to the structure of data in the given variables */}
          return(
            <div key={i}>
          <Card img={e.img} price={e.price} band={e.band} time={e.time} button={e.button} />
          </div>
          )
        })}

      </div></div>
  )
}
