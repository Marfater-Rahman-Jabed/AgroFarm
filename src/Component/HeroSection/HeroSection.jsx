import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bg1 from '../../assets/bg13.png'
import bg2 from '../../assets/fishbg.jpg'
import bg3 from '../../assets/catlebg2.png'
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
                        <p className="text-center font-bold lg:text-6xl  md:text-5xl text-4xl text-white  lg:pt-44 md:pt-40 pt-60">Feeding A Growthing World</p>
                        <p className="text-center font-bold text-2xl text-white pt-2">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. </p>
                    </div>
                </div>
                <div className=" ">
                    <div style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }} className="lg:h-[85vh] md:h-[50vh] h-[65vh]">
                        <p className="text-center font-bold lg:text-6xl  md:text-5xl text-4xl text-white  lg:pt-44 md:pt-40 pt-60">AgriBusiness ! Build Todays  World</p>
                        <p className="text-center font-bold text-2xl text-white pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
                <div className=" ">
                    <div style={{ backgroundImage: `url(${bg3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }} className="lg:h-[85vh] md:h-[50vh] h-[65vh]">
                        <span>
                            <p className="text-center font-bold lg:text-6xl  md:text-5xl text-4xl text-white  lg:pt-44 md:pt-40 pt-60">Leading the Wheat Industry  Forward</p>
                            <p className="text-center font-bold text-2xl text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </span>
                    </div>
                </div>



            </Slider>
        </div>
    );
};

export default HeroSection;