import { Link } from "react-router-dom";
import './CountryDetails.css';

const CountryDetails = ({ country }) => {
      console.log(country);
      const { _id, tourists_spot_name, image, seasonality, location, short_description, country_Name, average_cost } = country;
      return (
            <div className="">
              
                  <a href="#" className="card">
                        <div className="card__image">
                              <img src={image} alt='' />
                        </div>
                        <div className="flex justify-between gap-5">

                              <h2 className="card__title ">{country_Name}</h2>
                              <h2 className="card__title ">{tourists_spot_name}</h2>

                        </div>
                        <div className="card__content">
                              <div className="flex justify-between gap-5 mt-3">
                                    <p> {seasonality}</p>
                                    <p>{location}</p>
                                    <p>$ {average_cost}</p>
                              </div>
                              <div className="text-center mb-3">

                                    <p>{short_description}</p>
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

export default CountryDetails;