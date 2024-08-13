import { useLoaderData, useParams } from "react-router-dom";

const ViewSpot = () => {
    const ViewSpot = useLoaderData();
    console.log(ViewSpot);

    const{_id}=useParams();
    console.log(_id);

const spots =ViewSpot.find(spot => spot._id == _id);
    const {country_Name,tourists_spot_name,location,total_Visitors_PerYear,seasonality,travel_time,average_cost,image,short_description} =spots

    return (
        <div>
            <div className="hero bg-base-300 min-h-screen  p-28">
                <div className="hero-content gap-32 flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        
                        <p className="">
                           <span className="font-semibold text-xl ">Country :</span> {country_Name}
                        </p>
                        <p className="">
                           <span className="font-semibold text-xl ">Tourists_spot_name :</span> {tourists_spot_name}
                        </p>
                        <p className="">
                           <span className="font-semibold text-xl ">Location :</span> {location}
                        </p>
                        <p className="">
                           <span className="font-semibold text-xl ">Seasonality :</span> {seasonality}
                        </p>
                        <p className="">
                           <span className="font-semibold text-xl ">Total_Visitors_PerYear :</span> {total_Visitors_PerYear}
                        </p>
                        <p className="">
                           <span className="font-semibold text-xl ">Travel_time :</span> {travel_time}
                        </p>
                        <p className="">
                           <span className="font-semibold text-xl ">Average_cost :</span> {average_cost}
                        </p>
                        <p className="">
                           <span className="font-semibold text-xl ">Short_description :</span> {short_description}
                        </p>
                       
                   
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewSpot;