import styles from './ButtonsPanel.module.css';
import Button from "./Button";
import {faTrashCan, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ButtonsPanel = ({deleteAllTodos, deleteDoneTodos}) => {
    return (
        <div className={styles.panel}>
            <Button onClick={deleteDoneTodos}><FontAwesomeIcon icon={faTrashCan}/></Button>
            <Button onClick={deleteAllTodos}><FontAwesomeIcon icon={faRetweet} rotation={90}/></Button>
        </div>
    );
};

export default ButtonsPanel;