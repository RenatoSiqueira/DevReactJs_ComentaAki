import React, { useState } from 'react'

import NewComment from './NewComment'
import Comments from './Comments'
import UserInfo from './UserInfo'
import CreateUser from './CreateUser'
import SignInUser from './SignInUser'

import { AuthProvider } from './auth'

function App() {
  const [stateVisible, setStateVisible] = useState({ createUser: false, signInUser: false })
  return (
    <AuthProvider>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12 comments-main pt-4 rounded'>
            <Comments />
            <NewComment />
            <div className='row comment-box-main p-3 rounded-bottom'>
              {
                !stateVisible.signInUser &&
                <CreateUser state={stateVisible} setState={setStateVisible} />
              }
              {
                !stateVisible.createUser &&
                <SignInUser state={stateVisible} setState={setStateVisible} />
              }
              <UserInfo />
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App