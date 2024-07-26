import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoForm.module.css';
import {useState} from "react";
const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('');

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        addTodo({
            id: uuidv4(),
            text: text,
            status: true
        });
        setText('');
    }

    return (
        <form className={styles.form} onSubmit={onSubmitHandler} >
            <input
                type="text"
                placeholder="Enter a new task"
                value={text}
                className={styles.input}
                onChange={(e)=>setText(e.target.value)}
            />
            <button className={styles.button}><FontAwesomeIcon icon={faPen} /></button>
        </form>
    );
};

export default TodoForm;