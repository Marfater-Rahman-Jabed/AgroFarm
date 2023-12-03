import { useState } from 'react';
import aboutphoto from '../../assets/agrodemobg.jpg'
import hen from '../../assets/hen.jpg';
import grass from '../../assets/grass.jpg';
import flower from '../../assets/flower.jpg';
import './About.css'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
const About = () => {
    const aboutpara = 'Chicken Good is a 100% American, family-owned and operated company, providing fresh shell eggs and egg products to supermarkets, restaurants and food manufacturers.';
    const missionpara = 'Our mission is to provide our community and neighbors with proven poultry and the patterns essential to developing sustainable poultry flocks.';
    const visionpara = 'Our vision, as purveyors of productive poultry, is to breed, grow and market locally-adapted breeds that are selected based on worldwide accepted poultry standards.';


    const [term, setTerm] = useState('aboutTerm')
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <div className='lg:flex flex-col lg:flex-row-reverse lg:justify-between gap-12 py-28 lg:px-16 md:px-16 px-6'>
            <div className="lg:w-1/2">
                <Fade duration={1500} direction='right'>

                    <p className='font-bold text-green-500 text-xl mb-4 pt-8'>Founded in 1999 </p>

                    <h3 className='font-bold  text-black text-5xl mb-2'>Our farm</h3>
                    <p className='font-semibold text-black text-4xl'>Who we are</p>
                </Fade>


                <div className='flex justify-between py-6'>
                    {term == 'aboutTerm' ? <button className='border-separate border-b-4  border-orange-500  btns btn1 font-bold text-slate-400 py-1 text-sm hover:text-white outline-none' onClick={() => setTerm('aboutTerm')}>ABOUT</button>
                        :
                        <button className='btns btn1 font-bold text-slate-400  py-1 text-sm hover:text-white border-separate border-b-4  border-slate-500' onClick={() => setTerm('aboutTerm')}>ABOUT</button>
                    }
                    {term == 'missionTerm' ? <button className='border-separate border-b-4  border-orange-500  btns btn1 font-bold text-slate-400 hover:text-white py-1 text-sm outline-none' onClick={() => setTerm('missionTerm')}>OUR MISSION</button>
                        :
                        <button className={`btns btn1 font-bold text-slate-400  py-1 text-sm hover:text-white border-separate border-b-4  border-slate-500`} onClick={() => setTerm('missionTerm')}>OUR MISSION</button>
                    }
                    {term == 'visionTerm' ? <button className='border-separate border-b-4  border-orange-500  btns btn1 font-bold text-slate-400  py-1 text-sm hover:text-white outline-none' onClick={() => setTerm('visionTerm')}>OUR VISION</button>
                        :
                        <button className='btns btn1 font-bold  text-slate-400   hover:text-white py-1 text-sm border-separate border-b-4  border-slate-500' onClick={() => setTerm('visionTerm')}>OUR VISION</button>
                    }
                </div>

                <div className='h-20'>
                    {term === 'aboutTerm' && <Fade duration={1000} direction='up'>
                        <p className='text-black'>
                            {aboutpara}
                        </p></Fade>}
                    {term === 'missionTerm' && <Fade duration={1000} direction='up'>
                        <p className='text-black'>
                            {missionpara}
                        </p></Fade>}
                    {term === 'visionTerm' && <Fade duration={1000} direction='up'>
                        <p className='text-black'>
                            {visionpara}
                        </p></Fade>}
                </div>

                <Fade duration={1000} direction='up'>
                    <div className='pt-12 md:pt-10 md:pb-2 pb-4'>
                        <Link to='/about'><button className='py-4 font-bold text-center hover:text-white px-6 rounded-none outline  text-2xl btns btn1'>READ MORE</button></Link>
                    </div>
                </Fade>

            </div>
            <div className="lg:w-1/2">
                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>

                    <div >
                        <img src={aboutphoto} alt="" />
                    </div>
                    <div>
                        <img src={hen} alt="" />
                    </div>
                    <div >
                        <img src={flower} alt="" />
                    </div>
                    <div >
                        <img src={aboutphoto} alt="" />
                    </div>
                    <div >
                        <img src={grass} alt="" />
                    </div>

                </Slider>
                <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    autoplay={true}
                    autoplaySpeed={3000}
                    focusOnSelect={true}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 2,
                                initialSlide: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        }
                    ]}
                >
                    <div className='mr-3'>
                        <img src={aboutphoto} alt="" className='w-36 ' />
                    </div>
                    <div className='mr-3'>
                        <img src={hen} alt="" className='w-36 ' />
                    </div>
                    <div className='mr-3'>
                        <img src={flower} alt="" className='w-36 ' />
                    </div>
                    <div className='mr-3'>
                        <img src={aboutphoto} alt="" className='w-36 ' />
                    </div>
                    <div className='mr-3'>
                        <img src={grass} alt="" className='w-36 ' />
                    </div>


                </Slider>
            </div>

        </div>
    );
};

export default About;