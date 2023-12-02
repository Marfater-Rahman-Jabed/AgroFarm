import cardItem3 from '../../assets/fruit.png'
import cardItem2 from '../../assets/gom.png'
import cardItem1 from '../../assets/vegetable.png'
import cardItem4 from '../../assets/tobacco.png'
import './OurProduct.css'
const OurProducts = () => {
    return (
        <div className='py-20'>
            <div className="text-center">
                <h3 className="text-green-500 font-semibold mb-3">What we offer</h3>

                <p className="text-5xl font-bold mb-10">Our Products</p>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-between gap-8 lg:px-20 md:px-10 px-4 pt-10'>
                <div className='py-8 bg-slate-200 hover:bg-slate-100 zoom'>
                    <div className='flex justify-center'><img src={cardItem1} alt="" className=' mb-4 rounded-full' /></div>
                    <h3 className='text-center text-2xl font-semibold py-3'>VEGETABLE</h3>
                </div>
                <div className='py-8 bg-slate-200 hover:bg-slate-100 zoom'>
                    <div className='flex justify-center'><img src={cardItem2} alt="" className=' mb-4 rounded-full' /></div>
                    <h3 className='text-center text-2xl font-semibold  py-3'>GRAIN & OILSEED</h3>
                </div>
                <div className='py-8  bg-slate-200 hover:bg-slate-100 zoom'>
                    <div className='flex justify-center'><img src={cardItem3} alt="" className=' mb-4 rounded-full' /></div>
                    <h3 className='text-center text-2xl font-semibold  py-3'>FRUITS & NUTS</h3>
                </div>
                <div className='py-8 bg-slate-200 hover:bg-slate-100 zoom'>
                    <div className='flex justify-center'><img src={cardItem4} alt="" className=' mb-4 rounded-full' /></div>
                    <h3 className='text-center text-2xl font-semibold  py-3'>TOBACCO</h3>
                </div>

            </div>
        </div>
    );
};

export default OurProducts;