import cardItem3 from '../../assets/fruit.png'
import cardItem2 from '../../assets/gom.png'
import cardItem1 from '../../assets/vegetable.png'
import cardItem4 from '../../assets/Fish5.png'
import './OurProduct.css'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
const OurProducts = () => {
    return (
        <div className='py-20'>
            <Fade duration={1500} direction='right'>
                <div className="text-center">
                    <h3 className="text-green-500 font-semibold mb-3">What we offer</h3>

                    <p className="text-5xl font-bold mb-10">Our Products</p>
                </div>
            </Fade>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-between gap-8 lg:px-20 md:px-10 px-4 pt-10'>
                <Fade duration={1500} direction='right'>
                    <Link to='/products/656ca66ed13b332e7a1ba24e'>
                        <div className='py-8 bg-slate-200 hover:bg-slate-100 zoom'>
                            <div className='flex justify-center'><img src={cardItem1} alt="" className=' mb-4 rounded-full' /></div>
                            <h3 className='text-center text-2xl font-semibold py-3'>VEGETABLE</h3>
                        </div>
                    </Link>
                </Fade>
                <Fade duration={1500} direction='right' delay={50}>
                    <Link to='/products/656ca66ed13b332e7a1ba24c'>
                        <div className='py-8 bg-slate-200 hover:bg-slate-100 zoom'>
                            <div className='flex justify-center'><img src={cardItem2} alt="" className=' mb-4 rounded-full' /></div>
                            <h3 className='text-center text-2xl font-semibold  py-3'>GRAIN & OILSEED</h3>
                        </div>
                    </Link>
                </Fade>
                <Fade duration={1500} direction='right' delay={100}>
                    <Link to='/products/656ca66ed13b332e7a1ba24d'>
                        <div className='py-8  bg-slate-200 hover:bg-slate-100 zoom'>
                            <div className='flex justify-center'><img src={cardItem3} alt="" className=' mb-4 rounded-full' /></div>
                            <h3 className='text-center text-2xl font-semibold  py-3'>FRUITS & NUTS</h3>
                        </div>
                    </Link>
                </Fade>
                <Fade duration={1500} direction='right' delay={150}>
                    <Link to='/products/656ca66ed13b332e7a1ba24b'>
                        <div className='py-8 bg-slate-200 hover:bg-slate-100 zoom'>
                            <div className='flex justify-center'><img src={cardItem4} alt="" className=' mb-4 rounded-full' /></div>
                            <h3 className='text-center text-2xl font-semibold  py-3'>FISH ITEM</h3>
                        </div>
                    </Link>
                </Fade>

            </div>
        </div>
    );
};

export default OurProducts;