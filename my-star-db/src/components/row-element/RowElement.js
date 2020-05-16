import React from 'react'
import PropType from 'prop-types'

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

RowElement.propType = {
    left: PropType.node, 
    right: PropType.node
}

export default RowElement
