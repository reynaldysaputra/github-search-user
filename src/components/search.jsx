import React from 'react';
import { useFormSearch } from '../context/FormSearchContext';
import SearchIcon from './svg/searchSvg';
import { useHistory } from "react-router-dom";

function Search(){
  const {textSearch, handleTextSearch, handleSearch} = useFormSearch();
  let history = useHistory();

  return(
    <div className='flex space-x-3 mt-16'>
      <form onSubmit={(e) => {handleSearch(e); history.replace('/')}} className='flex space-x-3'>
        <div className='border-2 border-black px-2 py-1 flex items-center'>
          <SearchIcon className='cursor-pointer' />
          <input type="text" className='outline-none pl-2' value={textSearch} onChange={handleTextSearch} />
        </div>
        <button type='submit' className='border-black border-2 px-10 transition-all hover:bg-black hover:text-white'>Search</button>
      </form>
    </div>
  )
}

export default Search;