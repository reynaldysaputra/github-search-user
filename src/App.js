import React from 'react';
import Search from './components/search';
import {Switch, Route} from 'react-router-dom';
import Home from './screens/home';
import RepositoryUsers from './screens/repositoryUsers';
import IssuesUsers from './screens/issuesUsers';

function App(){  
  return(
    <>
      {/* Search input */}
      <div className='flex justify-center'>
        <Search />
      </div>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/users/:nameUsers' exact component={RepositoryUsers} />
        <Route path='/users/:nameUsers/:repo/issues' component={IssuesUsers} />
      </Switch>
    </>
  )
}

export default App;