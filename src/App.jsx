import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero';
import HomeCardContainer from './Components/HomeCardContainer/HomeCardContainer.jsx';
import JobCardList from './Components/JobCardList/JobCardList';

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
