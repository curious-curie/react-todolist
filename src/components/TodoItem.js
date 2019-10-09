import React, { Component } from 'react'
import TodoIcon from './TodoIcon'
import './TodoItem.css'

export default class TodoItem extends Component {




    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){ return true; }
        return this.props !== nextProps;
    }
    render() {

        const { icon, todo, onRemove } = this.props;
      
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
