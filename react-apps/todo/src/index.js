import React from 'react'
import ReactDom from 'react-dom'
import AppHeader from './components/AppHeader'
import SearchField from './components/SearchField'
import TodoList from './components/TodoList'
import ItemStatusFilter from './components/ItemStatusFilter'


const App = () => {

  const todoData = [
    {label: "Wake up in the morning", important: false, id: 1},
    {label: "Drink Coffee", important: false, id: 2},
    {label: "Make awersome App", important: true, id: 3},
    {label: "Eat lunch", important: false, id: 4},
    {label: "To go for a walk ", important: true,id: 5}
  ]

  return (
  <div>
    <AppHeader />
    <SearchField />
    <ItemStatusFilter />
    <TodoList todos={todoData}/>
  </div>
  )
}  

ReactDom.render(<App />, document.getElementById('root'))