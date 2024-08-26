import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristCard from "./TouristCard";
import { FaArrowCircleDown } from "react-icons/fa";
import './TouristsSpot.css'

const TouristsSpot = () => {

    const loadedSpots = useLoaderData();
    console.log(loadedSpots);
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
        <div className="py-32 bg-amber-100">

            <h1 className="text-5xl text-center font-bold ">Tourist Spots</h1>
            <p className="text-xl mt-2 text-center">Discover our top-rated and popular tourist spots around the world.</p>
            <div className="flex justify-center mt-7">
                <FaArrowCircleDown size={32} className="text-teal-500 hover:text-teal-600" />
            </div>

            <div className="mt-3">

                <nav>
                    <ul className="-">


                        <li className="drop dropdown-10">
                            SORT BY
                            <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-10 ">
                                <li className="dropdown_item-1" onClick={sortAscending}><a> Ascending  average_cost</a></li>
                                <li className="dropdown_item-2" onClick={sortDescending}><a> Descending  average_cost</a></li>

                              
                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>

            <div className="bg-[whitesmoke]   grid-cols-1 md:grid lg:grid-cols-3 justify-between  gap-4 space-y-2 mt-36 ">


                {
                    spots.map(spot => <TouristCard
                        key={spot._id}
                        spot={spot}
                        setSpots={setSpots}

                    ></TouristCard>
                    )
                }
            </div>
        </div>
    );
};

export default TouristsSpot;