import { ReactComponent as Check } from '../assets/check.svg';
import { ReactComponent as Trash } from '../assets/trash.svg';
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
        {completed ?
        <Check />
        :
        <div className={styles.circleContainer}><div className={styles.circle} /></div>
        }
      </button>
        <p className={completed ? styles.taskCompleted : ''}>{title}</p>
      </div>

      <button onClick={() => onRemove(id)} title="Excluir tarefa">
        <Trash />
      </button>
    </div>
  )
}