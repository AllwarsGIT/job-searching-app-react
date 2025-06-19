import SimpleButton from './SimpleButton';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      <p className="job-company">{job.company}</p>
      <p className="job-location">{job.location}</p>
      <p className="job-description">{job.description}</p>
      <a href={job.applyLink} className="button-apply">Apply Now</a>
    </div>
  );
}

export default JobCard;