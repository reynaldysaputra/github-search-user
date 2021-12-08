import React from 'react';
import UserProfile from '../components/userProfile';
import { useDataUsers } from '../context/DataUserContext';
import Layout from '../components/layout';

function Home(){
  const {data} = useDataUsers();
  
  return(
    <Layout title='Home'>
      <div className='flex flex-wrap lg:space-x-4 justify-center mt-20'>
        {data.length > 1 ? data.map(users => (
          <UserProfile key={users.id} name={users.login} avatar={users.avatar_url} />
        )) : (
          <h2>No Data</h2>
        )}
      </div>
    </Layout>
  )
}

export default Home;