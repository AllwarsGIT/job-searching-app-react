import JobCard from '../JobCard/JobCard';
import jobList from '../../jobs.json';
import styles from './JobCardList.module.css';

function JobCardList({numCardsToShow}) {
  
    var cardList = jobList.slice(0, numCardsToShow).map((job) => 
    <JobCard 
        key={job.id} 
        {...job}
         />);

    return (
        <div className={styles.container}>
            <h1 className={styles.jobCardTitle}>Job Listings</h1>
                <div className={styles.jobCardContainer}>
                    {cardList}
            </div>

        </div>
        
    );
}

export default JobCardList;


