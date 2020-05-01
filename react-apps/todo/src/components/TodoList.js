import React from 'react'
import TodoListItem from './TodoListItems'

const TodoList = () => {
    return(
     <ul>
       <li><TodoListItem  label="Wake up in the morning"/></li>
       <li><TodoListItem label="Drink Coffee" important /></li>
     </ul>
    )}

    export default TodoList