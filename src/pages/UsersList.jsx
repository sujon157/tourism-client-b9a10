import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UsersList = () => {
    const userLoadedList = useLoaderData();
    const [userList, setUserList] = useState(userLoadedList);

    const handleDelete = id => {
        console.log('delete', id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://tourism-server-b9a10.vercel.app/spot/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = userList.filter(list => list._id !== id);
                            setUserList(remaining);
                        }
                    })
            }
        });

    }
    return (

        <div>
            <div className="mb-6 p-20 bg-slate-200 ">
                <Fade direction="up">
                    <h2 className="font-serif text-4xl  text-center mt-14"> Please see User Lists</h2>
                </Fade>

                <Fade direction="down">
                    <p className="text-center">
                        You can edit and delete your users list here and click on them below to select
                    </p>
                </Fade>

                <div className="overflow-x-auto mt-10">
                    <table className="table ">
                        {/* head */}

                        < thead className="bg-slate-800 text-white font-bold">
                            <tr>

                                <th>ID</th>
                                <th>TOURISTS_SPOTS_NAME</th>
                                <th>COUNTRY</th>
                                <th>LOCATION</th>
                                <th>ACTION</th>

                            </tr>
                        </thead>

                        <tbody>
                            {/* row 1 */}
                            {
                                userList.map(list => <tr key={list._id} className="text-red-500">
                                    <Fade direction="left">
                                        <th>{list._id}</th>
                                    </Fade>
                                    <td>{list.tourists_spot_name}</td>
                                    <td>{list.country_Name}</td>
                                    <td>{list.location}</td>
                                    <Fade direction="right">
                                        <td>
                                            <div className="flex gap-4">
                                                <Link to={`/updateSpot/${list._id}`}>
                                                    <button>Edit</button>
                                                </Link>
                                                <button onClick={() => handleDelete(list._id)}>X</button>
                                            </div>
                                        </td>
                                    </Fade>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    );
};

export default UsersList;