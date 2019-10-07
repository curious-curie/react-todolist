import React, { Component } from 'react'
import TodoListBody from './TodoListBody'
import TodoForm from './TodoForm'
import './TodoTemplate.css'

export default class TodoTemplate extends Component {

    id = 0;
    state = {
        information: [],
    }


    handleCreate = (data) => {
        const {information} = this.state;
    
        this.setState({
          information: information.concat({
            ...data,
            id: this.id ++
          })
         

        });
        

        // this.state.information.push(data) 하면 안됨!!!
        // 내부 배열이나 객체를 바꿀 땐 기존 것을 수정하지 않고 새로운 걸 만들어야함 
      }

    render() {
        return (
            <div className="todo-template">
                <div className = "title">Curie's Todo List</div>
                <section className="form-wrapper">
                    <TodoForm onCreate = {this.handleCreate} />

                </section>
                <section className="list-wrapper">
                    <TodoListBody data = {this.state.information} />
                </section>
            </div>
        )
    }
}
