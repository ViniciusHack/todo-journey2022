
import { Task } from '../App';
import { TaskItem } from './TaskItem';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onRemove: (id: string) => void;
  onCheck: (id: string) => void;
}

export function TaskList({ tasks, onRemove, onCheck }: TaskListProps) {

  return (
    <section className={styles.taskListContainer}>
      <header>
        <h3>Tarefas criadas 
          <span>{tasks.length}</span>
        </h3>
        <h3>Concluídas 
          <span>{tasks.filter(task => task.completed).length} {tasks.length !== 0 && `de ${tasks.length}`}</span>
        </h3>
      </header>

      <section className={styles.taskItemGroup}>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            onRemove={onRemove} 
            {...task}
            onCheck={onCheck}
          />
        ))}
      </section>
    </section>
  )
}