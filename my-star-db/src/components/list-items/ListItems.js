import React, {Component} from 'react'
import './ListItems.css'

export default class ListItems extends Component {

    render() {
        return (
            <ul className="list-items list-group">
                <li className="list-group-item">
                    Luce Skywalker
                </li>
                <li className="list-group-item">
                    Dart Vader
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
            </ul>
        )
    }
}

