import { useCallback, useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import './global.css';

export interface Task {
  id: number;
  title: string;
  checked: boolean;
}

export function App() {
  const [tasks, setTask] = useState<Task[]>([]);

  const addNewTask = useCallback((title: string) => {
    const newTask = {
      id: Date.now(),
      title,
      checked: false,
    }

    setTask([...tasks, newTask])
  }, tasks)

  return (
    <>
    <Header />
    <main className={styles.container}>
      <NewTask onAdd={addNewTask}/>
      <TaskList tasks={tasks}/>
    </main>
    </>
  )
};
