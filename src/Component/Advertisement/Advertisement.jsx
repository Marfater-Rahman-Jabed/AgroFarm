import add1 from '../../assets/add1.png'
import add2 from '../../assets/add2.png'
import add3 from '../../assets/add3.png'
import add4 from '../../assets/add4.png'
const Advertisement = () => {
    return (
        <div className='flex justify-between py-16 gap-16 px-20 bg-slate-100'>
            <div className='py-10'>
                <img src={add1} alt="" className='w-24' />
                <h3 className='font-bold text-2xl py-4'>Natural feed</h3>
                <p>We use the best feeds with essential nutrients to raise the best chickens and turkeys.</p>
            </div>
            <div className='py-10'>
                <img src={add2} alt="" className='w-24' />
                <h3 className='font-bold text-2xl py-4'>Own fields</h3>
                <p>We use our own farm fields for grazing hens and chickens to give them more fresh air and space.</p>
            </div>
            <div className='py-10'>
                <img src={add3} alt="" className='w-24' />
                <h3 className='font-bold text-2xl py-4'>Modern farm
                </h3>
                <p>Our farm uses the latest incubation and feeding technologies to raise the best poultry in the state.</p>
            </div>
            <div className='py-10'>
                <img src={add4} alt="" className='w-24' />
                <h3 className='font-bold text-2xl py-4'>100% Organic</h3>
                <p>We adhere to the organic philosophy, which implies the usage of natural feed for our chickens.</p>
            </div>

        </div>
    );
};

export default Advertisement;