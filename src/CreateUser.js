import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const CreateUser = ({ state, setState }) => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({ email: '', passwd: '' })
    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }
    if (auth.user !== null) {
        return null
    }
    if (!state.createUser) {
        return (
            <div className='col-md-9 col-sm-9 col-9 pr-0 comment-box'>
                <button
                    className='btn btn-info'
                    onClick={() => setState({
                        ...state,
                        createUser: true
                    })}
                >
                    Criar Nova Conta
                    </button>
            </div>
        )
    } else
        return (

            <div className='col-md-9 col-sm-9 col-9 pr-0 comment-box'>
                <h3 className='text-box'>Criar Nova Conta</h3>
                {
                    auth.createUser.createUserState.error !== '' &&
                    <div className='alert alert-danger' role='alert'>
                        <strong>Error: </strong> {auth.createUser.createUserState.error}
                    </div>
                }
                <input
                    type='text'
                    placeholder='Seu Email'
                    value={form.email}
                    className='form-control'
                    onChange={onChange('email')}
                />
                <input
                    type='password'
                    placeholder='Sua Senha'
                    value={form.passwd}
                    className='form-control separator'
                    onChange={onChange('passwd')}
                />
                <button
                    className='btn btn-primary btn-block separator'
                    onClick={() => auth.createUser.createUser(form.email, form.passwd)}>
                    Criar Conta
                </button>
                <button
                    className='btn btn-info btn-block'
                    onClick={() => setState({
                        ...state,
                        createUser: false
                    })}
                >
                    Cancelar
                </button>
            </div>
        )
}

export default CreateUser