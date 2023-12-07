import { useQuery } from "react-query";
import '../../Component/OurProducts/OurProduct.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect, useState } from 'react';
import bgAbout from '../../assets/lastAbout.png'
import { toast } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import Loading from "../../Component/Loading/Loading";
import Spinner from "../../Component/Spinner/Spinner";
import '../../Component/About/About.css'
import useAdmin from "../../Hooks/useAdmin";
import { AuthContexts } from "../../Contexts/Contexts";
const ProductsFruit = () => {
    const { user } = useContext(AuthContexts)
    const [Admin] = useAdmin(user?.email)
    const imageKey = import.meta.env.VITE_imagekey;
    const [itemName, setItemName] = useState('')
    const [itemDes, setItemDes] = useState('')
    const [price, setPrice] = useState('')
    const [photo, setPhoto] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isUploadLoading, setIsUploadLoading] = useState(false)
    const { data: fruitData = [], refetch } = useQuery({
        queryKey: ['fruitDatas'],
        queryFn: async () => {
            setIsLoading(true)
            const res = await fetch(`http://localhost:5000/productsFruit`)
            const data = res.json()
            setIsLoading(false)
            return data;
        }
    })

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/deleteFruitProducts/${id}`, {
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
                refetch(`http://localhost:5000/productsFruit`)
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
                        Des: itemDes,
                        price: price

                    }

                    fetch(`http://localhost:5000/uploadFruitProduct`, {
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




    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="">

                <div>
                    <div className='py-24' style={{ backgroundImage: `url(${bgAbout})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <h3 className='text-7xl text-center text-white font-bold'>Our Fruits & Nuts  Items</h3>
                    </div>
                    {Admin && <div className='flex justify-end lg:px-20 md:px-10 px-4 py-2'>
                        <button className='btns btn1 border-2 border-solid border-orange-600 px-12 font-bold hover:text-white rounded-lg' onClick={() => document.getElementById('my_modal_Fruit').showModal()}>{isUploadLoading ? <Spinner></Spinner> : 'ADD ITEMS'}</button>

                    </div>}
                    {isLoading ? <Loading></Loading> :
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-20 px-6 py-10">
                            {
                                fruitData?.map((product, i) => <Fade key={i} direction="left" duration={2000}>
                                    <div className="card lg:w-96 bg-slate-300 shadow-xl">
                                        <figure>
                                            <PhotoProvider>
                                                <PhotoView src={product?.picture}>
                                                    <img src={product?.picture} alt="Shoes" className="w-full h-60 zoom cursor-pointer" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-center text-3xl font-bold">{product?.name}</h2>
                                            <p className="text-xl font-bold">Price: $ {product?.price} / kg</p>
                                            <div className=" flex justify-between gap-3">
                                                <p>{product?.Des ? product?.Des : `Lorem ipsum dolor sit amet consectetur adipisicing elit.`} </p>
                                                <ReactWhatsapp number="+8801827717200" className=" animate-pulse hover:animate-none tooltip tooltip-secondary" message={`Hi Agro Farm Ltd. I want to deal with you about ${product?.name} item`} data-tip={`Contact for Order ${product?.name}`}><BsWhatsapp className=' mx-auto text-3xl text-green-700' ></BsWhatsapp> </ReactWhatsapp>
                                                {Admin && <button className="tooltip  tooltip-secondary" data-tip={`Delete ${product?.name}`} onClick={() => handleDelete(product?._id)}><MdDeleteOutline className="text-4xl text-error"></MdDeleteOutline></button>}

                                            </div>
                                        </div>
                                    </div>
                                </Fade>)
                            }
                        </div>
                    }
                </div>



                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_Fruit" className="modal">
                    <div className="modal-box">
                        <form action="" method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form action="" method="dialog" className='py-4'>
                            {/* if there is a button in form, it will close the modal */}


                            <h3 className='text-center font-bold'>Enter Item Details</h3>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Item Name</span>

                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setItemName(e.target.value)} required />

                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Item Description</span>

                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setItemDes(e.target.value)} required />

                            </div>
                            <div className='flex justify-center gap-2'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Price</span>

                                    </label>
                                    <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setPrice(e.target.value)} required />

                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Picture</span>

                                    </label>
                                    <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" onChange={(e) => setPhoto(e.target.files[0])} required />

                                </div>
                            </div>

                            <div className="form-control w-full mt-5">

                                <input type="submit" value='Submit' className="btn btn-secondary w-full " onClick={handleData} />

                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default ProductsFruit;