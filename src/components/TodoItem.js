import React, { Component } from 'react'
import TodoIcon from './TodoIcon'
import './TodoItem.css'

export default class TodoItem extends Component {

    state = {
        editing: false,
        icon: '',
        todo: '',
    }


    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){ return true; }
        return this.props.info !== nextProps.info;
    }
    render() {

        const { icon, todo } = this.props.info;
      
        return (
            <div>
                <div className = "todo-item">
                    <TodoIcon value={icon}></TodoIcon>
                    <span className = "todo">{todo}</span>
                    <span className="checkbox"> ⃞ </span>
                </div>
                
            </div>
        )
    }
}
