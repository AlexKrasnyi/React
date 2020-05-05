import React from 'react'
import TodoListItem from '../TodoListItems'
import './todo-list.css'


const TodoList = ({todos, onDeleted,
					onToggleImportant, onToggleDone}) => {
    const elements = todos.map((item) => { 
			const { id, ...itemProps } = item
				return (
					<li key={id} 
					className="list-group-item justify-content-center todo-list"
					>
					<TodoListItem {...itemProps} 
					onDelete={() => onDeleted(id)} 
					onToggleDone={() => onToggleDone(id)}
					onToggleImportant={() => onToggleImportant(id)}
					
					/></li>
				// 	label={item.label} 
				// 	important={item.important} 
				// 	/></li>
				)
			})

    return(
     <ul className="list-group  todo-list">
       {elements}
     </ul>
    )}

    export default TodoList