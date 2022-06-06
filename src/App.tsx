import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import './global.css';

export function App() {

  return (
    <>
    <Header />
    <main className={styles.container}>
      <NewTask />
      <TaskList />
    </main>
    </>
  )
};
