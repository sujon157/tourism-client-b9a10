import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";
import { FaArrowCircleDown } from "react-icons/fa";

const TouristsSpot = () => {
    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots);


    useEffect(() => {
        const savedCards = localStorage.getItem('sortedCards');
        if (savedCards) {
            setSpots(JSON.parse(savedCards));
        }
    }, []);

    const sortAscending = () => {
        const sortedCards = [...spots].sort((a, b) => a.average_cost - b.average_cost);
       
        setSpots(sortedCards);
        localStorage.setItem('sortedCards', JSON.stringify(sortedCards)); // Save to localStorage

    };
    const sortDescending = () => {
        const sortedCards = [...spots].sort((a, b) => b.average_cost - a.average_cost);
       // console.log('Sorted Ascending:', sortedCards);
        setSpots(sortedCards);
        console.log('click');
        localStorage.setItem('sortedCards', JSON.stringify(sortedCards)); // Save to localStorage

    };


    return (
        <div>
            <div className=" w-full px-[600px] mt-14">
                <details className="dropdown">
                    <summary className="btn btn-secondary text-2xl text-white  p-3 m-1">Sort by <FaArrowCircleDown />
                    </summary>
                    <ul  className="menu dropdown-content  bg-base-200 rounded-box  w-40">
                        <li onClick={sortAscending}><a> Ascending  average_cost</a></li>
                        <li onClick={sortDescending}><a> Descending  average_cost</a></li>


                    </ul>
                </details>
            </div>

            <div className=" grid-cols-1 md:grid lg:grid-cols-3 justify-between p-20 gap-4 space-y-2 mt-8">
                {
                    spots.map(spot => <TouristCard
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