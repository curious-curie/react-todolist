import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoListBody extends Component {

    static defaultProps = {
        data: []
    }
    render() {
        const { data, onRemove, onUpdate } = this.props;
        
        const list = data.map(
            info => (<TodoItem onRemove = {onRemove} onUpdate = {onUpdate}
                info = {info} key = {info.id }/>)
        )
        return (
            <div>
                {list}
            </div>
        )
    }
}
