import './global.css';
import { Header } from './Header';
import { NewTask } from './NewTask';

import styles from './App.module.css';
import { TaskButton } from './TaskButton';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <NewTask />
        </div>
        <div>
          <TaskButton />
        </div>
      </div>
    </div>
  )
}

export default App
