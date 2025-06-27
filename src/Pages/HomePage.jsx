import Hero from "../Components/Hero/Hero.jsx";
import HomeCardContainer from "../Components/HomeCardContainer/HomeCardContainer.jsx";
import JobCardList from "../Components/JobCardList/JobCardList.jsx";
import ShowJobsButton from "../Components/ShowJobsButton/ShowJobsButton.jsx";



function HomePage() {
  return (
    <>
        <Hero />
        <HomeCardContainer />
        <JobCardList numCardsToShow={3} />
        <ShowJobsButton />
    </>
  );
}

export default HomePage;