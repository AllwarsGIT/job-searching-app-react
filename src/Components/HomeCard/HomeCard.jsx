
import SimpleButton from '../SimpleButton/SimpleButton.jsx';
import styles from './HomeCard.module.css';

function HomeCard({ title, description, buttonText, buttonClassName, className }) {
  return (
    <div className={`${styles.homeCard} ${className}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <SimpleButton className={buttonClassName}>{buttonText}</SimpleButton>
    </div>
  );
}

export default HomeCard;
