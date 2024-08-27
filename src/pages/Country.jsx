import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";

const Country = () => {
      const [country, setCountry] = useState([]);
      console.log(country);


      useEffect(() => {
            fetch('http://localhost:3000/country')
                  .then(res => res.json())
                  .then(data => {
                        setCountry(data);


                  })
      }, []);
      return (
            <div>
                  <div className="mt-24 ">
                        <h1 className="text-4xl font-bold text-center">Countries</h1>
                        <p className="text-center ">Discover the world most beautiful destinations.</p>
                        <p className="text-center">Explore the world
                              Amazing Featured Tour Package The World</p>
                  </div>
                  <div className="space-y-6 mt-16 shadow-2xl">
                        {
                              country.map(s =>
                                    <CountryCard
                                          key={s._id}
                                          country={s}
                                          setCountry={setCountry}
                                    >
                                    </CountryCard>

                              )
                        }

                  </div>
            </div>
      );
};

export default Country;