import React, { Component } from 'react'
import TodoIcon from './TodoIcon'
import './TodoForm.css'

export default class TodoForm extends Component {

    state = {
        icon: '',
        todo: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            icon: '',
            todo: '',
        })

    }
    handleIcon = (e) => {
        this.setState({
            icon: [e.target.value]
        })
    }
    

    render() {
        return (
            <div>
                <div>
                    {/* <TodoIcon value="📚"></TodoIcon>
                    <span onClick={this.handleIcon} className="icon-wrapper" role="img" aria-label="emoji" value="dd">dd</span> */}
                    <button className = "icon-wrapper" onClick = {this.handleIcon} value="📚">📚</button>
                    <button className = "icon-wrapper" onClick = {this.handleIcon} value="✏️">️️✏️</button>
                    <button className = "icon-wrapper" onClick = {this.handleIcon} value="⏰">⏰</button>
                    <button className = "icon-wrapper" onClick = {this.handleIcon} value="💑">💑</button>
                    <button className = "icon-wrapper" onClick = {this.handleIcon} value="🦁">🦁</button>
                    <button className = "icon-wrapper" onClick = {this.handleIcon} value="🍒">🍒</button>
                    {/* <TodoIcon onClick = {this.handleIcon} value="💑"></TodoIcon>
                    <TodoIcon onClick = {this.handleIcon} value="🦁"></TodoIcon>
                    <TodoIcon onClick = {this.handleIcon} value="🍒"></TodoIcon> */}
                </div>
                <form onSubmit = {this.handleSubmit} 
                className="form-input-wrapper">
                    <input
                    onChange = {this.handleChange}
                    className="input-icon"
                    name="icon"
                    value={this.state.icon}
                    readOnly />
                    <input 
                    type="text"
                    className="input-todo"
                    name="todo"
                    onChange = {this.handleChange}
                    value = {this.state.todo}
                    placeholder = "Add new todo..."
                     />
                    <button className="add" 
                    type = "submit">+</button>
                </form>
            </div>
        )
    }
}
