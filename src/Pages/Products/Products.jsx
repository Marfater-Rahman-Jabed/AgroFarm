import { useQuery } from "react-query";
import '../../Component/OurProducts/OurProduct.css'
// import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";

const Products = () => {
    const UrlId = window.location.pathname.split('/')[2];
    console.log(UrlId)

    const { data: mydata = [] } = useQuery({
        queryKey: ['Datas'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${UrlId}`)
            const data = res.json()
            return data;
        }
    })

    console.log(mydata[0]?.products)
    return (
        <div className="bg-sky-200">
            <h3 className="text-4xl font-bold text-center py-10">Our {mydata[0]?.name} Items</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-24 py-10">
                {
                    mydata[0]?.products?.map((product, i) => <div key={i} className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src={product?.picture}>
                                    <img src={product?.picture} alt="Shoes" className="w-full h-60 zoom " />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-center text-3xl font-bold">{product?.name}</h2>
                            <p className="text-xl font-bold">Price: $ {product?.price} / kg</p>
                            <div className="card-actions justify-end">
                                <ReactWhatsapp number="+8801827717200" className=" animate-bounce hover:animate-none" message="Hi Agro Farm Ltd" title="Contact For Order"><BsWhatsapp className=' mx-auto text-3xl text-green-700' ></BsWhatsapp> </ReactWhatsapp>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default Products;