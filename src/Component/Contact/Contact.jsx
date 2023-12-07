import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import bgAbout from '../../assets/lastAbout.png'
import GoogleMapComponent from '../GoogleMapComponent/GoogleMapComponent';
import { toast } from 'react-toastify';
const Contact = () => {
    const form = useRef();
    const handleEmail = (e) => {
        e.preventDefault()
        console.log('email send')
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                toast.success(` Your Email Received Successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                toast.error(`Something went wrong. Please try again later`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    }
    return (
        <div >
            <div className='py-36' style={{ backgroundImage: `url(${bgAbout})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h3 className='text-7xl text-center text-white font-bold'>Contact</h3>
            </div>
            <div className='lg:flex justify-around gap-16'>
                <div className=' '>

                    <div className='py-24 lg:ps-6  px-4'>
                        <div className='pb-6'>
                            <h3 className='lg:text-6xl md:text-6xl text-5xl font-bold'>Get in Touch</h3>
                            <p className='pt-6 font-semibold'>We are available 24/7 by fax, e-mail or by phone. You can also use our <br />
                                quick contact form to ask a question about our products.</p>
                        </div>
                        <form ref={form} className=' ' onSubmit={handleEmail} >

                            <div >
                                <div className='lg:flex md:flex justify-between gap-1 '>
                                    <input name='from_name' type="text" placeholder="First Name" className="input input-bordered input-primary input-lg w-full  mb-4 " required /><br />
                                    <input name='from_name2' type="text" placeholder="Last Name" className="input input-bordered input-primary input-lg w-full  mb-4 " required /><br />
                                </div>


                                <div className='lg:flex md:flex justify-between  gap-1'>
                                    <input name='from_email' type="email" placeholder="Email" className="input input-bordered  input-primary input-lg w-full  mb-4 " required /><br />
                                    <input name='phone' type="number" placeholder="Phone" className="input input-bordered input-primary input-lg w-full  mb-4 " required /><br />
                                </div>

                                <textarea name='message' placeholder="Message" className="textarea textarea-bordered textarea-primary textarea-lg w-full h-36 " required></textarea><br />
                            </div>

                            <div className='pt-3 flex justify-center'>
                                <input className='btn btn-outline btn-primary P-3 ' type='submit' value='SEND MESSAGE'></input>
                            </div>
                        </form>

                    </div>
                </div>

                <div className='py-28  gap-3 md:px-36 px-4'>
                    <div className=' py-6 bg-slate-200 p-10 my-2'>
                        <h3 className='text-3xl font-bold py-3'>Phone</h3>
                        <p className=' font-bold'>Office No. - 019827717200</p>
                        <p className=' font-bold'>Whatsapp - 01690093963</p>
                    </div>
                    <div className=' py-6 bg-slate-200 p-10 my-2'>
                        <h3 className='text-3xl font-bold py-3'>Address</h3>
                        <p className=' font-bold'>Kotbari, Sadar South</p>
                        <p className=' font-bold'>Comilla, Bangladesh</p>
                    </div>
                    <div className=' py-6 bg-slate-200 p-10 my-2'>
                        <h3 className='text-3xl font-bold py-3'>E-mail</h3>
                        <p className=' font-bold'>marfaterrahman@gmail.com</p>
                        <p className=' font-bold'>marfaterrahmanjabed@gmail.com</p>
                    </div>
                </div>
            </div>

            <GoogleMapComponent></GoogleMapComponent>
        </div>
    );
};

export default Contact;