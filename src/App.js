import React, {Component} from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoForm from './components/TodoForm';
import TodoListBody from './components/TodoListBody';

export default class App extends Component {

  id = 2
  state = {
    icon: '',
    todo: '',

    todos: [
      { id: 0, icon: '🍒', todo: '무릎담요 사기'},
      { id: 1, icon: '✏️', todo: '컴구 ppt 프린트하기'},
    ]
  }
  
  handleChange = (e) => {
    this.setState({
      todo : e.target.value,
    });
    console.log(this.state)
  }

  handleClickIcon = (e) => {
    this.setState({
      icon: e.target.value,
    })
    console.log(this.state)
  }

  handleCreate = (e) => {
    const { icon, todo, todos } = this.state;
    e.preventDefault();
    this.setState({
      icon: '',
      todo: '',
      todos: todos.concat({
        id: this.id++,
        icon: icon,
        todo: todo
      })

    })
  }


  handleKeypress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  render(){
    const { icon, todo, todos } = this.state;
    const {
      handleChange, handleCreate, handleKeyPress, handleClickIcon} = this; //이것도 바인딩??
    
    
    return (
    
    <TodoTemplate form = {(
      <TodoForm
        icon = {icon}
        todo = {todo}
        onKeyPress = {handleKeyPress}
        onChange = {handleChange}
        onCreate = {handleCreate}
        onClickIcon = {handleClickIcon}
    />)}>

      <TodoListBody todos = {todos}/>
    </TodoTemplate>

  );
}

}


