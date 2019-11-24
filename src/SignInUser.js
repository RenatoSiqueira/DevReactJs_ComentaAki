import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const SignInUser = ({ state, setState }) => {
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
    if (!state.signInUser) {
        return (
            <div className='col-md-3 col-sm-2 col-2 pl-0 text-center send-btn'>
                <button className='btn btn-info' onClick={() => setState({
                    ...state,
                    signInUser: true
                })}>Fazer Login</button>
            </div>
        )
    }
    return (
        <div className='col-md-9 col-sm-9 col-9 pr-0 comment-box'>
            <h3 className='text-box'>Entrar na sua Conta</h3>
            {
                auth.signInUser.signInUserState.error !== '' &&
                <div className='alert alert-danger' role='alert'>
                    <strong>Error: </strong> {auth.signInUser.signInUserState.error}
                </div>
            }
            <input
                type='text'
                placeholder='Seu Email'
                className='form-control'
                value={form.email}
                onChange={onChange('email')}
            />
            <input
                type='password'
                placeholder='Sua Senha'
                className='form-control separator'
                value={form.passwd}
                onChange={onChange('passwd')}
            />
            <button
                className='btn btn-primary btn-block separator'
                onClick={() => auth.signInUser.signInUser(form.email, form.passwd)}
            >
                Entrar
            </button>
            <button
                className='btn btn-info btn-block'
                onClick={() => setState({
                    ...state,
                    signInUser: false
                })}
            >
                Cancelar
            </button>
        </div>
    )
}

export default SignInUser