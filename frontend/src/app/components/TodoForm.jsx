'use client'
import { useState } from 'react';
import style from '../styles/app.module.scss';
import Button from './Button';

export default function TodoForm() {
  const [taskName, setTaskName] = useState('')

  const onChangeHandler = (e) => {
    setTaskName(e.target.value)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const data = {
        name: taskName
      }
      await fetch(`http://localhost:8080/api/tasks`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className={style.appHeader} action='/api/form' method='POST'>
      <input value={taskName} className={style.emptyText} onChange={onChangeHandler} type='text' name="name" placeholder='タスクを入力' />
      <Button variant="primary" type='submit'>
        追加
      </Button>
    </form>
    
  );
}
