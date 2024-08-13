import { Link } from "react-router-dom";

const TouristCard = ({ spot, setSpots }) => {

    const { _id, tourists_spot_name, total_Visitors_PerYear, seasonality, travel_time, average_cost, image } = spot;


    return (
        <div className="">
            <div className="card bg-red-300 w-96 shadow-xl">
                <figure className="px-10 pt-6">
                    <img
                        src={image}
                        alt="Spot"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="font-semibold  text-2xl">{tourists_spot_name}</h2>

                </div>
                <div className="mb-7">
                    <div className=" flex justify-center gap-12">
                        <p>Season : {seasonality}</p>
                        <p>Visit : {total_Visitors_PerYear}</p>
                    </div>
                    <div className=" flex justify-center gap-12 ">
                        <p>Time : {travel_time}</p>
                        <p>Cost : {average_cost}</p>
                    </div>
                </div>
                <div className="card-actions justify-center mb-6">
                    <a href="#_" className="relative px-6 py-3 font-bold text-white rounded-lg group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                        <Link to={`/view/${_id}`}>
                            <span className="relative" >View Details</span>

                        </Link>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default TouristCard;