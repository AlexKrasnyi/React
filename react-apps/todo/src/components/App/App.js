import React, {Component} from 'react'
import AppHeader from '../AppHeader'
import SearchField from '../SearchField'
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'
import AddItem from '../AddItem'
import './App.css'


export default class App extends Component  {

  maxId = 10
  state={
    todoData: [
      {label: "Wake up in the morning", important: false, id: 1},
      {label: "Drink Coffee", important: false, id: 2},
      {label: "Make awersome App", important: true, id: 3},
      {label: "Eat lunch", important: false, id: 4},
      {label: "To go for a walk ", important: true,id: 5}
    ]
  }
  
deleteItem = (id) => {
  this.setState (({ todoData }) => {
    const idx = todoData.findIndex((el) => el.id === id)
    // todoData.splice(idx, 1)(изменяем предыдущий state - так делать нельзя)
    // const before = todoData.slice(0, idx)
    // const after = todoData.slice(idx + 1)

    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    return {
      todoData: newArray
    }
  })
}

 addItem = (text) => {
  const newItem = {
    label: text,
    important: false,
    id: this.maxId++
  }
  this.setState(({todoData}) => {

    const newData = [...todoData, newItem]
    return {
      todoData: newData
    }
  })

 }

  render() {
    return (
      <div className=" container wrapper ">
        <div className="justify-content-center">
        <AppHeader toDo={1} done={3}/>
        <SearchField />
        <TodoList todos={this.state.todoData}
        onDeleted={ this.deleteItem }/>
        <AddItem onAdded={this.addItem} />
        </div>
      </div>
      )
  }
}
