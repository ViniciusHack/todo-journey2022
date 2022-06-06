import { Check, Trash } from 'phosphor-react';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  title: string;
}

export function TaskItem({ title }: TaskItemProps) {
  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.taskInfo}>
        <Check />
        <p>{title}</p>
      </div>

      <Trash />
    </div>
  )
}