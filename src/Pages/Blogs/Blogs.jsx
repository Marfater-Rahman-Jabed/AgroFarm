import blog1 from '../../assets/blog3.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog1.jpg'
import bgAbout from '../../assets/lastAbout.png'
import { useEffect } from 'react';
const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className='py-36' style={{ backgroundImage: `url(${bgAbout})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h3 className='text-7xl text-center text-white font-bold'> Our Blogs</h3>
            </div>
            <div className="card mx-3  bg-base-100 shadow-xl">
                <span className='lg:px-28 md:px-10 py-12'>
                    <h3 className='font-semibold'>15 August 2023</h3>
                    <h2 className="text-4xl font-bold">Can a Smoothie Supercharge Days Future ?</h2>
                </span>
                <figure><img src={blog1} alt="Shoes" className="lg:w-[70vw] md:w-[75vw] lg:h-[70vh] md:h-[40vh]" /></figure>
                <div className="card-body">

                    <p className='text-justify lg:px-28 md:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ab iure sit quo, quis culpa iste dolorum natus magnam quos commodi officiis, illo maiores inventore voluptates enim laudantium qui minus soluta harum atque? Nobis velit qui beatae natus consequatur quo pariatur voluptates illum possimus est amet, veniam dignissimos mollitia ab eos nulla officiis perferendis! Vero quas molestiae sint soluta, voluptates assumenda facere ut dolorem rem accusamus aliquid! Beatae accusamus sint commodi libero, nihil veritatis architecto vel quidem nulla illum et officiis non necessitatibus nesciunt tempora odit voluptatem. Nostrum ut velit, fugiat veritatis cumque laborum corporis voluptas reprehenderit nisi excepturi saepe? Optio, quis in illum esse quidem unde fuga. Mollitia corporis officiis dolor voluptas cumque ab corrupti id nemo maxime? Est esse ex ab at beatae animi sed tenetur obcaecati alias ratione! Modi rerum, saepe quisquam neque maiores tenetur laboriosam velit nobis eius? Tenetur eaque rerum unde maxime minima deserunt! Veniam voluptatum dolores molestiae maiores nam pariatur a, rerum dolore, consectetur nesciunt, dolorem iste incidunt. Necessitatibus vel illum laboriosam quidem animi odio quam quo aspernatur fugit! Quos molestiae ea quasi, id iure quaerat praesentium voluptas corrupti libero sit accusamus fugiat veniam molestias atque adipisci laborum nobis perferendis eius alias quam delectus, rem illo? Quia praesentium adipisci, tenetur maxime ab officia vero saepe sint perferendis expedita sequi nesciunt, voluptates fugit labore molestiae, fuga velit culpa voluptatum. Aperiam consectetur rerum adipisci quam, asperiores iste accusamus placeat eveniet ipsam voluptatibus modi illo tempore assumenda esse quisquam mollitia quia, laudantium obcaecati, corporis nemo? Eligendi maiores quos, perferendis ullam nam, minus libero exercitationem quidem similique amet assumenda earum repellendus officiis. Optio esse maxime est. Eaque tempora dolorem veniam quas aliquid minima accusantium fugit, iure modi labore possimus, voluptatibus consequuntur similique nostrum incidunt vel fugiat quia ab, provident delectus error? Voluptas tempore doloribus, dicta iusto, odio ipsa nulla pariatur incidunt numquam id a totam magnam laudantium porro exercitationem non temporibus voluptatem odit dolorum cum! In cumque saepe et voluptatem nesciunt quaerat quae ea. Blanditiis, officia dolorem ad rerum iusto rem eveniet quas excepturi dolore, beatae molestiae repudiandae? Rerum, ducimus porro. Amet facere corrupti consectetur voluptatem cum dolorem nemo, doloremque ab aliquid, maxime, nobis deleniti. Error nihil soluta ad culpa, quae odit totam dicta accusantium dolor quaerat blanditiis numquam saepe impedit officiis tempore voluptatibus, minima fuga tempora. Tenetur dolorum sapiente eligendi fugit quos libero recusandae eius adipisci tempora, ipsum ratione ut qui? Est odit odio quasi explicabo fuga!</p>

                </div>
            </div>
            <div className="divider py-10"></div>
            <div className="card mx-3  bg-base-100 shadow-xl">
                <span className='lg:px-28 md:px-10 py-12'>
                    <h3 className='font-semibold'>12 October 2023</h3>
                    <h2 className="text-4xl font-bold">How to make your breakfast easy and yummy</h2>
                </span>
                <figure><img src={blog2} alt="Shoes" className="lg:w-[70vw] md:w-[75vw] lg:h-[70vh] md:h-[40vh]" /></figure>
                <div className="card-body">

                    <p className='text-justify lg:px-28 md:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ab iure sit quo, quis culpa iste dolorum natus magnam quos commodi officiis, illo maiores inventore voluptates enim laudantium qui minus soluta harum atque? Nobis velit qui beatae natus consequatur quo pariatur voluptates illum possimus est amet, veniam dignissimos mollitia ab eos nulla officiis perferendis! Vero quas molestiae sint soluta, voluptates assumenda facere ut dolorem rem accusamus aliquid! Beatae accusamus sint commodi libero, nihil veritatis architecto vel quidem nulla illum et officiis non necessitatibus nesciunt tempora odit voluptatem. Nostrum ut velit, fugiat veritatis cumque laborum corporis voluptas reprehenderit nisi excepturi saepe? Optio, quis in illum esse quidem unde fuga. Mollitia corporis officiis dolor voluptas cumque ab corrupti id nemo maxime? Est esse ex ab at beatae animi sed tenetur obcaecati alias ratione! Modi rerum, saepe quisquam neque maiores tenetur laboriosam velit nobis eius? Tenetur eaque rerum unde maxime minima deserunt! Veniam voluptatum dolores molestiae maiores nam pariatur a, rerum dolore, consectetur nesciunt, dolorem iste incidunt. Necessitatibus vel illum laboriosam quidem animi odio quam quo aspernatur fugit! Quos molestiae ea quasi, id iure quaerat praesentium voluptas corrupti libero sit accusamus fugiat veniam molestias atque adipisci laborum nobis perferendis eius alias quam delectus, rem illo? Quia praesentium adipisci, tenetur maxime ab officia vero saepe sint perferendis expedita sequi nesciunt, voluptates fugit labore molestiae, fuga velit culpa voluptatum. Aperiam consectetur rerum adipisci quam, asperiores iste accusamus placeat eveniet ipsam voluptatibus modi illo tempore assumenda esse quisquam mollitia quia, laudantium obcaecati, corporis nemo? Eligendi maiores quos, perferendis ullam nam, minus libero exercitationem quidem similique amet assumenda earum repellendus officiis. Optio esse maxime est. Eaque tempora dolorem veniam quas aliquid minima accusantium fugit, iure modi labore possimus, voluptatibus consequuntur similique nostrum incidunt vel fugiat quia ab, provident delectus error? Voluptas tempore doloribus, dicta iusto, odio ipsa nulla pariatur incidunt numquam id a totam magnam laudantium porro exercitationem non temporibus voluptatem odit dolorum cum! In cumque saepe et voluptatem nesciunt quaerat quae ea. Blanditiis, officia dolorem ad rerum iusto rem eveniet quas excepturi dolore, beatae molestiae repudiandae? Rerum, ducimus porro. Amet facere corrupti consectetur voluptatem cum dolorem nemo, doloremque ab aliquid, maxime, nobis deleniti. Error nihil soluta ad culpa, quae odit totam dicta accusantium dolor quaerat blanditiis numquam saepe impedit officiis tempore voluptatibus, minima fuga tempora. Tenetur dolorum sapiente eligendi fugit quos libero recusandae eius adipisci tempora, ipsum ratione ut qui? Est odit odio quasi explicabo fuga!</p>

                </div>
            </div>
            <div className="divider py-10"></div>
            <div className="card mx-3  bg-base-100 shadow-xl">
                <span className='lg:px-28 md:px-10 py-12'>
                    <h3 className='font-semibold'>17 July 2023</h3>
                    <h2 className="text-4xl font-bold">Tips from our team: Making Younghurt and fruits</h2>
                </span>
                <figure><img src={blog3} alt="Shoes" className="lg:w-[70vw] md:w-[75vw] lg:h-[70vh] md:h-[40vh]" /></figure>
                <div className="card-body">

                    <p className='text-justify lg:px-28 md:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ab iure sit quo, quis culpa iste dolorum natus magnam quos commodi officiis, illo maiores inventore voluptates enim laudantium qui minus soluta harum atque? Nobis velit qui beatae natus consequatur quo pariatur voluptates illum possimus est amet, veniam dignissimos mollitia ab eos nulla officiis perferendis! Vero quas molestiae sint soluta, voluptates assumenda facere ut dolorem rem accusamus aliquid! Beatae accusamus sint commodi libero, nihil veritatis architecto vel quidem nulla illum et officiis non necessitatibus nesciunt tempora odit voluptatem. Nostrum ut velit, fugiat veritatis cumque laborum corporis voluptas reprehenderit nisi excepturi saepe? Optio, quis in illum esse quidem unde fuga. Mollitia corporis officiis dolor voluptas cumque ab corrupti id nemo maxime? Est esse ex ab at beatae animi sed tenetur obcaecati alias ratione! Modi rerum, saepe quisquam neque maiores tenetur laboriosam velit nobis eius? Tenetur eaque rerum unde maxime minima deserunt! Veniam voluptatum dolores molestiae maiores nam pariatur a, rerum dolore, consectetur nesciunt, dolorem iste incidunt. Necessitatibus vel illum laboriosam quidem animi odio quam quo aspernatur fugit! Quos molestiae ea quasi, id iure quaerat praesentium voluptas corrupti libero sit accusamus fugiat veniam molestias atque adipisci laborum nobis perferendis eius alias quam delectus, rem illo? Quia praesentium adipisci, tenetur maxime ab officia vero saepe sint perferendis expedita sequi nesciunt, voluptates fugit labore molestiae, fuga velit culpa voluptatum. Aperiam consectetur rerum adipisci quam, asperiores iste accusamus placeat eveniet ipsam voluptatibus modi illo tempore assumenda esse quisquam mollitia quia, laudantium obcaecati, corporis nemo? Eligendi maiores quos, perferendis ullam nam, minus libero exercitationem quidem similique amet assumenda earum repellendus officiis. Optio esse maxime est. Eaque tempora dolorem veniam quas aliquid minima accusantium fugit, iure modi labore possimus, voluptatibus consequuntur similique nostrum incidunt vel fugiat quia ab, provident delectus error? Voluptas tempore doloribus, dicta iusto, odio ipsa nulla pariatur incidunt numquam id a totam magnam laudantium porro exercitationem non temporibus voluptatem odit dolorum cum! In cumque saepe et voluptatem nesciunt quaerat quae ea. Blanditiis, officia dolorem ad rerum iusto rem eveniet quas excepturi dolore, beatae molestiae repudiandae? Rerum, ducimus porro. Amet facere corrupti consectetur voluptatem cum dolorem nemo, doloremque ab aliquid, maxime, nobis deleniti. Error nihil soluta ad culpa, quae odit totam dicta accusantium dolor quaerat blanditiis numquam saepe impedit officiis tempore voluptatibus, minima fuga tempora. Tenetur dolorum sapiente eligendi fugit quos libero recusandae eius adipisci tempora, ipsum ratione ut qui? Est odit odio quasi explicabo fuga!</p>

                </div>
            </div>
            <div className="divider py-10"></div>

        </div>
    );
};

export default Blogs;