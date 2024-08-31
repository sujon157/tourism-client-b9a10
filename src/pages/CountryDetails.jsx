import { Link } from "react-router-dom";
import './CountryDetails.css';
import { Fade } from "react-awesome-reveal";

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

                              <Fade direction="left" >
                                    <h2 className="card__title ">{country_Name}</h2>
                              </Fade>
                              <Fade direction="right">
                                    <h2 className="card__title ">{tourists_spot_name}</h2>
                              </Fade>

                        </div>
                        <div className="card__content">
                              <div className="flex justify-between gap-5 mt-3">
                                    <Fade duration={1200} direction="left">
                                          <p> {seasonality}</p>
                                    </Fade>
                                    <Fade delay={500} direction="down">
                                          <p>{location}</p>
                                    </Fade>
                                    <Fade duration={1000} direction="right">
                                          <p>$ {average_cost}</p>
                                    </Fade>
                              </div>
                              <Fade delay={700} direction="left">
                                    <div className="text-center mb-3">


                                          <p>{short_description}</p>

                                    </div>
                              </Fade>
                              <Fade delay={900} direction="right">
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

export default CountryDetails;