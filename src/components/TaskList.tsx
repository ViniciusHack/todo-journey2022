
import { Task } from '../App';
import { TaskItem } from './TaskItem';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {

  return (
    <section className={styles.taskListContainer}>
      <header>
        <h3>Tarefas criadas <span>5</span></h3>
        <h3>Concluídas <span>2 de 5</span></h3>
      </header>

      <section className={styles.taskItemGroup}>
        {tasks.map(task => (
          <TaskItem key={task.id}/>
        ))}
        <TaskItem />
        <TaskItem />
      </section>
    </section>
  )
}