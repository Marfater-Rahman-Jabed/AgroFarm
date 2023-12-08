import './OurTeam.css'
// import team1 from '../../assets/team1.jpg'
import { FaFacebookSquare } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaSquareWhatsapp } from "react-icons/fa6";
import { toast } from 'react-toastify'
import { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { MdDeleteOutline } from "react-icons/md";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReactWhatsapp from 'react-whatsapp';
import { BsWhatsapp } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import '../../Component/About/About.css'
import useAdmin from '../../Hooks/useAdmin';
import { AuthContexts } from '../../Contexts/Contexts';
import Spinner from '../Spinner/Spinner';
const OurTeam = () => {

    const { user } = useContext(AuthContexts)
    const [Admin] = useAdmin(user?.email)
    const [isUploadLoading, setIsUploadLoading] = useState(false)
    const imageKey = import.meta.env.VITE_imagekey;
    const [itemName, setItemName] = useState('')
    const [itemDes, setItemDes] = useState('')
    const [fb, setFb] = useState('')
    const [whatsApp, setWhatsApp] = useState('')
    const [tweeter, setTweeter] = useState('')
    const [linkdin, setLinkdin] = useState('')
    const [photo, setPhoto] = useState('')
    // const myData = useLoaderData()
    const { data: myData = [], refetch } = useQuery({
        queryKey: ['Datas'],
        queryFn: async () => {
            // setIsLoading(true)
            const res = await fetch(`http://localhost:5000/Members`)
            const data = res.json()
            // setIsLoading(false)
            return data;
        }
    })

    console.log(myData)
    const handleDelete = (id) => {

        fetch(`http://localhost:5000/deleteMembers/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`Successfully Removed`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                refetch(`http://localhost:5000/Members`)
            })
    }



    const handleData = () => {
        setIsUploadLoading(true)
        console.log('submitted')
        const formData = new FormData();
        formData.append('image', photo);
        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                console.log(image)
                if (image.success) {
                    const itemDetails = {
                        picture: image.data.url,
                        name: itemName,
                        title: itemDes,
                        fb: fb,
                        whatsApp: whatsApp,
                        tweeter: tweeter,
                        linkdin: linkdin

                    }

                    fetch(`http://localhost:5000/uploadMembers`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(itemDetails)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${itemName} Successfully Uploaded`, {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                            });
                            setIsUploadLoading(false)
                            refetch()
                        })
                }
            })
    }

    return (
        <div className='py-20 '>
            <div className="text-center">
                <h3 className="text-green-500 font-semibold mb-3">We are Experienced Farmers</h3>

                <p className="text-5xl font-bold mb-10">Our Team</p>
            </div>
            {Admin && <div className='flex justify-end lg:px-20 md:px-10 px-4 py-2'>
                <button className='btns btn1 border-2 border-solid border-orange-600 px-12 font-bold hover:text-white rounded-lg' onClick={() => document.getElementById('my_modal_member').showModal()}>{isUploadLoading ? <Spinner></Spinner> : 'ADD TEAM MEMBER'}</button>

            </div>}
            <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4  lg:px-16 md:px-12 px-10">
                {
                    myData?.slice(0, 4).map((member, i) => <Fade key={i} direction='left' duration={2000} >
                        <div className="card  bg-base-100 shadow-2xl">
                            <figure><PhotoProvider>
                                <PhotoView src={member?.picture}>
                                    <img src={member?.picture} alt="Shoes" className="w-full h-60 zoom cursor-pointer" />
                                </PhotoView>
                            </PhotoProvider></figure>
                            <div className="card-body">
                                <h2 className="font-bold text-xl text-center">{member?.name}</h2>
                                <p className="font-semibold text-xl text-center">{member?.title} </p>
                                <div className="card-actions justify-center gap-2 py-3">
                                    <a href={member?.fb} target='__blank'><FaFacebookSquare className='text-2xl'></FaFacebookSquare></a>
                                    <a href={member?.tweeter} target='__blank'><FaTwitter className='text-2xl'></FaTwitter></a>
                                    <a href={member?.linkdin} target='__blank'><FaLinkedin className='text-2xl'></FaLinkedin></a>
                                    <ReactWhatsapp number={`+88${member?.whatsApp}`} message={`Hi ${member?.name}. `} className="tooltip  tooltip-secondary" data-tip={`Contact with ${member?.name}`}><BsWhatsapp className=' mx-auto text-2xl text-green-700' ></BsWhatsapp> </ReactWhatsapp>
                                    {Admin && <button className="tooltip  tooltip-secondary" data-tip={`Delete ${member?.name}`} onClick={() => handleDelete(member?._id)}><MdDeleteOutline className="text-2xl text-error"></MdDeleteOutline></button>}

                                </div>
                            </div>
                        </div>
                    </Fade>)
                }


            </div>

            {myData?.length > 0 &&
                <div className='flex justify-center py-10'>
                    <Link to='/allMember'>
                        <button className='btn  btn-primary px-12'>See All Member</button>
                    </Link>
                </div>
            }
            <dialog id="my_modal_member" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="" method="dialog" className='py-4' onSubmit={handleData}>
                        {/* if there is a button in form, it will close the modal */}


                        <h3 className='text-center font-bold'>Enter Item Details</h3>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Item Name</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setItemName(e.target.value)} required />

                        </div>
                        <div className='flex justify-center gap-2'>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Title</span>

                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setItemDes(e.target.value)} required />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">WhatsApp Number</span>

                                </label>
                                <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setWhatsApp(e.target.value)} />

                            </div>

                        </div>

                        <div className='flex justify-center gap-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">FaceBook ID Link</span>

                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setFb(e.target.value)} />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Linkedin ID Link</span>

                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setLinkdin(e.target.value)} />

                            </div>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Tweeter ID Link</span>

                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setTweeter(e.target.value)} />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Picture</span>

                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" onChange={(e) => setPhoto(e.target.files[0])} required />

                            </div>

                        </div>

                        <div className="form-control w-full mt-5">

                            <input type="submit" value='Submit' className="btn btn-secondary w-full " />

                        </div>
                    </form>
                </div>
            </dialog>

        </div>
    );
};

export default OurTeam;