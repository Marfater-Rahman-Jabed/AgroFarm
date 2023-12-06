import { useLocation } from "react-router-dom";

import bgAbout from '../../assets/lastAbout.png';
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const BlogDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const location = useLocation()
    const { from } = location.state

    console.log((from))
    return (
        <div>
            <div className='py-36' style={{ backgroundImage: `url(${bgAbout})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h3 className='text-7xl text-center text-white font-bold'> Blog Details</h3>
            </div>
            <Fade duration={3000}>
                <div className="card mx-3  bg-base-100 shadow-xl">
                    <span className='lg:px-28 md:px-10 px-4 py-12'>
                        <h3 className='font-semibold'>{from?.date}</h3>
                        <h2 className="text-4xl font-bold">{from?.name}</h2>
                    </span>
                    <figure><img src={from?.picture} alt="Shoes" className="lg:w-[70vw] md:w-[75vw] lg:h-[70vh] md:h-[40vh]" /></figure>
                    <div className="card-body">

                        <p className='text-justify lg:px-28 md:px-8'>{from?.blog}</p>

                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default BlogDetails;