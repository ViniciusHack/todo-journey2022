import { ChangeEvent, FormEvent, useState } from 'react';
import plusSrc from '../assets/plus.svg';
import styles from './NewTask.module.css';

interface NewTaskProps {
  onAdd: (title: string) => void;
}

export function NewTask({ onAdd }: NewTaskProps) {
  const [newTaskName, setNewTaskName] = useState('');

  const handleNewTaskName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  }

  const handleSubmitNewTask = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newTaskName);

    setNewTaskName('');
  }

  return (
    <form onSubmit={handleSubmitNewTask} className={styles.newTaskContainer}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        value={newTaskName}
        onChange={handleNewTaskName}
      />
      <button type="submit">
        Criar
        <img src={plusSrc} />
      </button>
    </form>
  )
}