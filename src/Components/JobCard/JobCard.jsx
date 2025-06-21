import styles from "./JobCard.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import SimpleButton from "../SimpleButton/SimpleButton.jsx";

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
  },
) => {
  
  return (
    <div className={styles.jobCard}>
      <p className={styles.jobType}><MdOutlineAccessTime /> {type}</p>
      <h2 className={styles.jobTitle}>{title}</h2>
      <p className={styles.jobDescription}>{description}</p>
      <p className={styles.jobSalary}><FaMoneyBill /> {salary}/Year</p>
      <p className={styles.jobLocation}><FaLocationDot /> {location}</p>
      <SimpleButton className={styles.applyButton}>Apply now</SimpleButton> 
    </div>
  );
}

export default JobCard;