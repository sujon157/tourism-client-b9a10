import { useEffect, useState } from "react";

import './TouristSection.css';
import { Link } from "react-router-dom";
import { IoIosAirplane } from "react-icons/io";
import { Fade } from "react-awesome-reveal";


const TouristSection = () => {
      const [tourist, setTourist] = useState([]);
      console.log(tourist);

      useEffect(() => {
            fetch('http://localhost:3000/spot')
                  .then(res => res.json())
                  .then(data => {
                        setTourist(data);

                  })

      }, []);

      return (
            <div>
                  <div className=" flex justify-between gap-20 px-8 mt-24 text-blue-900">
                        <div className=" pl-20 w-1/2">
                              <div className="flex gap-4  text-xl">
                                    <Fade direction="left">
                                          <p>What we Provide To Travel  -------
                                          </p>
                                    </Fade>
                                    <Fade direction="right"> <p className="text-xl"><IoIosAirplane /></p></Fade>
                              </div>
                              <Fade direction="up"> <h2 className="text-3xl font-extrabold">Stunning Home Pages</h2></Fade>
                        </div>
                        <Fade direction="right">

                              <p className="">   Stunning Home Pages Our homepage provides easy navigation for perusing a variety of  programs, ranging <br /> from thrilling mountain   hikes and tranquil beach vacations  to deeply engaging cultural city  experiences and more. Your dream adventure is just a click away with this theme.</p>

                        </Fade>
                  </div>

                  <div className="mt-16 ">
                        <Fade delay={900} direction="up">
                              <h1 className="text-4xl font-bold text-center">Discover our Tourist Spots</h1>

                        </Fade>
                        <Fade delay={900} direction="down">
                              <p className="text-xl text-center mt-2">Our top  popular tourist spots in the world</p>
                        </Fade>
                  </div>

                  <Fade delay={1200} direction="left">
                        <div className=" grid md:grid-cols-2  lg:grid-cols-3 justify-between px-32  space-x-4 space-y-4 mt-10">
                              {
                                    tourist.map(p =>


                                          <div className=" shadow-black shadow-xl pl-5  pb-12 border-l-4 rounded-xl"
                                                key={p._id}>

                                                <div className="flip-card ">
                                                      <div className="flip-card-inner   ">
                                                            <div className="flip-card-front">
                                                                  <img src={p.image} alt="" />
                                                            </div>
                                                            <div className="flip-card-back ">
                                                                  <Fade delay={800} direction="up">
                                                                        <h1 className="font-bold">{p.tourists_spot_name}</h1>
                                                                  </Fade>

                                                                  <Fade delay={900} direction="down">
                                                                        <p>{p.country_Name}</p>
                                                                  </Fade>

                                                                  <Fade delay={1100} direction="right">
                                                                        <p className="mt3">
                                                                              {p.short_description}
                                                                        </p>
                                                                  </Fade>

                                                                  <Fade delay={1200} direction="left">
                                                                        <Link to={`/view/${p._id}`}>
                                                                              <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                                                                                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                                                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                                                                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                                                    </span>
                                                                                    <span className="relative">VIEW</span>
                                                                              </a>
                                                                        </Link>
                                                                  </Fade>

                                                            </div>
                                                      </div>
                                                </div>


                                          </div>)

                              }
                        </div>
                  </Fade>
            </div>




      );
};

export default TouristSection;