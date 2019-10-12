import React from 'react'
// import TodoIcon from './TodoIcon'
import './TodoForm.css'

const TodoForm = ({icon, todo, onChangeIcon, onClickIcon, onChange, onCreate, onKeyPress}) => {
    return(
        <div>     
            <div>
                        {/* <TodoIcon value="📚"></TodoIcon>
                        <span onClick={this.handleIcon} className="icon-wrapper-white" role="img" aria-label="emoji" value="dd">dd</span> */}
                       
                        <button className = "icon-wrapper-white" onClick = {onClickIcon} value="📚">📚</button>
                        <button className = "icon-wrapper-white" onClick = {onClickIcon} value="✏️">️ ️✏️</button>
                        <button className = "icon-wrapper-white" onClick = {onClickIcon} value="⏰">⏰</button>
                        <button className = "icon-wrapper-white" onClick = {onClickIcon} value="💑">💑</button>
                        <button className = "icon-wrapper-white" onClick = {onClickIcon} value="🦁">🦁</button>
                        <button className = "icon-wrapper-white" onClick = {onClickIcon} value="🍒">🍒</button>
                        {/* <TodoIcon onClick = {this.handleIcon} value="💑"></TodoIcon>
                        <TodoIcon onClick = {this.handleIcon} value="🦁"></TodoIcon>
                        <TodoIcon onClick = {this.handleIcon} value="🍒"></TodoIcon> */}
                    </div>
                    <form autocomplete = "off" onSubmit = {onCreate} 
                    className="form-input-wrapper">
                        <input
                        onChange = {onChangeIcon}
                        className="input-icon"
                        name="icon"
                        value={icon}
                        readOnly />
                        <input 
                        type="text"
                        className="input-todo"
                        value={todo}
                        name="todo"
                        onChange = {onChange}
                           
                        placeholder = "Add new todo..."
                         />
                        <button className="add" 
                        type = "submit">+</button>
                    </form>
                </div>
    )
}

export default TodoForm;

// export default class TodoForm extends Component {

//     state = {
//         icon: '',
//         todo: '',
//     }




//     render() {
//         return (
//             <div>
//                 <div>
//                     {/* <TodoIcon value="📚"></TodoIcon>
//                     <span onClick={this.handleIcon} className="icon-wrapper-white" role="img" aria-label="emoji" value="dd">dd</span> */}
//                     <button className = "icon-wrapper-white" onClick = {this.handleIcon} value="📚">📚</button>
//                     <button className = "icon-wrapper-white" onClick = {this.handleIcon} value="✏️">️️✏️</button>
//                     <button className = "icon-wrapper-white" onClick = {this.handleIcon} value="⏰">⏰</button>
//                     <button className = "icon-wrapper-white" onClick = {this.handleIcon} value="💑">💑</button>
//                     <button className = "icon-wrapper-white" onClick = {this.handleIcon} value="🦁">🦁</button>
//                     <button className = "icon-wrapper-white" onClick = {this.handleIcon} value="🍒">🍒</button>
//                     {/* <TodoIcon onClick = {this.handleIcon} value="💑"></TodoIcon>
//                     <TodoIcon onClick = {this.handleIcon} value="🦁"></TodoIcon>
//                     <TodoIcon onClick = {this.handleIcon} value="🍒"></TodoIcon> */}
//                 </div>
//                 <form onSubmit = {this.handleCreate} 
//                 className="form-input-wrapper">
//                     <input
//                     onChange = {this.handleChange}
//                     className="input-icon"
//                     name="icon"
//                     value={this.props.icon}
//                     readOnly />
//                     <input 
//                     type="text"
//                     className="input-todo"
//                     name="todo"
//                     onChange = {this.handleChange}
                   
//                     placeholder = "Add new todo..."
//                      />
//                     <button className="add" 
//                     type = "submit">+</button>
//                 </form>
//             </div>
//         )
//     }
// }
