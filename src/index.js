import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { DataIssueProvider } from './context/DataIssueContext';
import { DataRepoProvider } from './context/DataRepoContext';
import { DataUsersProvider } from './context/DataUserContext';
import { FormSearchProvider } from './context/FormSearchContext';
import { combineProviders } from './utils/combineProviders';
import './style/index.css';

const Providers = combineProviders([
  DataUsersProvider,
  DataRepoProvider,
  DataIssueProvider,
  FormSearchProvider
])

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

