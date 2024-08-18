import { useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";

const UpdateSpot = () => {

const [spot,setSpot]=useState({});
const {id}=useParams();
console.log(id);

useEffect(()=>{
    fetch(`http://localhost:3000/singleTourist/${id}`)
   .then(res=>res.json())
   .then(data=>{
    setSpot(data);
    console.log(data);
   })
},[id]);
   

   
    const { country_Name, tourists_spot_name, location, total_Visitors_PerYear, seasonality, travel_time, average_cost, image, short_description } = spot;

    const handleUpdateSpots = event => {
        event.preventDefault();
        const form = event.target;
        const country_Name = form.country_Name.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const location = form.location.value;
        const total_Visitors_PerYear = form.totalVisitorsPerYear.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const average_cost = form.average_cost.value;
        const image = form.image.value;
        const short_description = form.short_description.value;
        const UpdateSpotsInfo = {  country_Name, tourists_spot_name, location, total_Visitors_PerYear, seasonality, travel_time, average_cost, image, short_description };

        console.log(UpdateSpotsInfo);

        fetch(`http://localhost:3000/updateSpot/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateSpotsInfo)

        })
        .then(res => res.json())
        .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: "Success!",
                        text: "Tourist Spot Updated successfully.",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className="bg-lime-500 p-24">

            <h2 className="text-5xl mb-4 font-serif ml-56 ">Please Fill Up Tourists Spots Form</h2>

            <form onSubmit={handleUpdateSpots} className="" >
                {/* country_Name,Tourists_spot_name,location*/}
                <div className="grid px-72 py-4">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text"> Country_Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country_Name" defaultValue={country_Name} placeholder=" Country_Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Tourists_spot_name</span>
                        </label>
                        <label className="input-group">
                  <input type="text" name="tourists_spot_name" defaultValue={tourists_spot_name} placeholder=" Tourists_spot_name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year </span>
                        </label>
                        <label className="input-group">
                          <input type="text" name="totalVisitorsPerYear" defaultValue={total_Visitors_PerYear} placeholder="Total Visitors Per Year" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control  w-full">
                        <label className="label">
                            <span className="label-text"> Seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Travel_time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travel_time" defaultValue={travel_time} placeholder="Travel_time" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Average_cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="average_cost" defaultValue={average_cost} placeholder="Average_cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-ful">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image} placeholder="Image" className="input input-bordered w-full " />
                        </label>
                    </div>

                    <div className="mt-6">
                        <textarea name="short_description" defaultValue={short_description} className="p-3 rounded-lg" placeholder="Short_description" id="" cols="50" rows="6"></textarea>
                    </div>

                    <input type="submit" value="Update Tourist Spot" className="w-full btn btn-info text-2xl font-bold text-white mt-6" />

                </div>

            </form>
        </div>
    );
};

export default UpdateSpot;