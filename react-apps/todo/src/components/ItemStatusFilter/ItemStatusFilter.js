import React, {Component} from 'react'
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    render () {

        const {filter, onChangeFilter} = this.props

        const button = this.buttons.map(({name, label}) => {
            const isActive = filter === name
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => onChangeFilter(name)}
            >{label}</button>
            )
        })
    
        return (
            <div className="item-status-filter">
                {button}
            </div>
        )
    }
}

