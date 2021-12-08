import React, { useEffect } from 'react';
import Layout from '../components/layout';
import RepoList from '../components/repoList';
import { useDataRepo } from '../context/DataRepoContext';

function RepositoryUsers(props) {
  const {dataRepo, getDataRepo} = useDataRepo();

  useEffect(() => getDataRepo(props.match.params.nameUsers), []);

  return(
    <Layout title='Repository'>
      <h2 className='font-bold text-xl'>Repositories</h2>
      <div className='mt-16'>
        {dataRepo.length > 1 && dataRepo.map(repo => (
          <RepoList 
            key={repo.id} 
            name={repo.owner.login} 
            repo={repo.name} 
            stars={repo.stargazers_count} 
          />
        ))}
      </div>
    </Layout>
  )
}

export default RepositoryUsers;