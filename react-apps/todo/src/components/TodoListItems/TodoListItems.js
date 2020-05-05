import React from 'react'
import './TodoListItems.css'


export default class TodoListItems extends React.Component {

    // state = {
    //     done: false,
    //     important: false
    // }

    // onLabelClick = () => {
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         }
    //     })
    // }

    // onMarkLabel = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important 
    //         }
    //     })
    // }

    render () {
        const {label, onDelete, 
            onToggleDone, onToggleImportant,
            done, important} = this.props

        let classNames = 'todo-list-item'
        if(done) {
            classNames += ' done'
        }
        if(important) {
            classNames += ' important'
        }

        const style = {
            color : important ? 'steelblue' : 'black',
            fontWeight : important ? 'bold' : 'normal'
        }   
    return( 
            <span className={classNames}>
                <span
                style={style}
                className="todo-list-item-label"
                onClick={ onToggleDone }
                >{ label }</span>
        
                <button type='button'
                    className="btn btn-outline-success btn-small pull-right"
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>
                <button type='button'
                    className="btn btn-outline-danger btn-small pull-right"
                    onClick={onDelete}>
                    <i className="fa fa-trash-o" />
                </button>   
            </span>
        
    )}
}

