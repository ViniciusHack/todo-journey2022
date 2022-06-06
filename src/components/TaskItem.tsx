import { Check, Trash } from 'phosphor-react';
import styles from './TaskItem.module.css';

export function TaskItem() {
  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.taskInfo}>
        <Check />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      </div>

      <Trash />
    </div>
  )
}