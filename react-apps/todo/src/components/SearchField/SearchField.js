import React, {Component} from 'react'
import './SearchField.css'

export default class SearchField extends Component {

    state = {
        term:''
    }

    onSendLabel = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onSendLabel(term)
    }

    

    render() {
        return(
            <input 
                className="search-field" 
                placeholder="search" 
                onChange={this.onSendLabel}
                value={this.state.term}
            />
        )
    }
}
