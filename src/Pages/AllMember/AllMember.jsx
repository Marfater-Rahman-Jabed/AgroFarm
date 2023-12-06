import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useQuery } from "react-query";

import { toast } from "react-toastify";
import ReactWhatsapp from "react-whatsapp";
import bgAbout from '../../assets/lastAbout.png'
const AllMember = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


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

    return (
        <div>
            <div className='py-36' style={{ backgroundImage: `url(${bgAbout})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h3 className='text-7xl text-center text-white font-bold'> Our Team Members</h3>
            </div>
            <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4  lg:px-16 md:px-12 px-10 py-16">
                {
                    myData?.map((member, i) => <Fade key={i} direction='left' duration={2000} >
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
                                    <button className="tooltip  tooltip-secondary" data-tip={`Delete ${member?.name}`} onClick={() => handleDelete(member?._id)}><MdDeleteOutline className="text-2xl text-error"></MdDeleteOutline></button>

                                </div>
                            </div>
                        </div>
                    </Fade>)
                }


            </div>
        </div>
    );
};

export default AllMember;