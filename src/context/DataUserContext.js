import {createContext, useContext, useState} from 'react';
import axios from 'axios';

const DataUsersContext = createContext();

export function useDataUsers() {
  return useContext(DataUsersContext);
}

export function DataUsersProvider({children}){
  const [data, setData] = useState([]);

  const getDataUsers = async (textSearch) => {
    const users = await axios.get(`${process.env.REACT_APP_API_URL}/search/users?q=${textSearch}`);
    
    if(users.status === 200) setData(users.data.items);
  }

  return (
    <DataUsersContext.Provider value={{data, getDataUsers}}>
      {children}
    </DataUsersContext.Provider>
  )
}