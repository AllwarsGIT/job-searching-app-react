import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero';
import HomeCardContainer from './Components/HomeCardContainer/HomeCardContainer.jsx';
import JobCardList from './Components/JobCardList/JobCardList';
import ShowJobsButton from './Components/ShowJobsButton/ShowJobsButton.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {  
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCardContainer />
      <JobCardList />
      <ShowJobsButton />
      <Footer />
    </>
  )
}

export default App
