import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)

    return (
        <div className='text'>
            <div>
                <h1>Your tasks</h1>
                <h4>Completed {completedTodos} de {totalTodos}</h4>
            </div>
        </div>
    );
}

export { TodoCounter };