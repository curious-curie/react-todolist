import React, { Component } from 'react'
import TodoIcon from './TodoIcon'
import './TodoItem.css'

export default class TodoItem extends Component {

    state = {
        icon: '',
        todo: '',
    }
    render() {
        return (
            <div>
                <div className = "todo-item">
                    <TodoIcon value={this.props.icon}></TodoIcon>
                    <span className = "todo">{this.props.todo}</span>
                    <span className="checkbox"> ⃞ </span>
                </div>
                
            </div>
        )
    }
}
