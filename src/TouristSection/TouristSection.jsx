import { useEffect, useState } from "react";

import './TouristSection.css';
import { Link } from "react-router-dom";
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";


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
                  <div className="  grid md:grid-cols-2  lg:grid-cols-3 justify-between p-32 gap-4 space-y-2 mt-4">
                        {
                              tourist.map(p => <div

                                    key={p._id}>

                                    <div className="flip-card">
                                          <div className="flip-card-inner ">
                                                <div className="flip-card-front">
                                                      <img src={p.image} alt="" />
                                                </div>
                                                <div className="flip-card-back ">
                                                      <h1 className="font-bold">{p.tourists_spot_name}</h1>

                                                      <p>{p.country_Name}</p>

                                                      <p className="mt3">
                                                            {p.short_description}
                                                      </p>

                                                      <Link to={`/view/${p._id}`}>
                                                            <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                                                                  <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                                                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                                  </span>
                                                                  <span className="relative">VIEW</span>
                                                            </a>
                                                      </Link>

                                                </div>
                                          </div>
                                    </div>


                              </div>)
                        }

                  </div>
            </div>

      );
};

export default TouristSection;