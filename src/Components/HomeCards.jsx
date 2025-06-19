import SimpleButton from './SimpleButton';

function HomeCard() {
  return (
      <div className="home-cards-container">
        <div className="home-card">
          <h2>For developers</h2>
          <p>Browse and find your job right now.</p>
          <SimpleButton style={{ border: '1px solid rgb(94, 94, 94)' }}>Browse jobs</SimpleButton>
        </div>
        <div className="home-card">
          <h2>For employers</h2>
          <p>Post your job and find the perfect developer.</p>
          <SimpleButton style={{ border: '1px solid rgb(94, 94, 94)' }}>Post a job</SimpleButton>
        </div>
      </div>
  );
}

export default HomeCard;