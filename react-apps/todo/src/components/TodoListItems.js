import React from 'react'
import './TodoListItems.css'

const TodoListItems =  ({ label, important = false}) => {
    const style = {
        color : important ? 'steelblue' : 'black',
        fontWeight : important ? 'bold' : 'normal'
    }

return( 
    <span className="todo-list-item">
        <span
        style={style}
        className="todo-list-item-label"
        >{ label }</span>

        <button type='button'
            className="btn btn-outline-success btn-small">
            <i className="fa fa-exclamation" />
        </button>
        <button type='button'
            className="btn btn-outline-danger btn-small">
            <i className="fa fa-trash-o" />
         </button>   
    </span>
)}
export default TodoListItems