import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../TodoCreateButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'
import { TodoContext } from '../TodoContext';
import {CalendarWidget} from '../Calendar/index'
import {ClockWidget} from '../Clock/index'
import React from 'react';


function AppUi() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

        return (
            <>
                <header>
                </header>

                <main>
                    <div className='new-todo'>

                        <CreateTodoButton
                            setOpenModal={setOpenModal}
                        />
                        {openModal && (
                            <Modal>
                                <TodoForm/>
                            </Modal>
                        )}

                    </div>
                    
                    <div className='todos'>
                        <TodoCounter/>
                        <TodoSearch/>

                        <TodoList>
                            {loading &&
                                <>
                                <TodosLoading/>
                                <TodosLoading/>
                                <TodosLoading/>
                                <TodosLoading/>
                                </>
                            }
                            {error && <TodosError/>}
                            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
                        
                            {searchedTodos.map(todo => (
                                <TodoItem 
                                key={todo.text} 
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                                />
                            ))}
                    </TodoList>

                    </div>
                    <div className='widgets'>
                        {/* <CalendarWidget />
                        <ClockWidget /> */}
                    </div>
                </main>
            </>
        );
    }

export {AppUi};