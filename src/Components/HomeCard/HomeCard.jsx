
import SimpleButton from '../SimpleButton/SimpleButton.jsx';
import styles from './HomeCard.module.css';
import { Link } from 'react-router-dom';

function HomeCard({ title, description, buttonText, linkClassName, className, to }) {
  return (
    <div className={`${styles.homeCard} ${className}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={to} className={linkClassName}>{buttonText}</Link>
    </div>
  );
}

export default HomeCard;
