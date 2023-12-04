import { useEffect } from "react";
import About from "../../Component/About/About";
import Advertisement from "../../Component/Advertisement/Advertisement";
import HeroSection from "../../Component/HeroSection/HeroSection";
import OurBlog from "../../Component/OurBlog/OurBlog";
import OurProducts from "../../Component/OurProducts/OurProducts";
import OurTeam from "../../Component/OurTeam/OurTeam";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Advertisement></Advertisement>
            <OurProducts></OurProducts>
            <OurBlog></OurBlog>
            <OurTeam></OurTeam>

        </div>
    );
};

export default Home;