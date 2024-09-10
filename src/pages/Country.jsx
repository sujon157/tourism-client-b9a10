import { useEffect, useState } from "react"

import CountryCard from "./CountryCard";
import { Fade } from "react-awesome-reveal";

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
                        <Fade delay={700} direction="left">
                              <h1 className="text-4xl font-bold text-center">Countries</h1>
                        </Fade>
                       <Fade delay={700} direction="right">
                       <p className="text-center ">Discover the world most beautiful destinations.</p>
                        <p className="text-center">Explore the world
                              Amazing Featured Tour Package The World</p>
                       </Fade>
                  </div>
                  <div className=" bg-slate-200 space-y-6 mt-16 shadow-2xl">
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