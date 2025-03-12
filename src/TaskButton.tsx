import styles from './TaskButton.module.css';

import { PlusCircle } from '@phosphor-icons/react';


export function TaskButton() {
  return (
      <>
        <button
         type="submit"
          className={styles.taskButton}
          >
            Criar
            <PlusCircle size={16} weight="bold" />
        </button>
      </>
  )
}