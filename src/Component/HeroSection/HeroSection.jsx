import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bg1 from '../../assets/bg13.png'
import bg2 from '../../assets/fishbg.jpg'
import bg3 from '../../assets/catlebg2.png'
import { Fade } from "react-awesome-reveal";
const HeroSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: 'linear',


    };
    return (
        <div>

            <Slider {...settings} className="" >
                <div className=" ">
                    <div style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', width: '100vw' }} className="bg-cover lg:h-[85vh] md:h-[50vh] h-[65vh]">
                        <Fade duration={1000} direction="up" >
                            <p className="text-center font-bold lg:text-6xl  md:text-5xl text-4xl text-white  lg:pt-44 md:pt-40 pt-60">Feeding A Growthing World</p>
                        </Fade>
                        <Fade duration={1000} direction="up" delay={100}>
                            <p className="text-center font-bold text-2xl text-white pt-2">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. </p>
                        </Fade>
                    </div>
                </div>
                <div className=" ">
                    <div style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }} className="lg:h-[85vh] md:h-[50vh] h-[65vh]">
                        <Fade duration={1000} direction="up" >
                            <p className="text-center font-bold lg:text-6xl  md:text-5xl text-4xl text-white  lg:pt-44 md:pt-40 pt-60">AgriBusiness ! Build Todays  World</p>
                        </Fade>
                        <Fade duration={1000} direction="up" >
                            <p className="text-center font-bold text-2xl text-white pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </Fade>
                    </div>
                </div>
                <div className=" ">
                    <div style={{ backgroundImage: `url(${bg3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }} className="lg:h-[85vh] md:h-[50vh] h-[65vh]">
                        <span>
                            <Fade duration={1000} direction="up" >
                                <p className="text-center font-bold lg:text-6xl  md:text-5xl text-4xl text-white  lg:pt-44 md:pt-40 pt-60">Leading the Wheat Industry  Forward</p>
                            </Fade>
                            <Fade duration={1000} direction="up" >
                                <p className="text-center font-bold text-2xl text-white pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </Fade>
                        </span>
                    </div>
                </div>



            </Slider>
        </div>
    );
};

export default HeroSection;