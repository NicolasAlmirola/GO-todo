import React from "react";
import {useLocalStorage} from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider({children}) {

    //Estado inicial de los todo's
const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
} = useLocalStorage('TODOS_V1', []);
const [searchValue, setSearchValue] = React.useState('');
const [openModal, setOpenModal] = React.useState(false);

//filtro para saber cuantos todo's estan completados
const completedTodos = todos.filter(todo => !!todo.completed).length;
const totalTodos = todos.length;

  //filtro para el buscador de todo's
const searchedTodos = todos.filter (
    (todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
    } 
);

//Agregar TODO
const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
        text: text,
        completed: false,
    });
    saveTodos(newTodos);
};


  //Completar los Todo's
const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
};

  //Eliminar los todo's
const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
};

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}



export {TodoContext, TodoProvider};