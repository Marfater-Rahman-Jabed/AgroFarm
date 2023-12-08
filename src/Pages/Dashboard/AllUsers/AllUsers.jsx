import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Component/Loading/Loading";
import { CiSearch } from "react-icons/ci";
import { toast } from "react-toastify";

const AllUsers = () => {
    const [loading, setLoading] = useState(false)
    const [searchData, setSearchData] = useState('')
    const { data: userData = [], refetch } = useQuery({
        queryKey: ['UserDatasVeg'],
        queryFn: async () => {
            setLoading(true)
            const res = await fetch(`http://localhost:5000/alluser`)
            const data = res.json()
            setLoading(false)
            return data;
        }
    })

    const handleAdmin = (id) => {
        fetch(`http://localhost:5000/alluser/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Successfully Make Admin`, {
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

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/deleteUsers/${id}`, {
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
                refetch(`http://localhost:5000/Members`)
            })
    }

    console.log(userData)
    return (
        <div>
            <div className="overflow-x-auto ">
                <div className=" px-4 py-4 ">

                    <div className="flex justify-end gap-10">
                        <p className="text-3xl font-bold text-center">All Register User</p>
                        <div className="flex justify-center">
                            <input type="text" placeholder="Search " className="input input-bordered input-secondary w-96 rounded-3xl " onChange={(e) => setSearchData(e.target.value)} />
                            <CiSearch className="text-5xl -ps-4 text-secondary"></CiSearch>
                        </div>
                    </div>
                </div>
                {loading ? <Loading></Loading> : <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr className="bg-purple-700 text-white">
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.filter(data => (((data.email.slice(0, searchData.length) === searchData) || (data.phone.slice(0, searchData.length) === searchData) || (data.userName.toUpperCase().slice(0, searchData.length) === searchData.toUpperCase().toString()) || (data.address.toUpperCase().slice(0, searchData.length) === searchData.toUpperCase())))).map((user, i) => <tr key={i} className="hover">
                                <th>{i + 1}</th>
                                <td>{user?.userName.toUpperCase()}</td>
                                <td>{user?.email}</td>
                                <td>{user?.phone}</td>
                                <td>{user?.address}</td>
                                <td>{user?.role === 'admin' ? <p className="text-green-600 text-center font-semibold">Admin</p> : <button className="btn btn-xs btn-warning" onClick={() => handleAdmin(user?._id)}>Make Admin</button>}</td>
                                <td> {user?.email === 'marfaterrahman@gmail.com' ? <p className="text-green-600 text-center font-semibold">Owner</p> : <div>
                                    {user?.role === 'admin' ? <p className="text-green-600 text-center font-semibold">Admin</p> : <button className="btn btn-xs btn-error" onClick={() => handleDelete(user?._id)}>Delete User</button>}
                                </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>}

            </div>
        </div>
    );
};

export default AllUsers;