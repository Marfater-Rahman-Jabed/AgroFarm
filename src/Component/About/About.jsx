import { useState } from 'react';
import aboutphoto from '../../assets/agrodemobg.jpg'
import hen from '../../assets/hen.jpg';
import grass from '../../assets/grass.jpg';
import flower from '../../assets/flower.jpg';

import Slider from 'react-slick';
const About = () => {
    const aboutpara = 'Chicken Good is a 100% American, family-owned and operated company, providing fresh shell eggs and egg products to supermarkets, restaurants and food manufacturers.';
    const missionpara = 'Our mission is to provide our community and neighbors with proven poultry and the patterns essential to developing sustainable poultry flocks.';
    const visionpara = 'Our vision, as purveyors of productive poultry, is to breed, grow and market locally-adapted breeds that are selected based on worldwide accepted poultry standards.';


    const [term, setTerm] = useState('aboutTerm')
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <div className='flex justify-between gap-12 py-28 px-16'>
            <div className="w-1/2">
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
                        <img src={grass} alt="" />
                    </div>

                </Slider>
                <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    autoplay={true}
                    autoplaySpeed={3000}
                    focusOnSelect={true}
                >
                    <div className='mr-3'>
                        <img src={aboutphoto} alt="" className='w-48 ' />
                    </div>
                    <div className='mr-3'>
                        <img src={hen} alt="" className='w-48 ' />
                    </div>
                    <div className='mr-3'>
                        <img src={flower} alt="" className='w-48 ' />
                    </div>
                    <div className='mr-3'>
                        <img src={grass} alt="" className='w-48 ' />
                    </div>

                </Slider>
            </div>
            <div className="w-1/2">
                <p className='font-bold text-green-500 text-xl mb-4 pt-8'>Founded in 1999 </p>

                <h3 className='font-bold  text-black text-5xl mb-2'>Our farm</h3>
                <p className='font-semibold text-black text-4xl'>Who we are</p>

                <div className='flex justify-between py-6'>
                    {term == 'aboutTerm' ? <button className='font-bold text-slate-400 border-separate border-b-4 border-orange-500 py-1 text-sm' onClick={() => setTerm('aboutTerm')}>ABOUT</button>
                        :
                        <button className='font-bold text-slate-400 border-separate hover:border-b-4 hover:border-orange-500 py-1 text-sm' onClick={() => setTerm('aboutTerm')}>ABOUT</button>
                    }
                    {term == 'missionTerm' ? <button className={`font-bold text-slate-400  border-separate border-b-4 border-orange-500 py-1 text-sm`} onClick={() => setTerm('missionTerm')}>OUR MISSION</button>
                        :
                        <button className={`font-bold text-slate-400  border-separate hover:border-b-4 hover:border-orange-500 py-1 text-sm`} onClick={() => setTerm('missionTerm')}>OUR MISSION</button>
                    }
                    {term == 'visionTerm' ? <button className='font-bold text-slate-400 border-separate border-b-4 border-orange-500 py-1 text-sm' onClick={() => setTerm('visionTerm')}>OUR VISION</button>
                        :
                        <button className='font-bold text-slate-400 border-separate hover:border-b-4 hover:border-orange-500 py-1 text-sm' onClick={() => setTerm('visionTerm')}>OUR VISION</button>
                    }
                </div>

                <div className='h-20'>
                    {term === 'aboutTerm' && <p className='text-black'>
                        {aboutpara}
                    </p>}
                    {term === 'missionTerm' && <p className='text-black'>
                        {missionpara}
                    </p>}
                    {term === 'visionTerm' && <p className='text-black'>
                        {visionpara}
                    </p>}
                </div>

                <div className='pt-12 '>
                    <button className='py-4 font-bold text-center px-6 rounded-none bg-green-500 hover:bg-green-700 text-white text-2xl'>READ MORE</button>
                </div>

            </div>
        </div>
    );
};

export default About;