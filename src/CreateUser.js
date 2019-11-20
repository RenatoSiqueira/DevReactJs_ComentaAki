import React, { useContext } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    return (
        <>
            <button onClick={() => {
                auth.createUser.createUser('renato@teste', 'abc123')
            }}>New Account</button>
            {JSON.stringify(auth.createUser)}
        </>
    )
}

export default CreateUser