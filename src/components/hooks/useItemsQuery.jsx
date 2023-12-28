import {useQuery} from 'react-query'
import fetchItems from '../api'
import { queryClient } from '../../App';

function prefetch (newPage){
  queryClient.prefetchQuery({
    queryFn: fetchItems(newPage),
    queryKey : [`Search-item_${newPage}`],
  });
}

const useItemsQuery = (page = 0,value) => {  
  console.log("value",value)

    return {
      ...useQuery([`Search-item_${page}`],
      fetchItems(page),
      ),
      prefetch
    }
}

export default useItemsQuery