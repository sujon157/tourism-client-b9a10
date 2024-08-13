import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";

const TouristsSpot = () => {
    const loadedSpots=useLoaderData();
    const [spots,setSpots]=useState(loadedSpots);

    return (
        <div>
            
            <div className="bg-teal-700 grid-cols-1 md:grid lg:grid-cols-3 justify-between p-20 gap-6 space-y-4">
                {
                    spots.map(spot=><TouristCard
                     key={spot._id}
                     spot={spot}
                     setSpots={setSpots}
                    
                    ></TouristCard>)
                }
            </div>
        </div>
    );
};

export default TouristsSpot;