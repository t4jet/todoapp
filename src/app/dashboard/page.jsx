'use client'
import { useEffect, useState } from "react";
import style from '../styles/app.module.scss'
import TodoItem from "../components/TodoItem";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/dashboard`, {
          method: "GET",
        });
        const responseJSON = await response.json();
        const fetchedTasks = responseJSON.data;
        setTasks(fetchedTasks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.content__wrapper}>
      <ul>
        {tasks.length && (
          tasks.map((task) => (
            // <li key={task.id}>{task.name}</li>
            <TodoItem key={task.id} todo={task.name} />
          ))
        )}
      </ul>
    </div>
  );
}
