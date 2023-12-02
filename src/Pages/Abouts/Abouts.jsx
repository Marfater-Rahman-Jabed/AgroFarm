import { Link } from 'react-router-dom';
import About from '../../Component/About/About'
import bgAbout from '../../assets/lastAbout.png'

import { MdOutlineArrowRightAlt } from "react-icons/md";


import OurTeam from '../../Component/OurTeam/OurTeam';
import Testimonial from '../../Component/Testimonial/Testimonial';
import History from '../../Component/History/History';



const Abouts = () => {

    return (
        <div className=''>
            <div className='py-36' style={{ backgroundImage: `url(${bgAbout})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h3 className='text-7xl text-center text-white font-bold'>About</h3>
            </div>
            <div className='flex justify-center gap-3 py-4 bg-slate-400 font-semibold text-xl pb-4'>
                <Link to='/'>HOME</Link><MdOutlineArrowRightAlt className=' text-3xl'></MdOutlineArrowRightAlt><p>ABOUT</p>
            </div>
            <About></About>
            <History></History>
            <OurTeam></OurTeam>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Abouts;