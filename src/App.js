import React from 'react'

import NewComment from './NewComment'
import Comments from './Comments'

import { useDatabasePush } from './database'
/*
firebase
  .auth()
  .createUserWithEmailAndPassword('renato@alfavoice.com.br', 'k0bain')
  .then(user => {
    //return user.update
  })

firebase
  .auth()
  .onAuthStateChanged(user => {
    if (user) {
      console.log(user.displayName)
      user.updateProfile({ displayName: 'Renato Siqueira' })
    }
  })
*/

function App() {
  //const [, save] = useDatabasePush('comments')
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-6 offset-md-3 col-sm-6 offset-sm-3 col-12 comments-main pt-4 rounded'>
          <Comments />
          <NewComment />
        </div>
      </div>
    </div>
  )
}

export default App