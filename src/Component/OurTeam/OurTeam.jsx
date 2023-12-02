import './OurTeam.css'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/team4.jpg'
import { LuFacebook } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";



const OurTeam = () => {
    return (
        <div className='py-20 '>
            <div className="text-center">
                <h3 className="text-green-500 font-semibold mb-3">We are Experienced Farmers</h3>

                <p className="text-5xl font-bold mb-10">Our Team</p>
            </div>
            <div className="grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4  lg:px-16 md:px-12 px-10">
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={team1} alt="Shoes" className="zoom w-full" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl text-center">Rizbi Chowdary</h2>
                        <p className="font-semibold text-xl text-center">Founder & CEO </p>
                        <div className="card-actions justify-center gap-2 py-5">
                            <LuFacebook className='text-2xl'></LuFacebook>
                            <FaTwitter className='text-2xl'></FaTwitter>
                            <FaLinkedin className='text-2xl'></FaLinkedin>
                            <FaSquareWhatsapp className='text-2xl'></FaSquareWhatsapp >
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={team2} alt="Shoes" className="zoom w-full" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl text-center">Rizbi Chowdary</h2>
                        <p className="font-semibold text-xl text-center">Head of Supply Chain</p>
                        <div className="card-actions justify-center gap-2 py-5">
                            <LuFacebook className='text-2xl'></LuFacebook>
                            <FaTwitter className='text-2xl'></FaTwitter>
                            <FaLinkedin className='text-2xl'></FaLinkedin>
                            <FaSquareWhatsapp className='text-2xl'></FaSquareWhatsapp >
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={team3} alt="Shoes" className="zoom w-full" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl text-center">Rizbi Chowdary</h2>
                        <p className="font-semibold text-xl text-center">Customer Care Specialist</p>
                        <div className="card-actions justify-center gap-2 py-5">
                            <LuFacebook className='text-2xl'></LuFacebook>
                            <FaTwitter className='text-2xl'></FaTwitter>
                            <FaLinkedin className='text-2xl'></FaLinkedin>
                            <FaSquareWhatsapp className='text-2xl'></FaSquareWhatsapp >
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={team4} alt="Shoes" className="zoom w-full" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-xl text-center">Rizbi Chowdary</h2>
                        <p className="font-semibold text-xl text-center">Head Of Seals Dept.</p>
                        <div className="card-actions justify-center gap-2 py-5">
                            <LuFacebook className='text-2xl'></LuFacebook>
                            <FaTwitter className='text-2xl'></FaTwitter>
                            <FaLinkedin className='text-2xl'></FaLinkedin>
                            <FaSquareWhatsapp className='text-2xl'></FaSquareWhatsapp >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;