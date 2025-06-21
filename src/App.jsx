import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import SimpleButton from './Components/SimpleButton';
import HomeCardContainer from './Components/HomeCardContainer';
import JobCardList from './Components/JobCardList';

function App() {  
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCardContainer />
      <JobCardList />

    </>
  )
}

export default App
