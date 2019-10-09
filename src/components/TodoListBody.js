import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoListBody extends Component {

    static defaultProps = {
        todos: []
    }
    render() {
        const { todos, onRemove, onUpdate } = this.props;
        
        const list = todos.map(
            ({id, icon, todo}) => (
                <TodoItem
                    id={id}
                    icon={icon}
                    todo={todo}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    key={id}
                    />
            )
        )
        return (
            <div>
                {list}
            </div>
        )
    }
}
