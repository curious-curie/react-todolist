import React from 'react'



import './TodoTemplate.css'

const TodoTemplate = ({form, children}) => {

    return( 
        <div className="todo-template">
        <div className = "title">Curie's Todo List</div>
        <section className="form-wrapper">
            { form }

        </section>
        <section className="list-wrapper">
            {children}
        </section>
        </div>  
    );
};

export default TodoTemplate;