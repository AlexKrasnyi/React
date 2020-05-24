import React from 'react'
import { Redirect } from 'react-router-dom'

const SecretPage = ({ islogged}) => {
    if(islogged) {
        return(
            <div className="jumbotron text-center">
                <h1>This is a secret page!!!!</h1>

            </div>
        )
    }
    return <Redirect to="/login" />
}
export default SecretPage