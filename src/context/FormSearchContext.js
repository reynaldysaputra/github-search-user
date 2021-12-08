import {createContext, useContext, useState} from 'react';
import { useDataUsers } from './DataUserContext';

const FormSearchContext = createContext();

export function useFormSearch(){
  return useContext(FormSearchContext);
}

export function FormSearchProvider({children}) {
  const [textSearch, setTextSearch] = useState('');
  const {getDataUsers} = useDataUsers();

  const handleTextSearch = (e) => setTextSearch(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    getDataUsers(textSearch);
  }

  return(
    <FormSearchContext.Provider value={{textSearch, handleTextSearch, handleSearch}}>
      {children}
    </FormSearchContext.Provider>
  )
}