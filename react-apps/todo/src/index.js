import React from 'react'
import ReactDom from 'react-dom'
import AppHeader from './components/AppHeader'
import SearchField from './components/SearchField'
import TodoList from './components/TodoList'


const App = () => {
  return (
  <div>
    <AppHeader />
    <SearchField />
    <TodoList />
  </div>
  )
}  

ReactDom.render(<App />, document.getElementById('root'))