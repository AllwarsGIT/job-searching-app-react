import HomeCard from './HomeCard';


function HomeCardContainer() {
  return (
      <div className="home-cards-container">
        <HomeCard 
            title="For Developers"
            description="Find the best job opportunities that match your skills and interests."
            buttonText="Explore Jobs"
            className="home-card-developer"
            buttonClassName="button-home-card button-developer"
        />
        <HomeCard 
            title="For Employers"
            description="Post your job openings and find the right candidates for your team."
            buttonText="Post a Job"
            className="home-card-employer"
            buttonClassName="button-home-card button-employer"
        />
      </div>
  );
}

export default HomeCardContainer;