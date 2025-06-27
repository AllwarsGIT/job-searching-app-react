import styles from "./JobCard.module.css";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import useReadMore from "../../Hooks/useReadMore";

type JobCardProps = {
  title?: string;
  type?: string;
  description?: string;
  location?: string;
  salary?: string;
  // company?: {
  //   name: string;
  //   description: string;
  //   contactEmail: string;
  //   contactPhone: string;
  // };
};


const JobCard = ({
  title = "Job position",
  type = "Type of job",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  location = "Location",
  salary = "Yearly salary",
  // company = {
  //   name: "Company Name",
  //   description: "Company description",
  //   contactEmail: "Contact email",
  //   contactPhone: "Contact phone",
  }: JobCardProps
) => {
  const {displayText, isExpanded, toggleReadMore}= useReadMore(description);
  
  return (
    <div className={styles.jobCard}>
      <p className={styles.jobType}>{type}</p>
      <h2 className={styles.jobTitle}>{title}</h2>
      <p className={styles.jobDescription}>{displayText}</p>
      <button className={styles.readMoreButton} onClick={toggleReadMore}>{isExpanded ? "Read Less" : "Read More"}</button>
      <p className={styles.jobSalary}> {salary}/Year</p>
      <p className={styles.jobLocation}> {location}</p>
      <Link to="/" className={styles.applyButton}>Apply now</Link> 
    </div>
  );
}

export default JobCard;