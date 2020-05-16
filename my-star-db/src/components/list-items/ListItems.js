import React from 'react'
import PropTypes from 'prop-types'
import './ListItems.css'

const ListItems = (props) => {

        const { data, onItemSelected, children:renderItem } = props
        const peoples = data.map((item) => {
            const {id} = item 
            const label = renderItem(item)
            return (
                <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                    {label}
                </li>
                )
            })
        
        return (
            <ul className="list-items list-group">
                {peoples}
            </ul>
            )
    }

    ListItems.propTypes = {
        onItemSelected: PropTypes.func,
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        children: PropTypes.func.isRequired
    }

export default ListItems

