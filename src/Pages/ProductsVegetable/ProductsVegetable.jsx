import { useQuery } from "react-query";
import '../../Component/OurProducts/OurProduct.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import bgAbout from '../../assets/lastAbout.png'
import { toast } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";


const Products = () => {
    const UrlId = window.location.pathname.split('/')[2];
    console.log(UrlId)
    const imageKey = import.meta.env.VITE_imagekey;
    const [itemName, setItemName] = useState('')
    const [itemDes, setItemDes] = useState('')
    const [price, setPrice] = useState('')
    const [photo, setPhoto] = useState('')
    // const myData = useLoaderData()
    const { data: myData = [], refetch } = useQuery({
        queryKey: ['Datas'],
        queryFn: async () => {
            // setIsLoading(true)
            const res = await fetch(`http://localhost:5000/products`)
            const data = res.json()
            // setIsLoading(false)
            return data;
        }
    })

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/deleteProducts/${id}`, {
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
                refetch(`http://localhost:5000/products`)
            })
    }



    const handleData = () => {
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

                    fetch(`http://localhost:5000/uploadVegetableProduct`, {
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

                            refetch()
                        })
                }
            })
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <div className="">
            {
                <>
                    <div className='py-24' style={{ backgroundImage: `url(${bgAbout})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <h3 className='text-7xl text-center text-white font-bold'>Our Vegetable  Items</h3>
                    </div>
                    <div className='flex justify-end lg:px-20 md:px-10 px-4 py-2'>
                        <button className='btn btn-outline btn-secondary px-12' onClick={() => document.getElementById('my_modal_3').showModal()}>ADD ITEMS</button>

                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-20 px-6 py-10">
                        {
                            myData?.map((product, i) => <div key={i} className="card lg:w-96 bg-slate-300 shadow-xl">
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        <ReactWhatsapp number="+8801827717200" className=" animate-bounce hover:animate-none" message={`Hi Agro Farm Ltd. I want to deal with you about ${product?.name} item`} title={`Contact For Order ${product?.name}`}><BsWhatsapp className=' mx-auto text-3xl text-green-700' ></BsWhatsapp> </ReactWhatsapp>
                                        <button className='' title={`Delete ${product?.name}`} onClick={() => handleDelete(product?._id)}><MdDeleteOutline className="text-4xl text-error"></MdDeleteOutline></button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </>
            }

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form action="" method="dialog" className='py-4'>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className='text-center font-bold'>Enter Item Details</h3>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Item Name</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setItemName(e.target.value)} />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Item Description</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full " onChange={(e) => setItemDes(e.target.value)} />

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Price</span>

                                </label>
                                <input type="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setPrice(e.target.value)} />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Picture</span>

                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" onChange={(e) => setPhoto(e.target.files[0])} />

                            </div>
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

export default Products;