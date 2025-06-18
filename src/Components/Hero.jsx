import SimpleButton from './SimpleButton';

function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to Our Website</h1>
        <p>This website has been done from scratch using react.</p>
      <div className="button-container">
        <SimpleButton style={{ border: '1px solid rgb(94, 94, 94)' }}>Get Started</SimpleButton>
        <SimpleButton style={{ border: '1px solid rgb(94, 94, 94)' }}>About us</SimpleButton>
        
      </div>
    </div>
  );
}

export default Hero;