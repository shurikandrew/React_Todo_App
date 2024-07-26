import styles from './Button.module.css';

const Button = (props) => {
    return (
        <div className={styles.button} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default Button;