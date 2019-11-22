import React from 'react'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import SignInUser from './SignInUser'
import UserInfo from './UserInfo'


import { AuthProvider } from './auth'

function App() {
  return (
    <AuthProvider>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12 comments-main pt-4 rounded'>
            <Comments />
            <NewComment />
            <CreateUser />
            <SignInUser />
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App