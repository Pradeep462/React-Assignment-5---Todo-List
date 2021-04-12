import React from 'react';

const TodoAdd = (props) => {
    let TodoValue = "";
    const submitTodo = () => {
           props.addTodo(TodoValue);
    }
    const updateTodoValue = e => {
        TodoValue = e.target.value;
       
    }

  
    return (
        <div>
            
            <textarea id="task" onChange={updateTodoValue}> </textarea>
            <br/>
            <button onClick={submitTodo}>Add New</button>
        </div>
    );
};

export default TodoAdd;