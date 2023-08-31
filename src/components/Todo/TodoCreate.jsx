import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

import TodoForm from './TodoForm';

import styles from './TodoCreate.module.scss';

function TodoCreate() {
   
  //const[state,useState] = useState(true)

  const[isOpenForm,setIsOpenForm] = useState(false)
  //console.log(isOpenForm);


  let active = true;

  const handleClick = function (event) {

    //console.log('clicked');
    setIsOpenForm(!isOpenForm);
    // console.log('clicked', event);
    // active = !active;
    // console.log('clicked', active);
  };


  return (
    <>
     {isOpenForm ? (
      <TodoForm  textSubmit='Add Task'/> 
     ) : (
        <div className={styles.todo__create} onClick={handleClick}>
       <div className={styles.todo__create__button}>
         <HiPlus />
       </div>
      <h3 className={styles.todo__create__text}>Add Task</h3>
     </div>
    )}
    </>
  );
}

export default TodoCreate;
