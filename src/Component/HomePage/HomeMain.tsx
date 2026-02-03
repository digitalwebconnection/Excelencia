import AboutUs from "./AboutUsHm"
import ExploreDestinations from "./ExploreDestinations"
import FAQs from "./FAQs"
import Hero from "./Hero"
import OtherServicesTimeline from "./OtherServicesTimeline"
import UniversityScroll from "./Scrolling"
import StatsCounter from "./StatsCounter"
import StudentJourney from "./StudentJourney"
import TestimonialsSection from "./TestimonialsSection"
import OurServices from "./urServicesHm"

const HomeMain = () => {
    return (
        <>
            <Hero />
            <StatsCounter />
            <AboutUs />
            <UniversityScroll />
            <OurServices />
            <ExploreDestinations />
            <StudentJourney />
            <OtherServicesTimeline />
            <TestimonialsSection />
            <FAQs />
        </>
    )
}

export default HomeMain
