import {createContext, useContext, useState} from 'react';
import axios from 'axios';

const DataIssueContext = createContext();

export function useDataIssues() {
  return useContext(DataIssueContext);
}

export function DataIssueProvider({children}){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const getDataIssue = async (name, repo) => {
    const issues = await axios.get(`${process.env.REACT_APP_API_URL}/repos/${name}/${repo}/issues`);
    setLoading(false)
    setData(issues.data);
  }

  const postIssue = async (e, name, repo, title, description) => {
    e.preventDefault();

    const issues = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/repos/${name}/${repo}/issues`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_USER_TOKEN}`
      },
      data: JSON.stringify({title, description})
    });
    
    getDataIssue(name, repo);

    alert('Successfully created a new issue');
  }

  return (
    <DataIssueContext.Provider value={{data, loading, open, setOpen, getDataIssue, postIssue}}>
      {children}
    </DataIssueContext.Provider>
  )
}