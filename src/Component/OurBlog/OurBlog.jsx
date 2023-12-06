// import Slider from "react-slick";
import { useQuery } from "react-query";
// import blog1 from '../../assets/blog3.jpg'

import { useState } from 'react';
import Spinner from '../../Component/Spinner/Spinner';
import { toast } from 'react-toastify';
import Loading from "../../Component/Loading/Loading";
import '../OurTeam/OurTeam.css'
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const OurBlog = () => {

    // const monthNames = [
    //     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Dec'
    // ];

    // const dateToday = todayDate.toString().slice(8, 10)
    // const month = todayDate.toString().slice(4, 7)
    // const year = todayDate.toString().slice(13, 15)
    const [isUploadLoading, setIsUploadLoading] = useState(false)
    const [itemName, setItemName] = useState('')
    const [itemDes, setItemDes] = useState('')
    // const [price, setPrice] = useState('')
    const [photo, setPhoto] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const imageKey = import.meta.env.VITE_imagekey;


    const { data: blogData = [], refetch } = useQuery({
        queryKey: ['BlogDatas'],
        queryFn: async () => {
            setIsLoading(true)
            const res = await fetch(`http://localhost:5000/blogs`)
            const data = res.json()
            setIsLoading(false)
            return data;
        }
    })

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
                        blog: itemDes,
                        date: new Date().toString(),

                    }

                    fetch(`http://localhost:5000/uploadBlog`, {
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

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/deleteBlog/${id}`, {
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
                refetch(`http://localhost:5000/blogs`)
            })
    }


    return (
        <div className='py-20 bg-sky-100'>
            <div className="text-center">
                <h3 className="text-green-500 font-semibold mb-3">Latest News</h3>

                <p className="text-5xl font-bold mb-10">Our Blogs</p>
            </div>
            <div className='flex justify-end lg:px-12 md:px-10 px-4 py-2'>
                <button className='btn btn-outline btn-secondary px-12' onClick={() => document.getElementById('my_modal_blog').showModal()}>{isUploadLoading ? <Spinner></Spinner> : 'ADD BLOGS'}</button>

            </div>
            <div className="lg:px-8 md:px-3 px-5">

                <div>
                    {
                        isLoading ? <Loading></Loading> : <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                            {
                                blogData?.slice(0, 3).map((data, i) => <div key={i} className="card  bg-base-100 shadow-xl mr-2">

                                    <figure> <Fade duration={1500} direction="down"><img src={data?.picture} alt="Shoes" className="w-[100vw] h-72 zoom" /></Fade></figure>

                                    <div className="card-body">
                                        <h2 className="card-title text-slate-500">{data?.date.slice(8, 10)} {data?.date.slice(4, 7)} {data?.date.slice(11, 16)}</h2>
                                        <h2 className="card-title uppercase">{data?.name}</h2>
                                        <p className="text-justify">{data?.blog.slice(0, 250)}...<Link className="text-blue-600" to={`/blogDetails/${data?._id}`} state={{ from: data }}>see more</Link></p>
                                        <div className='flex justify-end'>
                                            <button className="tooltip  tooltip-secondary" data-tip={`Delete ${data?.name}`} onClick={() => handleDelete(data?._id)}><MdDeleteOutline className="text-2xl text-error"></MdDeleteOutline></button>
                                        </div>

                                    </div>
                                </div>)
                            }
                        </div>


                    }


                </div>

                {blogData?.length > 0 && <div className='flex justify-center py-6'>
                    <Link to='/blog' >
                        <button className='btn  btn-primary px-12'>See All Blog</button>
                    </Link>
                </div>}
            </div>
            <dialog id="my_modal_blog" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="" method="dialog" className='py-4'>
                        {/* if there is a button in form, it will close the modal */}


                        <h3 className='text-center font-bold'>Write Your Blog</h3>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Blog Title</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setItemName(e.target.value)} required />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Blog Photo</span>

                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-secondary w-full " onChange={(e) => setPhoto(e.target.files[0])} required />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Blog Details</span>

                            </label>
                            <textarea type="text" className="textarea textarea-secondary lg:h-44" placeholder="Bio" onChange={(e) => setItemDes(e.target.value)} required ></textarea>
                            {/* <input /> */}

                        </div>





                        <div className="form-control w-full mt-5">

                            <input type="submit" value='Submit' className="btn btn-secondary w-full " onClick={handleData} />

                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default OurBlog;