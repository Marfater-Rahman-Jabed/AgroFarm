import { Link, Outlet } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import './DashboardLayout.css'

const DashboardLayout = () => {
    // const { user } = useContext(AuthContexts);
    // const [Admin] = useAdmin(user?.email)
    return (
        <div className="">
            <NavBar></NavBar>

            <div className="drawer drawer-mobile lg:drawer-open md:drawer-open">
                <input id="Dashbord-drawer" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content flex flex-col ">

                    <Outlet></Outlet>

                </div>
                {/* className='hover:bg-Blue-700' */}
                <div className="drawer-side ">
                    <label htmlFor="Dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-60 md:w-40  h-full bg-base-200 text-base-content lg:mt-0 md:mt-0 mt-0 ">
                        <li className="text-2xl font-bold mb-2 text-fuchsia-700  mt-4 text-center">Select Option</li>
                        <li className=" mt-8 font-serif  text-xl"><Link to='/dashboard'>All Admin Panel</Link></li>
                        <li className="  font-serif text-xl"><Link to='/dashboard/allteammember'>All Team Member</Link></li>

                        <li className="  font-serif text-xl"><Link to='/dashboard/allregisteruser'>All Register User</Link></li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;