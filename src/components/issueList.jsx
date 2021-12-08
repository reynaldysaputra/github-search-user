import React from 'react';
import { formatDate } from '../utils/formatDate';

function IssueList({issueName, user, date}) {
  return(
    <div className='flex justify-between w-full mb-2'>
      <h2 className='font-bold'>{issueName}</h2>
      <p>{formatDate(date)} days ago by {user}</p>
    </div>
  )
}

export default IssueList;