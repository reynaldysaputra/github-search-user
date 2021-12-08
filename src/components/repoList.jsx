import React from 'react';
import {Link} from 'react-router-dom';

function RepoList({name, stars, repo}){
  return(
    <Link to={`/users/${name}/${repo}/issues`}>
      <div className='flex w-full justify-between mb-3'>
        <div>
          <h4 className='font-bold'>{repo}</h4>
        </div>
        <div className='flex space-x-3'>
          <p className='italic'>{stars} Stars</p>
        </div>
      </div>
    </Link>
  )
}

export default RepoList;