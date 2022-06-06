import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './NewTask.module.css';


export function NewTask() {
  const [newTaskName, setNewTaskName] = useState('');

  const handleNewTaskName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  }

  const handleSubmitNewTask = (e: FormEvent) => {
    e.preventDefault();
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
        <PlusCircle size={16} />
      </button>
    </form>
  )
}