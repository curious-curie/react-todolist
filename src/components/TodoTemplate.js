import React, { Component } from 'react'
import TodoListBody from './TodoListBody'
import TodoForm from './TodoForm'
import './TodoTemplate.css'

export default class TodoTemplate extends Component {
    render() {
        return (
            <div className="todo-template">
                <div className = "title">Curie's Todo List</div>
                <section className="form-wrapper">
                    <TodoForm/>

                </section>
                <section className="list-wrapper">
                    <TodoListBody/>
                </section>
            </div>
        )
    }
}
