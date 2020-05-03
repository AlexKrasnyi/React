import React from 'react'
import './AddItem.css'

const AddItem = ({onAdded}) => {
    return (
        <form>
            <div className="row add-item">
                <input type="text" className="col-md 10 " />
                <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={() => onAdded('Hello World') }
                >Add Item</button>
            </div>
        </form>
    )
}

export default AddItem
