import React, { useContext } from 'react'
import Time from './Time'

const Comment = ({ comment }) => {
    return (
        <ul className='p-0'>
            <li>
                <div className='row comments mb-2'>
                    <div className='col-md-2 col-sm-2 col-3 text-center user-img'>
                        <img src='http://nicesnippets.com/demo/man01.png' alt={comment.user.name} className='rounded-circle' />
                    </div>
                    <div className='col-md-9 col-sm-9 col-9 comment rounded mb-2'>
                        <h4 className='m-0'>{comment.user.name} </h4>
                        <time className='text-white ml-3'>em <Time timestamp={comment.createdAt} /></time>
                        <p className='mb-0 text-white'>{comment.content}</p>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default Comment