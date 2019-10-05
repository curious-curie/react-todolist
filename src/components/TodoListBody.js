import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoListBody extends Component {
    render() {
        return (
            <div>
                <TodoItem icon="🍒" todo="todo item 1"></TodoItem>
                <TodoItem icon="💑" todo="todo item 2"></TodoItem>
                <TodoItem icon="✏️" todo="todo item 3"></TodoItem>
            </div>
        )
    }
}
