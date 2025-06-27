import styles from './HomeCard.module.css';
import { Link } from 'react-router-dom';

type HomeCardProps = {
  title: string;
  description: string;
  buttonText: string;
  linkClassName?: string;
  className?: string;
  to: string;
}

function HomeCard({ title, description, buttonText, linkClassName, className, to }: HomeCardProps) {
  return (
    <div className={`${styles.homeCard} ${className}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={to} className={linkClassName}>{buttonText}</Link>
    </div>
  );
}

export default HomeCard;
