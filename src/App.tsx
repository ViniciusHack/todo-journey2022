import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import EmptyImg from './assets/empty-img.svg';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import './global.css';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTask] = useState<Task[]>([]);

  const addNewTask = useCallback((title: string) => {
    const newTask = {
      id: uuidv4(),
      title,
      completed: false,
    }

    setTask([...tasks, newTask])
  }, [tasks])

  const removeTask = useCallback((id: string) => {
    setTask(tasks.filter(task => task.id !== id));
  }, [tasks])

  const checkTask = useCallback((id: string) => {
    setTask(
      tasks.map(task => {
        if(task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    )
  }, [tasks])

  return (
    <>
    <Header />
    <main className={styles.container}>
      <NewTask onAdd={addNewTask}/>
      
      {tasks.length !== 0 
      ?
        <TaskList 
          tasks={tasks}
          onRemove={removeTask}
          onCheck={checkTask}
        /> 
      :
        <section className={styles.emptyState}>
          <img src={EmptyImg} alt="Prancheta"/>
          <p>Você ainda não tem tarefas cadastradas
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </section>
      }
    </main>
    </>
  )
};
