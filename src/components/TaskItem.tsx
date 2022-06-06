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
        className={ completed ? styles.buttonChecked :  styles.buttonUnChecked} 
        onClick={() => onCheck(id)} 
        title="Marcar tarefa como concluída"
      >
        <CheckCircle 
          size={24} 
          weight={completed ? 'fill' : 'regular'} 
        />
      </button>
        <p>{title}</p>
      </div>

      <button onClick={() => onRemove(id)} title="Excluir tarefa">
        <Trash size={24}/>
      </button>
    </div>
  )
}