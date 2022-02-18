import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';
import {
    getTodos,
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos } from './selectors';

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
                    <NewTodoForm />
                    <h3>Incomplete:</h3>
                    {incompleteTodos.map(todo => 
                        <TodoListItem
                            todo={todo}
                            onRemovePressed={onRemovePressed}
                            onCompletedPressed={onCompletedPressed} />)}
                    <h3>Completed:</h3>
                    {completedTodos.map(todo => 
                        <TodoListItem
                            todo={todo}
                            onRemovePressed={onRemovePressed}
                            onCompletedPressed={onCompletedPressed} />)}
                    
        </div>
    );

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);