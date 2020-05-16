import React from 'react'

const withChildFunc = (Wrapped, func) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {func}
            </Wrapped>
        )
    }  
}

export default withChildFunc
