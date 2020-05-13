import React from 'react'

const RowElement = ({left, right}) => {
    return (
        <div className="row mb2">
                <div className="list-items col-md-6">
                   {left}
                </div>
                <div className="col-md-6">
                    {right}
                </div>
            </div>
    )
}

export default RowElement
