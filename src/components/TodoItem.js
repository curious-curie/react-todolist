import React, { Component } from 'react'
import TodoIcon from './TodoIcon'
import './TodoItem.css'

export default class TodoItem extends Component {



    render() {

        const { id, icon, todo, checked, onRemove, onToggle } = this.props;
      
        return (
            <div>
                <div className = {`todo-item ${checked && 'checked'}`} >
                    <TodoIcon value={icon}></TodoIcon>
                    <span className ={`todo-item ${checked && 'todo-checked'}`}>{todo}</span>
                    <div className="checkbox" onClick={() => onToggle(id)}> ⃞ </div>
                    <div>
                        { checked && (<div className = "check">✓</div>)}
                    </div>
                </div>
                
            </div>
        )
    }
}
