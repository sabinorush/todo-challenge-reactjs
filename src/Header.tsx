import styles from './Header.module.css'; 

import todoLogo from '../src/assets/todoLogo.svg';

export function Header() {
  return(
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo" />
    </header>
  )
}