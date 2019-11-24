import React, { useState, useContext } from 'react'
import { AuthContext } from './auth'

const FormDisplayName = ({ DisplayName, user }) => {
    const [newDisplayName, setNewDisplayName] = useState(DisplayName)
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
            <input className='form-control' type='text' value={newDisplayName} onChange={onChange} />
            <button className='btn btn-info' onClick={save}>Save Display Name</button>
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
            <p> <strong>Usuário:</strong> {dn}!</p>
            { /*<FormDisplayName displayName={dn} user={auth.user} /> */}
            <button className='btn btn-warning' onClick={auth.signout}>Deslogar</button>
        </>
    )
}

export default UserInfo