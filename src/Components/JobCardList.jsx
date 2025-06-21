import JobCard from './JobCard';
import jobList from '../jobs.json';

function JobCardList() {

    var list = jobList.map((job, index) => 
    <JobCard 
        key={index} 
        {...job}
         />);

    return (
        <div>
            {list}
        </div>
    );
}

export default JobCardList;


