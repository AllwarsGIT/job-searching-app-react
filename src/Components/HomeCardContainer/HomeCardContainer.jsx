import HomeCard from '../HomeCard/HomeCard.jsx';
import styles from './HomeCardContainer.module.css';

function HomeCardContainer() {
  return (
      <div className={styles.homeCardsContainer}>
        <HomeCard 
            title="For Developers"
            description="Find the best job opportunities that match your skills and interests."
            buttonText="Explore Jobs"
            className={styles.homeCardDeveloper}
            linkClassName={`${styles.buttonHomeCard} ${styles.buttonDeveloper}`}
            to="/jobs"
        />
        <HomeCard 
            title="For Employers"
            description="Post your job openings and find the right candidates for your team."
            buttonText="Post a Job"
            className={styles.homeCardEmployer}
            linkClassName={`${styles.buttonHomeCard} ${styles.buttonEmployer}`}
            to="/jobs/add"
        />
      </div>
  );
}

export default HomeCardContainer;