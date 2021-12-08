import React, { useState } from 'react';
import { useDataIssues } from '../context/DataIssueContext';

function ModalIssues({name, repo}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {setOpen, postIssue} = useDataIssues();

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0'> 
      <div className='w-full h-full bg-black/50 absolute' />
      <div className='relative flex justify-center items-center h-full'>
        <div className='w-10/12 lg:w-5/12 bg-white border-2 border-black'>
          <div className='px-4 py-3 border-b-2 border-black'>
            <h4 className='font-bold'>New Issue</h4>
          </div>
          <div className='px-4 py-3 my-10'>
            <form className='flex space-y-5 flex-col' onSubmit={(e) => postIssue(e, name, repo, title, description)}>
              <input 
                type="text" 
                placeholder='Title' 
                className='w-full outline-none px-2 py-1 border border-black' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea 
                placeholder='Description' 
                className='w-full outline-none px-2 py-1 border border-black'
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <div className='flex justify-end space-x-4'>
                <button type='submit' className='py-2 px-4 border border-black' onClick={() => setOpen(false)}>Cancel</button>
                <button type='submit' className='py-2 px-4 bg-black text-white'>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalIssues;