import Todo from "./Todo";
import styles from './TodoList.module.css';
const TodoList = ({todoList, deleteTodo, checkTodo}) => {
    return (
        <div className={styles.todoList}>
            {
                todoList.length ?
                    todoList.map(
                        (todo)=>{
                            return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} checkTodo={checkTodo}/>;
                        }
                    ) :
                    <h2>There no tasks to do</h2>
            }
        </div>
    );
};

export default TodoList;