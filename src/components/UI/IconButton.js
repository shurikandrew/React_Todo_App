import styles from './IconButton.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconButton = ({iconRegular, iconSolid, styleRegular, styleSolid, functionTodo, todo}) => {
    return (
        <div className={styles.wrapper}>
            <FontAwesomeIcon icon={iconRegular} className={styles[styleRegular]}/>
            <FontAwesomeIcon icon={iconSolid} onClick={()=>functionTodo(todo.id)} className={styles[styleSolid]}/>
        </div>
    );
};

export default IconButton;