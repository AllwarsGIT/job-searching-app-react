import styles from './ShowJobsButton.module.css';
import { Link } from 'react-router-dom';

function ShowJobsButton(){
  return (
    <div className={styles.showJobsButtonContainer}>
        <Link to="/jobs" className={styles.showJobsButton}>Show All Jobs</Link>

    </div>
  );
}

export default ShowJobsButton;