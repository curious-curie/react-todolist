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
      { id: 0, icon: '🍒', todo: '무릎담요 사기', checked: false},
      { id: 1, icon: '✏️', todo: '컴구 ppt 프린트하기', checked: false},
    ]
  }
  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo=> todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];


    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    
    const checkedItem = nextTodos[index];

    nextTodos.splice(index, 1)
    if(selected.checked){ nextTodos.unshift(checkedItem); }
    else nextTodos.push(checkedItem)


    this.setState({
      todos: nextTodos
    })

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
    const newElement = {
      id: this.id++,
        icon: icon,
        todo: todo,
        checked: false,
    }
    this.setState({
      icon: '',
      todo: '',
      todos: [newElement].concat(todos),

    })
  }


  handleKeypress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    if(this.state !== nextState){ return true; }
    return this.props !== nextProps;
}

  render(){
    const { icon, todo, todos } = this.state;
    const {
      handleChange, handleCreate, handleKeyPress, handleClickIcon, handleToggle} = this; //이것도 바인딩??
    
    
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

      <TodoListBody todos = {todos} onToggle = {handleToggle}/>
    </TodoTemplate>

  );
}

}


