import React from "react";
import { TodoContext } from "../TodoContext"
import './TodoForm.css'

function TodoForm() {
    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }



    return (
        <form onSubmit={onSubmit}>
            <label>Creador de TODO'S</label>
            <textarea
                placeholder="Escribe tu nueva tarea"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                className="TodoForm-button"
                onClick={onCancel}>
                    Cancelar
                </button>
                <button 
                    type="Submit"
                className="TodoForm-button">
                    Agregar
                </button>
            </div>
        </form>
    )
}

export {TodoForm};