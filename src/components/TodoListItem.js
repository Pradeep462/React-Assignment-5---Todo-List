import React from 'react';

const TodoListItem = (props) => {
    const deleteTodo = () => {
        props.deleteTodo(props.todo.id);
    }
    return (
        <li>
            {props.todo.value} (<a href="#">Edit</a> | <a href="#" onClick={deleteTodo}>Delete</a>)
        </li>
    );
};

export default TodoListItem;