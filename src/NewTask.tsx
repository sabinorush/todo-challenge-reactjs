import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <>
      <input
        className={styles.newTask}
        placeholder="Adicione uma nova tarefa" />
    </>
  )
}