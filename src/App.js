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
  const [, save] = useDatabasePush('comments')
  return (
    <div>
      <NewComment />
      <Comments />
    </div>
  )
}

export default App