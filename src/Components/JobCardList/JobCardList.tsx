import JobCard from '../JobCard/JobCard';
import { Job } from '../../Types/jobs';
import jobList from '../../jobs.json';
import styles from './JobCardList.module.css';

type JobCardListProps = {
    numCardsToShow: number;
}

function JobCardList({numCardsToShow}: JobCardListProps) {
  
    var cardList = jobList.slice(0, numCardsToShow).map((job: Job) => 
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


