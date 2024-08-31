import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetails from "./CountryDetails";
import { Fade } from "react-awesome-reveal";

const SelfCountrySpot = () => {
      const { country_name } = useParams();
      console.log(country_name);
      const [countryCard, setCountryCard] = useState([]);

      useEffect(() => {
            fetch('http://localhost:3000/spot')
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setCountryCard(data);
                  })
      }, []);

      const card = countryCard.filter(spot => spot.country_Name == country_name);
      console.log(card);




      return (
            <div className="p-32">
                  <Fade  delay={500} direction="up">
                        <h2 className=" text-3xl font-bold text-center text-cyan-950"> See all the tourist spot cards of that specific country </h2>
                  </Fade>
                  <div className="bg-[whitesmoke]   grid-cols-1 md:grid lg:grid-cols-3 justify-between  gap-4 space-y-2 mt-36 ">
                        {
                              card.map(p => <CountryDetails
                                    key={p._id}
                                    country={p}

                              ></CountryDetails>)
                        }
                  </div>

            </div>
      );
};

export default SelfCountrySpot;