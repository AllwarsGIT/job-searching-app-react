import Hero from "../Components/Hero/Hero";
import HomeCardContainer from "../Components/HomeCardContainer/HomeCardContainer";
import JobCardList from "../Components/JobCardList/JobCardList";
import ShowJobsButton from "../Components/ShowJobsButton/ShowJobsButton";



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