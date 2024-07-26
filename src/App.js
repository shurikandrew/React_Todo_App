import styles from './App.module.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { useState } from "react";
import ButtonsPanel from "./components/UI/ButtonsPanel";

function App() {
    const [todoList, setTodoList] = useState([]);

    const addTodoHandler = (element) => {
        setTodoList([...todoList, element]);
    };

    const deleteTodoHandler = (id) => {
        setTodoList(todoList.filter((todo) => todo.id!==id));
    };

    const checkTodoHandler = (id) => {
        let element = todoList.find((todo)=> todo.id === id);
        element.status = !element.status;
        setTodoList([...todoList]);
    };

    const countDoneTodos = () => {
        return todoList.filter((todo)=>todo.status === false).length;
    };

    const deleteAllTodosHandler = () => {
        setTodoList([]);
    };

    const deleteDoneTodosHandler = () => {
        setTodoList(todoList.filter((todo) => todo.status));
    };

    const doneTodosCount = countDoneTodos();

    return (
    <div className={styles.App}>
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodoHandler}/>
        <ButtonsPanel deleteAllTodos={deleteAllTodosHandler} deleteDoneTodos={deleteDoneTodosHandler}/>
        <TodoList todoList={todoList} deleteTodo={deleteTodoHandler} checkTodo={checkTodoHandler}/>
        {doneTodosCount > 0 ? <h2>You have completed {doneTodosCount} tasks!</h2> : <></>}
    </div>
    );
}

export default App;