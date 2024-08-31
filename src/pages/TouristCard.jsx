import { Link } from "react-router-dom";
import './TouristCard.css'
import { Fade } from "react-awesome-reveal";

const TouristCard = ({ spot }) => {

    console.log(spot);
    const { _id, tourists_spot_name, total_Visitors_PerYear, seasonality, travel_time, average_cost, image } = spot;


    return (
        <div className="bg-base-200">

            <a href="#" className="card">
                <Fade delay={800} direction="right">
                    <div className="card__image">
                        <img src={image} alt='' />
                    </div>
                </Fade>
                <Fade delay={1000} direction="down">
                    <h2 className="card__title ">{tourists_spot_name}</h2>
                </Fade>
                <div className="card__content">
                    <div className="flex justify-between gap-5">
                        <Fade  direction="up">
                            <p>Season : {seasonality}</p>
                        </Fade>
                        <Fade delay={500} direction="up">
                            <p>Visit :{total_Visitors_PerYear}</p>
                        </Fade>
                    </div>
                    <div className="flex justify-between gap-5">
                        <Fade delay={800} direction="left">
                            <p>Time : {travel_time} days</p>
                        </Fade>
                        <Fade delay={800} direction="right">
                            <p>Cost : ${average_cost}</p>
                        </Fade>
                    </div>
                    <Fade delay={1000} direction="down">
                        <span>
                            <Link to={`/view/${_id}`}>
                                <button>View Details</button>
                            </Link>
                            <i className="fa-solid fa-plane-departure" />
                        </span>
                    </Fade>
                </div>
            </a>
        </div>
    );
};

export default TouristCard;