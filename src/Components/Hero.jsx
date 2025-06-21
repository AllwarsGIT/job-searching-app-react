import SimpleButton from './SimpleButton';

function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to Our Website</h1>
        <p>This website has been done from scratch using react.</p>
      <div className="button-container">
        <SimpleButton className="simple-button button-start" >Get Started</SimpleButton>
        
        
      </div>
    </div>
  );
}

export default Hero;