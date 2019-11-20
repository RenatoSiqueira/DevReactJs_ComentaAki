import React, { useState } from 'react'
import { useDatabasePush } from './database'
import firebase from './firebase'

const NewComment = props => {
    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
    const date = new Date()

    const createComment = () => {
        //firebase.database.ServerValue.TIMESTAMP
        save({
            content: comment,
            createdAt: date.toLocaleDateString(),
            user: {
                id: 1,
                name: 'Renato'
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