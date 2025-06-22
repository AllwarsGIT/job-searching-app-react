import styles from './ShowJobsButton.module.css';
import SimpleButton from '../SimpleButton/SimpleButton.jsx';

function ShowJobsButton(){
  return (
    <div className={styles.showJobsButtonContainer}>
        <SimpleButton className={styles.showJobsButton}>Show All Jobs</SimpleButton>

    </div>
  );
}

export default ShowJobsButton;