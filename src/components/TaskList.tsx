
import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <section className={styles.taskListContainer}>
      <header>
        <h3>Tarefas criadas <span>5</span></h3>
        <h3>Concluídas <span>2 de 5</span></h3>
      </header>
    </section>
  )
}