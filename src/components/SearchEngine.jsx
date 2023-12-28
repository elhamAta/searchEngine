import React,{ useState,useEffect }  from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import useItemsQuery from './hooks/useItemsQuery';
import Pagination from './pagination';

function SearchEngine() {
  const [ value, setValue ] = useState("");
  const [ page, setPage ] = useState(0)
 
  const {data, isLoading, isError,error,prefetch} = useItemsQuery(page,value)

  useEffect(() => {
    prefetch(1)
  }, [prefetch])

  const handlePageCahnge = (newPage) => {
    setPage(newPage)
    prefetch(newPage + 1)
  }

  return (
    <div className="container">
      <div className='search--box'>
        <input
            type="text"
            placeholder="Type to search... "
            className="txt"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
      </div>
      <ul className="results--box">
        {isLoading && <span>is Loading...</span>}
        {isError && <span className='error'>{error.message}</span> }
        {data && data.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.id} - </span> 
              <Link to={"/"} className='title'>{item.title}</Link>
              <p className='info'>
                  {item.body}
              </p>
            </li>
          );
        })}
      </ul>
      <Pagination page={page} onPageChange={handlePageCahnge} />
  </div>
  )
}

export default SearchEngine