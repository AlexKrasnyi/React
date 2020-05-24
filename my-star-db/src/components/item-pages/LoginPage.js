import React from 'react'
import { Redirect } from 'react-router-dom'

const LoginPage = ( { islogged, onLogin } ) => {
    if(islogged) {
        return <Redirect to="/" />
    }

    return (
        <div className="jumbotron">
            <h4>You must login in order to secret page!</h4>
            <button 
            className="btn btn-primary btn-sm"
            onClick={onLogin}
            >Login</button>
        </div>
    )
}
export default LoginPage