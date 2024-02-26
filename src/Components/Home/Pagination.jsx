import React from 'react'

import './Pagination.css'

const Pagination = ({data}) => {
    console.log(data)
    const {currentPage,setCurrentPage,totalPages}=data
    console.log(currentPage,setCurrentPage,totalPages)
    const paginationArray=[]
    for(let i=1 ;i<=totalPages;i++){
        paginationArray.push(i)
        console.log(paginationArray,"pagination")
    }
  return (
    <div className='pagination-container'>
    <button className="pagination-bution" style={{width:"60px", marginRight:"15px"}} onClick={()=>{setCurrentPage((i)=>i-1)}} disabled={currentPage === 1}>Prev..</button>
   { paginationArray.map((i)=>{
    return (<button className="pagination-bution" style={{backgroundColor:(i===currentPage) && "grey"}} onClick={()=>{setCurrentPage(i)}}>{i}</button>)
    })}
    <button className="pagination-bution" style={{width:"60px", marginLeft:"15px"}} onClick={()=>{setCurrentPage((i)=>i+1)}} disabled={currentPage === totalPages}>Next..</button>

    </div>
  )
}

export default Pagination