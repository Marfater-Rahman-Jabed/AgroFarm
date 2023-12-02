import Slider from 'react-slick';
import client from '../../assets/team1.jpg'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className='bg-sky-100 py-16'>
            <div className="text-center">

                <p className="text-5xl font-bold py-20">Testimonial</p>
            </div>


            <div className='py-10 gap-10'>
                <Slider
                    slidesToShow={2}
                    swipeToSlide={true}
                    autoplay={true}
                    autoplaySpeed={3000}
                    focusOnSelect={true}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                initialSlide: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]}
                >


                    <div className=''>
                        <div className="card  bg-white shadow-xl mx-4">
                            <div className="card-body">
                                <div className='flex justify-center py-6'>
                                    <FaQuoteLeft className='text-4xl'></FaQuoteLeft>
                                </div>

                                <p className="text-justify lg:px-10 md:px-6 px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, assumenda fugit. Pariatur sunt distinctio, ipsam asperiores iusto officia dolorem tempore nostrum accusamus consequuntur.</p>
                                <div className="card-actions justify-center items-center gap-2 py-6">
                                    <img src={client} alt="" className='w-24 h-24 rounded-full' />
                                    <div>
                                        <h2 className="card-title">Michel Clark</h2>
                                        <h3 className="text-green-500 italic">Client</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10'>
                        <div className="card  bg-white shadow-xl mx-4">
                            <div className="card-body">
                                <div className='flex justify-center py-6'>
                                    <FaQuoteLeft className='text-4xl'></FaQuoteLeft>
                                </div>

                                <p className="text-justify lg:px-10 md:px-6 px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, assumenda fugit. Pariatur sunt distinctio, ipsam asperiores iusto officia dolorem tempore nostrum accusamus consequuntur.</p>
                                <div className="card-actions justify-center items-center gap-2 py-6">
                                    <img src={client} alt="" className='w-24 h-24 rounded-full' />
                                    <div>
                                        <h2 className="card-title">Michel Clark</h2>
                                        <h3 className="text-green-500 italic">Client</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10'>
                        <div className="card  bg-white shadow-xl mx-4">
                            <div className="card-body">
                                <div className='flex justify-center py-6'>
                                    <FaQuoteLeft className='text-4xl'></FaQuoteLeft>
                                </div>

                                <p className="text-justify lg:px-10 md:px-6 px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, assumenda fugit. Pariatur sunt distinctio, ipsam asperiores iusto officia dolorem tempore nostrum accusamus consequuntur.</p>
                                <div className="card-actions justify-center items-center gap-2 py-6">
                                    <img src={client} alt="" className='w-24 h-24 rounded-full' />
                                    <div>
                                        <h2 className="card-title">Michel Clark</h2>
                                        <h3 className="text-green-500 italic">Client</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10'>
                        <div className="card  bg-white shadow-xl mx-4">
                            <div className="card-body">
                                <div className='flex justify-center py-6'>
                                    <FaQuoteLeft className='text-4xl'></FaQuoteLeft>
                                </div>

                                <p className="text-justify lg:px-10 md:px-6 px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, assumenda fugit. Pariatur sunt distinctio, ipsam asperiores iusto officia dolorem tempore nostrum accusamus consequuntur.</p>
                                <div className="card-actions justify-center items-center gap-2 py-6">
                                    <img src={client} alt="" className='w-24 h-24 rounded-full' />
                                    <div>
                                        <h2 className="card-title">Michel Clark</h2>
                                        <h3 className="text-green-500 italic">Client</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </Slider>
            </div>




        </div>
    );
};

export default Testimonial;