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
      this.createTodoItem("Wake up in the morning"),
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make awersome App"),
      this.createTodoItem("Eat lunch"),
      this.createTodoItem("To go for a walk")
    ],
    term: '',
    filter: 'active' // all or active or done
  }

  createTodoItem(label) {
    return {
      label,
      done:false, 
      important: false,
      id: this.maxId++
    }
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
  const newItem = this.createTodoItem(text)

  this.setState(({todoData}) => {

    const newData = [...todoData, newItem]
    return {
      todoData: newData
    }
  })
 }

 toggleProperty(arr, id, propertyName) {
  const idx = arr.findIndex((c) => c.id ===id)
  const oldItem = arr[idx]
  const newDone = { ...oldItem, [propertyName]: !oldItem[propertyName]}

  return [ ...arr.slice(0, idx), newDone, ...arr.slice(idx + 1)]
}

 onToggleDone = (id) => {
  this.setState(({todoData}) => {
     return {
       todoData: this.toggleProperty(todoData, id, 'done')
      }
  }
  )
 }

 onToggleImportant = (id) => {
  this.setState(({todoData}) => {
    return {
      todoData: this.toggleProperty(todoData, id, 'important')
     }
 }
  )
 }

 search(todoData, term) {
  if(term === 0) {
    return todoData
  }

  return todoData.filter((todoData) => {
    return  todoData.label.toLowerCase().indexOf(term.toLowerCase()) > -1 
   })
  }

  filter (items, filter) {
    switch(filter) {
      case 'all': return items
      case 'active': return items.filter((items) =>  !items.done )
      case 'done': return items.filter((items) =>  items.done)
      default : return items
    }
  }

  onSendLabel = (term) => {
    this.setState({term})
  }
  onChangeFilter = (filter) => {
    this.setState({filter})
  }

  render() {

    const {todoData, term, filter} = this.state

    const visItems = this.filter(this.search(todoData, term), filter)

    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount


    return (
      <div className=" container wrapper ">
        <div className="justify-content-center">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="row d-flex">
        <SearchField  className="col-md-7"
        onSendLabel={this.onSendLabel}/>
        <ItemStatusFilter 
        filter={filter}
        onChangeFilter={this.onChangeFilter}
        />
        </div>
        <TodoList todos={ visItems }
        onDeleted={ this.deleteItem }
        onToggleDone={ this.onToggleDone }
        onToggleImportant={ this.onToggleImportant }
        
        />
        <AddItem onAdded={this.addItem} />
        </div>
      </div>
      )
  }
}
