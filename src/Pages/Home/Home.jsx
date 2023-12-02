import About from "../../Component/About/About";
import Advertisement from "../../Component/Advertisement/Advertisement";
import HeroSection from "../../Component/HeroSection/HeroSection";
import OurProducts from "../../Component/OurProducts/OurProducts";

const Home = () => {

    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Advertisement></Advertisement>
            <OurProducts></OurProducts>
        </div>
    );
};

export default Home;