import React, { useEffect } from 'react';
import IssueList from '../components/issueList';
import Layout from '../components/layout';
import ModalIssues from '../components/modalIssue';
import {useDataIssues} from '../context/DataIssueContext';
import { useDataRepo } from '../context/DataRepoContext';

function IssuesUsers(props) {
  const {data, loading, open, setOpen, getDataIssue} = useDataIssues();
  const {dataRepo, getDetailRepo} = useDataRepo();
  const {params} = props.match;

  useEffect(() => {
    getDataIssue(params.nameUsers, params.repo);
    getDetailRepo(params.nameUsers, params.repo);
  }, [data])

  if(loading) return <h3 className='text-center'>Loading...</h3>

  return(
    <Layout title='Issues'>
      {/* Show Detail Repo */}
      <div className='flex justify-between mb-16'>
        <h2 className='font-bold text-2xl'>{dataRepo.name}</h2>
        <p>{dataRepo.stargazers_count} stars</p>
      </div>

      {/* Input New Issue */}
      <div className='flex justify-between mb-10 items-center'>
        <h2 className='font-bold text-xl'>Open Issues</h2>
        <button className='border-2 border-black px-3 py-2' onClick={() => setOpen(true)}>New Issue</button>
      </div>

      {/* Show Issue */}
      {data.length > 0 ? data.map(issue => (
        <IssueList key={issue.id} issueName={issue.title} user={issue.user.login} date={issue.updated_at} />
      )) : (
        <h2 className='text-center'>No Issues</h2>
      )}

      {open && <ModalIssues name={params.nameUsers} repo={params.repo} />}
    </Layout>
  )
}

export default IssuesUsers;