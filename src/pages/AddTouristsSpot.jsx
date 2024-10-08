import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";



const AddTouristsSpot = () => {


    const handleAddSpots = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const country_Name = form.country_Name.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const location = form.location.value;
        const total_Visitors_PerYear = form.totalVisitorsPerYear.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const average_cost = form.average_cost.value;
        const image = form.image.value;
        const short_description = form.short_description.value;
        const spotsInfo = { name, email, country_Name, tourists_spot_name, location, total_Visitors_PerYear, seasonality, travel_time, average_cost, image, short_description };

        console.log(spotsInfo);

        fetch('https://tourism-server-b9a10.vercel.app/spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(spotsInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Tourists spot added successfully",
                        showConfirmButton: true

                    });

                }
            })
    }


    return (
        <div className=" p-36 bg-slate-200">




            <div className="text-center mt-2">
                <Fade delay={700} direction="left">
                    <h1 className="text-4xl font-bold text-center">Add Tourists Spot...........</h1>

                </Fade>
                <Fade delay={1200} direction="right">
                    <p className="text-gray-600 mt-2">........Please fill out the form below to add a new tourist spot.</p>

                </Fade>                <hr />
                <div className="line"></div>
                <Fade delay={1600} direction="up">
                    <p>Note: All fields are required.......</p>
                </Fade>
                <div className="line"></div>
            </div>




            <Fade delay={2200} direction="left">
                <form onSubmit={handleAddSpots} className=" mt-8 px-32" >
                    {/* name ,email, country_Name*/}
                    <div className=" md:flex mb-6">
                
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full " required />
                                </label>
                            </div>
                      
                       
                            <div className="form-control w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="email" placeholder="User Email" className="input input-bordered w-full" required />
                                </label>
                            </div>
                       
                        
                         
                     

                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text"> Country_Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country_Name" placeholder=" Country_Name" className="input input-bordered w-full" required />
                            </label>
                        </div>

                    </div>
                    {/* tourists_spot_name,location,Total Visitors Per Year */}
                    <div className=" md:flex mb-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text"> Tourists_spot_name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="tourists_spot_name" placeholder=" Tourists_spot_name" className="input input-bordered w-full " required />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
                            </label>
                        </div>

                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered w-full " required />
                            </label>
                        </div>


                    </div>
                    {/* seasonality,travel_time,average_cost */}
                    <div className=" md:flex mb-6">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text"> Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full " required />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Travel_time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="travel_time" placeholder="Travel_time" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Average_cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="average_cost" placeholder="Average_cost" className="input input-bordered w-full" required />
                            </label>
                        </div>

                    </div>
                    {/* image */}
                    <div className=" md:flex mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Image" className="input input-bordered w-full " required />
                            </label>
                        </div>

                    </div>
                    {/* short_description */}
                    <div className="mb-6">
                        <textarea name="short_description" className="p-3 rounded-lg" placeholder="Short_description" id="" cols="109" rows="8"></textarea>
                    </div>
                    <input type="submit" value="Add Tourists Spot" className="w-full btn btn-info text-2xl font-bold text-white" />

                </form>
            </Fade>
        </div>
    );
};

export default AddTouristsSpot;