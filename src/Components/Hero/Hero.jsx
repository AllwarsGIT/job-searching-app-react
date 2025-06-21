import SimpleButton from '../SimpleButton/SimpleButton';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>Welcome to Our Website</h1>
        <p>This website has been done from scratch using react.</p>
      <div className={styles.buttonContainer}>
        <SimpleButton className= {`${styles.heroButton}`}>Get Started</SimpleButton>
        
        
      </div>
    </div>
  );
}

export default Hero;