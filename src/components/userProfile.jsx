import React from 'react';
import { Link } from 'react-router-dom';

function UserProfile({name, avatar}){
  return(
    <Link to={`/users/${name}`}>
      <div className='flex flex-col justify-center px-2 cursor-pointer mb-12'>
        <img 
          src={avatar}
          className='shadow-md rounded-xl max-w-[150px]'
          alt={name} 
        />
        <p className='mt-4 text-center'>{name}</p>
      </div>
    </Link>
  )
}

export default UserProfile;