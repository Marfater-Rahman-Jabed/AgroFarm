import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Component/Loading/Loading";

const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const [searchData, setSearchData] = useState('')
    const { data: userData = [] } = useQuery({
        queryKey: ['UserDatasVeg'],
        queryFn: async () => {
            setLoading(true)
            const res = await fetch(`http://localhost:5000/alluser`)
            const data = res.json()
            setLoading(false)
            return data;
        }
    })

    const handleDelete = (id) => {
        console.log(id)
    }

    console.log(userData)
    return (
        <div>
            <div className="overflow-x-auto ">
                <div className=" px-4 py-4 ">
                    {/* <p className="text-3xl font-bold text-center">All User</p> */}
                    <div className="flex justify-end ">

                        <input type="text" placeholder="Search " className="input input-bordered input-secondary w-72  " onChange={(e) => setSearchData(e.target.value)} />
                    </div>
                </div>
                {loading ? <Loading></Loading> : <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr className="bg-purple-700 text-white">
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>phone</th>
                            <th>Address</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.filter(data => ((data.email.slice(0, searchData.length) === searchData) || (data.phone.slice(0, searchData.length) === searchData) || (data.userName.toUpperCase().slice(0, searchData.length) === searchData.toUpperCase().toString()) || (data.address.toUpperCase().slice(0, searchData.length) === searchData.toUpperCase()))).map((user, i) => <tr key={i} className="hover">
                                <th>{i + 1}</th>
                                <td>{user?.userName.toUpperCase()}</td>
                                <td>{user?.email}</td>
                                <td>{user?.phone}</td>
                                <td>{user?.address}</td>
                                <td>{user?.role === 'admin' ? <p className="text-green-600 text-center font-semibold">Admin</p> : <button className="btn btn-xs btn-warning">Make Admin</button>}</td>
                                <td> {user?.email === 'marfaterrahman@gmail.com' ? <p className="text-green-600 text-center font-semibold">Owner</p> : <button className="btn btn-xs btn-error" onClick={() => handleDelete(user?._id)}>Delete User</button>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>}

            </div>
        </div>
    );
};

export default Dashboard;