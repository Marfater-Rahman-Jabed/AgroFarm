

import { Link } from 'react-router-dom';
import bgAbout from '../../assets/lastAbout.png'
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../../Component/Loading/Loading';

const Blogs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [isLoading, setIsLoading] = useState(false)
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
        <div>
            <div className='py-36' style={{ backgroundImage: `url(${bgAbout})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h3 className='text-7xl text-center text-white font-bold'> Our All Blogs</h3>
            </div>

            <div className='py-10 lg:px-16 px-4'>
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

        </div>
    );
};

export default Blogs;