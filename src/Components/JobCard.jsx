
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
    <div className="job-card">
      <p className="job-type">{type}</p>
      <h2>{title}</h2>
      <p className="job-description">{description}</p>
      <p className="job-salary">{salary}</p>
      <p className="job-location">{location}</p>
    </div>
  );
}

export default JobCard;