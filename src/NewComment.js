import React, { useState, useContext } from 'react'
import { useDatabasePush } from './database'
import { AuthContext } from './auth'
import firebase from './firebase'

const NewComment = () => {
    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
    const auth = useContext(AuthContext)

    if (auth.user === null) {
        return null
    }

    const { uid, displayName } = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')

    const createComment = () => {
        save({
            content: comment,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            user: {
                id: uid,
                name: displayName || alternativeDisplayName
            }
        })
        setComment('')
    }

    return (
        <div className='row comment-box-main p-3 rounded-bottom'>
            <div className='col-md-9 col-sm-9 col-9 pr-0 comment-box'>
                <input
                    type='text'
                    className='form-control'
                    value={comment}
                    onChange={evt => setComment(evt.target.value)}
                    placeholder='Comente aqui...'
                />
            </div>
            <div className='col-md-3 col-sm-2 col-2 pl-0 text-center send-btn'>
                <button className='btn btn-info' onClick={createComment}>Comentar</button>
            </div>
        </div>
    )
}

export default NewComment