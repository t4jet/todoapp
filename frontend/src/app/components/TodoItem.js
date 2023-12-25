import style from '../styles/todoItem.module.scss'
import { MdDelete, MdEdit } from 'react-icons/md';

export default function TodoItem({ todo }) {
  return (
    <div className={style.item}>
      <div className={style.todoDetails}>
        <div className={style.texts}>
          <p>{todo}</p>
        </div>
      </div>
      <div className={style.todoActions}>
        <div className={style.icon}>
          <MdDelete />
        </div>
        <div className={style.icon}>
          <MdEdit />
        </div>
      </div>
    </div>
  )
}
