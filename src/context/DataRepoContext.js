import {createContext, useContext, useState} from 'react';
import axios from 'axios';

const DataRepoContext = createContext();

export function useDataRepo() {
  return useContext(DataRepoContext);
}

export function DataRepoProvider({children}){
  const [dataRepo, setData] = useState([]);

  const getDataRepo = async (name) => {
    const repository = await axios.get(`${process.env.REACT_APP_API_URL}/users/${name}/repos`);
    setData(repository.data);
  }

  const getDetailRepo = async (name, repo) => {
    const repository = await axios.get(`${process.env.REACT_APP_API_URL}/repos/${name}/${repo}`);
    setData(repository.data);
  }

  return (
    <DataRepoContext.Provider value={{dataRepo, getDataRepo, getDetailRepo}}>
      {children}
    </DataRepoContext.Provider>
  )
}