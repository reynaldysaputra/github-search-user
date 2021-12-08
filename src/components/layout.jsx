import React from 'react';
import DocumentTitle from 'react-document-title';

function Layout({title, children}){
  return(
    <DocumentTitle title={title}>
      <div className='container mx-auto mt-16'>
        {children}
      </div>
    </DocumentTitle>
  )
}

export default Layout;