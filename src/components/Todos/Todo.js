import styles from './Todo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faThumbtackSlash, faTrashCan as trashSolid, faSquareMinus as crossSolid, faSquareCheck as checkSolid } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan as trashRegular, faSquareCheck as checkRegular, faSquareMinus as crossRegular } from '@fortawesome/free-regular-svg-icons';
import IconButton from "../UI/IconButton";
const Todo = (props) => {
    return (
        <div className={props.todo.status ? styles.todo : `${styles.todo} ${styles.done}`}>
            <div className={styles.mainBody}>
                {
                    props.todo.status ?
                        <FontAwesomeIcon icon={faThumbtack} className={styles.icon} /> :
                        <FontAwesomeIcon icon={faThumbtackSlash} className={styles.iconDone} />
                }
                {props.todo.text}
            </div>
            <div className={styles.buttons}>
                <IconButton
                    iconRegular={trashRegular}
                    iconSolid={trashSolid}
                    styleRegular={'trashRegular'}
                    styleSolid={'trashSolid'}
                    functionTodo={props.deleteTodo}
                    todo={props.todo}
                />
                {
                    props.todo.status ?
                        <div className={styles.buttons}>
                            <IconButton
                                iconRegular={checkRegular}
                                iconSolid={checkSolid}
                                styleRegular={'checkRegular'}
                                styleSolid={'checkSolid'}
                                functionTodo={props.checkTodo}
                                todo={props.todo}
                            />
                        </div>:
                            <div className={styles.buttons}>
                                <IconButton
                                    iconRegular={crossRegular}
                                    iconSolid={crossSolid}
                                    styleRegular={'crossRegular'}
                                    styleSolid={'crossSolid'}
                                    functionTodo={props.checkTodo}
                                    todo={props.todo}
                                />
                        </div>
                }
            </div>
        </div>
    );
};

export default Todo;