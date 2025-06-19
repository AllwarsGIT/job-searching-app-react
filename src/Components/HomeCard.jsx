
import SimpleButton from './SimpleButton';

function HomeCard({ title, description, buttonText, buttonClassName, className }) {
  return (
    <div className={`home-card ${className}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <SimpleButton className={buttonClassName}>{buttonText}</SimpleButton>
    </div>
  );
}

export default HomeCard;
