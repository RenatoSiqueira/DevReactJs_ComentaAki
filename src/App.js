import React, { useState } from 'react'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'

import { useDatabasePush } from './database'
import { AuthProvider } from './auth'

function App() {
  //const [, save] = useDatabasePush('comments')
  return (
    <AuthProvider>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12 comments-main pt-4 rounded'>
            <Comments />
            <NewComment />
            <CreateUser />
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App