import { useEffect, useState } from "react"

const CountryCard = () => {
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
                              country.map(s => <div key={s._id}>
                                    <div className=" hero bg-base-200  min-h">
                                          <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
                                                <img
                                                      src={s.image}
                                                      className="max-w-sm rounded-lg shadow-2xl" />
                                                <div className="w-1/2">
                                                      <h1 className="text-5xl font-bold">{s.country_name}</h1>
                                                      <p className="py-6">
                                                            {
                                                                  s.description
                                                            }
                                                      </p>

                                                </div>
                                          </div>
                                    </div>

                              </div>

                              )
                        }

                  </div>
            </div>
      );
};

export default CountryCard;