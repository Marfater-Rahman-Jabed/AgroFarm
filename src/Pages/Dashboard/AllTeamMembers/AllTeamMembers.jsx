import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "react-query";
import Loading from "../../../Component/Loading/Loading";
import { toast } from "react-toastify";

const AllTeamMembers = () => {
    const [loading, setLoading] = useState(false)
    const [searchData, setSearchData] = useState('')
    console.log(searchData)
    const { data: allTeamMemberData = [], refetch } = useQuery({
        queryKey: ['Datas'],
        queryFn: async () => {
            setLoading(true)
            const res = await fetch(`http://localhost:5000/Members`)
            const data = res.json()
            setLoading(false)
            return data;
        }
    })

    console.log(allTeamMemberData)
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/deleteMembers/${id}`, {
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
    return (
        <div>
            <div className="overflow-x-auto ">
                <div className=" px-4 py-4 ">
                    {/* <p className="text-3xl font-bold text-center">All User</p> */}
                    <div className="flex justify-end gap-10">
                        <p className="text-3xl font-bold text-center">All Team Members</p>
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
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Post</th>
                            <th>WhatsApp Number</th>

                            <th>Position</th>
                            <th>Delete Member</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTeamMemberData?.filter(data => (((data?.whatsApp.slice(0, searchData.length) === searchData) || (data.name.toUpperCase().slice(0, searchData.length) === searchData.toUpperCase().toString()) || (data.title.toUpperCase().slice(0, searchData.length) === searchData.toUpperCase())))).map((user, i) => <tr key={i} className="hover">
                                <th>{i + 1}</th>
                                <td><img src={user?.picture} alt="" className="w-10 h-10 rounded-full avatar" /></td>
                                <td>{user?.name?.toUpperCase()}</td>

                                <td>{user?.title}</td>
                                <td>{user?.whatsApp}</td>

                                <td>{user?.role === 'admin' ? <p className="text-green-600 text-center font-semibold">Admin</p> : <p className="text-blue-600  font-semibold">General Member</p>}</td>
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

export default AllTeamMembers;