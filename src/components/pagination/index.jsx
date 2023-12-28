const Pagination = ({page = 0, onPageChange }) => {
    const handlePrev = () => {
        if(onPageChange ){
            onPageChange(page - 1)
        }
    }
    const handleNext = () => {
        if(onPageChange ){
            onPageChange(page + 1)
        }
    }
    return(
    <div className="pagination">
        <button disabled={page === 0} className='button' onClick={handlePrev} >Prev</button>    
        <span>{page + 1}</span>
        <button className='button' onClick={handleNext} >Next</button>    
      </div>
    )
}

export default Pagination