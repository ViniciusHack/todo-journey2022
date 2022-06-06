import { CheckCircle, Trash } from 'phosphor-react';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  title: string;
  id: string;
  onRemove: (id: string) => void;
  completed: boolean;
  onCheck: (id: string) => void;
}

export function TaskItem({ title, onRemove, id, completed, onCheck }: TaskItemProps) {
  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.taskInfo}>
      <button 
      className={ completed ? styles.checked + styles.checkButton : styles.checkButton} 
      onClick={() => onCheck(id)} 
      title="Marcar tarefa como concluída"
      >
        <CheckCircle weight={completed ? 'fill' : 'regular'} />
      </button>
        <p>{title}</p>
      </div>

      <button onClick={() => onRemove(id)} title="Excluir tarefa">
        <Trash  />
      </button>
    </div>
  )
}