import React, {Component} from 'react'
import './AddItem.css'

export default class AddItem extends Component {

    state = {
        label:''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.props.onAdded(this.state.label)
        this.setState({
            label: ''
        }) 

    }

    render() {

        return (
                <form className="add-item d-flex"
                onSubmit={this.onSubmit}>
                    <input type="text"
                    className="form-control" 
                    onChange= {this.onLabelChange}
                    value={this.state.label}
                    />
                    <button 
                    type="submit" 
                    className="btn btn-outline-warning"
                    >Add Item</button>
                </form>
        )
    }
} 

