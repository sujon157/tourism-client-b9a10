import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
      const { country_name, image, description } = country

      return (
            <div>
                  <Link to={`/selfCountry/${country_name}`}>
                        <div className=" hero bg-base-200  min-h">
                              <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
                                    <Fade delay={800} direction="right">
                                          <img
                                                src={image}
                                                className="max-w-sm rounded-lg shadow-2xl" />
                                    </Fade>
                                    <Fade delay={800} direction="left">
                                          <div className="w-1/2">
                                                <h1 className="text-5xl font-bold">{country_name}</h1>
                                                <p className="py-6">
                                                      {
                                                            description
                                                      }
                                                </p>

                                          </div>
                                    </Fade>
                              </div>
                        </div>
                  </Link>
            </div>
      );
};

export default CountryCard;