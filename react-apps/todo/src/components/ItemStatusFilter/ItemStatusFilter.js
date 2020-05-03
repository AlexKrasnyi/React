import React, {Component} from 'react'
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {

    onButtonClick = () => {
        
    }

    render () {
        return (
            <div className="item-status-filter">
                <button type="button"
                className="btn btn-info">All</button>
                <button type="button"
                className="btn btn-outline-secondary">Active</button>
                <button type="button"
                className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}

