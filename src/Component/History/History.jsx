import { useState } from "react";
import { BiSolidUpArrowAlt } from "react-icons/bi";
import bgAbout2 from '../../assets/about3.jpg'
import Slider from "react-slick";
const History = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    return (
        <div>
            <div style={{ backgroundImage: `url(${bgAbout2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='py-44'>
                <h3 className='text-7xl font-bold text-center text-white'>OUR HISTORY</h3>

                <div className=' px-8 py-12'>


                    <div className="">
                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
                            slidesToShow={3}
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
                                        slidesToShow: 3,
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

                            <div >
                                <div className='bg-slate-300 lg:px-16 md:px-8 px-2 pb-10 pt-8 bg-blend-multiply border-4 border-separate border-black mr-2'>

                                    <h3 className='text-2xl font-bold text-center py-4'>Establishment</h3>
                                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, eius dignissimos! Tenetur alias ducimus at impedit commodi nam autem hic.</p>

                                </div>
                            </div>
                            <div >
                                <div className='bg-slate-300 lg:px-16 md:px-8 px-2  pb-10 pt-8 bg-blend-multiply border-4 border-separate border-black  mr-2'>

                                    <h3 className='text-2xl font-bold text-center py-4'>First Success</h3>
                                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, eius dignissimos! Tenetur alias ducimus at impedit commodi nam autem hic.</p>

                                </div>
                            </div>
                            <div >
                                <div className='bg-slate-300 lg:px-16 md:px-8  px-2 pb-10 pt-8 bg-blend-multiply border-4 border-separate border-black  mr-2'>

                                    <h3 className='text-2xl font-bold text-center py-4'>New Technology</h3>
                                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, eius dignissimos! Tenetur alias ducimus at impedit commodi nam autem hic.</p>

                                </div>
                            </div>
                            <div >
                                <div className='bg-slate-300 lg:px-16 md:px-8 px-2 pb-10 pt-8 bg-blend-multiply border-4 border-separate border-black  mr-2'>

                                    <h3 className='text-2xl font-bold text-center py-4'>National Recognition</h3>
                                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, eius dignissimos! Tenetur alias ducimus at impedit commodi nam autem hic.</p>

                                </div>
                            </div>


                        </Slider>
                        <Slider
                            className='bg-slate-800 text-white p-4 rounded-lg my-4'
                            asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={3}
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
                            <div className='mr-3'>
                                <h3 className='flex flex-col justify-center items-center'>
                                    <span ><BiSolidUpArrowAlt className='text-3xl -pt-10'></BiSolidUpArrowAlt></span>
                                    1999</h3>
                            </div>
                            <div className='mr-3'>
                                <h3 className='flex flex-col justify-center items-center'>
                                    <span ><BiSolidUpArrowAlt className='text-3xl -pt-10'></BiSolidUpArrowAlt></span>
                                    2003</h3>
                            </div>
                            <div className='mr-3'>
                                <h3 className='flex flex-col justify-center items-center'>
                                    <span ><BiSolidUpArrowAlt className='text-3xl -pt-10'></BiSolidUpArrowAlt></span>
                                    2007</h3>
                            </div>
                            <div className='mr-3'>
                                <h3 className='flex flex-col justify-center items-center'>
                                    <span ><BiSolidUpArrowAlt className='text-3xl -pt-10'></BiSolidUpArrowAlt></span>
                                    2010</h3>
                            </div>




                        </Slider>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default History;