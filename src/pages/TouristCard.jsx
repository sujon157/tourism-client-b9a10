import { Link } from "react-router-dom";
import './TouristCard.css'

const TouristCard = ({ spot }) => {

    console.log(spot);
    const { _id, tourists_spot_name, total_Visitors_PerYear, seasonality, travel_time, average_cost, image } = spot;


    return (
        <div className="">

            <a href="#" className="card">
                <div className="card__image">
                    <img src={image} alt='' />
                </div>
                <h2 className="card__title ">{tourists_spot_name}</h2>
                <div className="card__content">
                    <div className="flex justify-between gap-5">
                        <p>Season : {seasonality}</p>
                        <p>Visit :{total_Visitors_PerYear}</p>
                    </div>
                    <div className="flex justify-between gap-5">
                        <p>Time : {travel_time} days</p>
                        <p>Cost : ${average_cost}</p>
                    </div>
                    <span>
                        <Link to={`/view/${_id}`}>
                            <button>View Details</button>
                        </Link>
                        <i className="fa-solid fa-plane-departure" />
                    </span>
                </div>
            </a>
        </div>
    );
};

export default TouristCard;