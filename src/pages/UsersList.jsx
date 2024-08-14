import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UsersList = () => {
    const userLoadedList = useLoaderData();
    const [userList,setUserList]=useState(userLoadedList);

    console.log(userList);

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
                
            
            fetch(`http://localhost:3000/spot/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const remaining=userList.filter(list=>list._id !== id);
                      setUserList(remaining);
                }
            })
            }
          });

    }
    return (

        <div>
            <div className="mb-20 p-20">
                <h2 className="font-serif text-4xl items-center ml-96 mb-6"> Please see User Lists</h2>
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
                                userList.map(list => <tr key={list._id}>
                                    <th>1</th>
                                    <td>{list.tourists_spot_name}</td>
                                    <td>{list.country_Name}</td>
                                    <td>{list.location}</td>
                                    <td>
                                        <div className="flex gap-4">
                                            <button>Edit</button>
                                            <button onClick={() => handleDelete(list._id)}>X</button>
                                        </div>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default UsersList;