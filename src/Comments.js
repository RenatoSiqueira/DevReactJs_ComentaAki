import React from 'react'
import { useDatabase } from './database'
import Comment from './Comment'

const Loading = () => {
    return (
        <div className='loading'>
            <svg viewBox='0 0 200 200'>
                <g>
                    <path d='M 50,100 A 1,1 0 0 1 50,10' />
                </g>
                <g>
                    <path d='M 50,100 A 1,1 0 0 0 50,-10' />
                </g>
                <defs>
                    <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                        <stop offset='0%' style={{ 'stopColor': '#FF56A1', 'stopOpacity': '1' }} />
                        <stop offset='100%' style={{ 'stopColor': '#FF9350', 'stopOpacity': '1' }} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

const Comments = () => {
    const data = useDatabase('comments')
    if (!data) {
        return (
            <p>Nenhum Comentário.</p>
        )
    }
    const ids = Object.keys(data)
    if (ids.length === 0) {
        return <Loading />
    }
    return ids.map(id => {
        return <Comment comment={data[id]} key={id} />
    })

}

export default Comments