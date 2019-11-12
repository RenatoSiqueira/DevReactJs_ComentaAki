import React from 'react'
import { useDatabase } from './database'
import Comment from './Comment'

const Comments = () => {
    const data = useDatabase('comments')
    if (!data) {
        return (
            <p>Nenhum Comments</p>
        )
    }
    const ids = Object.keys(data)
    if (ids.length === 0) {
        return <p>Carregando...</p>
    }
    return ids.map(id => {
        return <Comment comment={data[id]} key={id} />
    })
}

export default Comments