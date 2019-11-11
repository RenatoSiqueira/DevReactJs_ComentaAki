import React, { useState, useEffect } from 'react'

import firebase from './firebase'

const Comments = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const ref = firebase.database().ref('test')
    ref.on('value', snapshot => {
      setData(snapshot.val())
    })
    return () => {
      ref.off()
    }
  }, [])

  return (
    <pre>{JSON.stringify(data)}</pre>
  )
}

function App() {
  const [visible, toggle] = useState(true)

  return (
    <div>
      {
        visible &&
        <Comments />
      }
      <button onClick={() => toggle(!visible)}>Toggle Comments</button>
    </div>
  )
}

export default App