import React, { useState, useContext } from 'react'
import { AuthContext } from './auth'

const FormDisplayName = ({ displayName, user }) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName)
    const onChange = evt => {
        setNewDisplayName(evt.target.value)
    }
    const save = () => {
        if (newDisplayName !== '') {
            user.updateProfile({ displayName: newDisplayName })
        }
    }
    return (
        <>
            <p style={{ color: '#fff' }}>Logado como <strong>{displayName}.</strong></p>
            <input className='form-control' type='text' value={newDisplayName} onChange={onChange} />
            <button className='btn btn-info btn-block separator' onClick={save}>Trocar Nome</button>
        </>
    )
}

const UserInfo = () => {
    const auth = useContext(AuthContext)

    if (auth.user === null) {
        return null
    }

    const { displayName } = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')
    const dn = displayName || alternativeDisplayName

    return (
        <>
            <div className='col-md-12 col-sm-12 col-12 pr-0 comment-box'>
                <FormDisplayName displayName={dn} user={auth.user} />
                <button className='btn btn-warning btn-block' onClick={auth.signout}>Deslogar</button>
            </div>
        </>
    )
}

export default UserInfo