import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = () => {
    return (
        <div className="error">
            <h4 className="boom">Boom!</h4>
            <span>something went wrong </span>
            <br></br>
            <span>we will fix it soon</span>
        </div>
    )
}

export default ErrorMessage
