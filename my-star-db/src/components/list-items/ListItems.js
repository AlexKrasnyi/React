import React from 'react'
import './ListItems.css'

const ListItems = (props) => {

        const { data, onItemSelected, children:renderItem } = props
        console.log(data)
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

export default ListItems

