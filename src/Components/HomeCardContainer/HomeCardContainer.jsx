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
            buttonClassName={`${styles.buttonHomeCard} ${styles.buttonDeveloper}`}
        />
        <HomeCard 
            title="For Employers"
            description="Post your job openings and find the right candidates for your team."
            buttonText="Post a Job"
            className={styles.homeCardEmployer}
            buttonClassName={`${styles.buttonHomeCard} ${styles.buttonEmployer}`}
        />
      </div>
  );
}

export default HomeCardContainer;