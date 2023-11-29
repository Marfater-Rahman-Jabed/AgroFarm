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
                    <div style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', height: '85vh', width: '100vw' }} className="bg-cover">
                        <p className="text-center font-bold text-6xl text-white  pt-44">Feeding A Growthing World</p>
                        <p className="text-center font-bold text-2xl text-white pt-2">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. </p>
                    </div>
                </div>
                <div className=" ">
                    <div style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '85vh' }} className="">
                        <p className="text-center font-bold text-6xl text-white  pt-44">AgriBusiness ! Build Todays  World</p>
                        <p className="text-center font-bold text-2xl text-white pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
                <div className=" ">
                    <div style={{ backgroundImage: `url(${bg3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '85vh' }} className="">
                        <span>
                            <p className="text-center font-bold text-6xl text-white  pt-44">Leading the Wheat Industry <br /> Forward</p>
                            <p className="text-center font-bold text-2xl text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </span>
                    </div>
                </div>



            </Slider>
        </div>
    );
};

export default HeroSection;