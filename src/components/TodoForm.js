import React, { Component } from 'react'
import TodoIcon from './TodoIcon'
import './TodoForm.css'

export default class TodoForm extends Component {

    state = {
        icon: '',
        todo: '',
    }
    render() {
        return (
            <div>
                <div>
                    <TodoIcon value="📚"></TodoIcon>
                    <TodoIcon value="✏️"></TodoIcon>
                    <TodoIcon value="⏰"></TodoIcon>
                    <TodoIcon value="💑"></TodoIcon>
                    <TodoIcon value="🦁"></TodoIcon>
                    <TodoIcon value="🍒"></TodoIcon>
                </div>
                <form className="form-input-wrapper">
                    <input
                    className="input-icon"
                    name="icon"
                    value={this.state.icon}/>
                    <input 
                    type="text"
                    className="input-todo"
                    name="todo"
                    value = {this.state.todo}
                    placeholder = "Add new todo..."/>
                    <button className="add" 
                    type = "submit">+</button>
                </form>
            </div>
        )
    }
}
