import Slider from "react-slick";
import aboutphoto from '../../assets/blog1.jpg'
import hen from '../../assets/blog2.jpg'
import flower from '../../assets/blog3.jpg'
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import '../OurTeam/OurTeam.css'
const OurBlog = () => {
    return (
        <div className='py-20 bg-sky-100'>
            <div className="text-center">
                <h3 className="text-green-500 font-semibold mb-3">Latest News</h3>

                <p className="text-5xl font-bold mb-10">Our Blogs</p>
            </div>

            <div className="lg:px-8 md:px-3 px-5">
                <Slider

                    slidesToShow={3}
                    infinite={true}
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
                                slidesToScroll: 1,
                                initialSlide: 2,
                                dots: true,
                                infinite: true,
                                speed: 300,

                                autoplay: true,
                                autoplaySpeed: 6000,
                                fade: true,
                                cssEase: 'linear',
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: true,
                                infinite: true,
                                speed: 300,

                                autoplay: true,
                                autoplaySpeed: 6000,
                                fade: true,
                                cssEase: 'linear',
                            }
                        }
                    ]}
                >
                    <Link to='/blog'>
                        <div className=''>
                            <div className="card mx-3  bg-base-100 shadow-xl">
                                <Fade duration={1500} direction="down">
                                    <figure><img src={flower} alt="Shoes" className="w-full zoom" /></figure>
                                </Fade>
                                <div className="card-body">
                                    <h3>15 August 2023</h3>
                                    <h2 className="card-title">Can a Smoothie Supercharge Days Future</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ratione quasi? Ipsa laudantium deserunt aliquam Praesentium ea ullam  enim architecto quisquam omnis iusto adipisci eaque quia. Ipsum, laudantium...</p>

                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/blog'>
                        <div className=' '>
                            <div className="card mx-3 bg-base-100 shadow-xl">
                                <Fade duration={1500} direction="down"><figure><img src={hen} alt="Shoes" className="w-full zoom" /></figure></Fade>
                                <div className="card-body">
                                    <h3>15 August 2023</h3>
                                    <h2 className="card-title">How to make your beakfast easy and yummy</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ea ullam dolorePraesentium ea ullam dolore animi? Vel praesentium consequuntur illum officia, id sit harum rerum facere cum quae...</p>

                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to='/blog'>
                        <div className=' '>
                            <div className="card mx-3 bg-base-100 shadow-xl">
                                <Fade duration={1500} direction="down">
                                    <figure><img src={aboutphoto} alt="Shoes" className="w-full zoom" /></figure>
                                </Fade>
                                <div className="card-body">
                                    <h3>15 August 2023</h3>
                                    <h2 className="card-title">Tips from our team: making youghurts and fruits</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto accusantium sapiente, suscipit voluptatibus iusto, in ea labore explicabo neque hic ipsa, cumque amet laborum...</p>

                                </div>
                            </div>

                        </div>
                    </Link>



                </Slider>
            </div>
        </div>
    );
};

export default OurBlog;