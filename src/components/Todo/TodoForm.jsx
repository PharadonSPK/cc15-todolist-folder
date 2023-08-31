import {useState} from 'react';
import {Button} from '../Common/Button/Button';
import styles from './TodoForm.module.scss';

function TodoForm(props) {
  const [isError, setIsError] = useState(true);
  return (
    <form className={styles.todo__form__container}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        <p className={styles.todo__error}>Title is required</p>
        <div className={styles.todo__form__buttons}>
          <Button text='Cancle' active={false}/>
          <Button text={props.textSubmit} active={true} />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
