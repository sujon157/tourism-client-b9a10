
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router-dom";


const ViewSpot = () => {

    const { id } = useParams();
    const [view, setView] = useState({});
    console.log(view);

    useEffect(() => {
        fetch(`https://tourism-server-b9a10.vercel.app/singleSpot/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setView(data);
            })
    }, [id]);



    const { country_Name, tourists_spot_name, location, total_Visitors_PerYear, seasonality, travel_time, average_cost, image, short_description } = view;

    return (
        <div className=" pt-28">

            <div className="hero bg-base-300 min-h-screen  p-32">

                <div className="hero-content gap-32 flex-col lg:flex-row">
                    <Fade delay={600} direction="left">
                        <img
                            src={image}
                            className="max-w-sm rounded-lg shadow-2xl " />
                    </Fade>
                    <Fade delay={600} direction="right">
                        <div>

                            <p className="">
                                <span className="font-semibold text-xl ">Country :</span> {country_Name}
                            </p>
                            <p className="">
                                <span className="font-semibold text-xl ">Tourists_spot_name :</span> {tourists_spot_name}
                            </p>
                            <p className="">
                                <span className="font-semibold text-xl ">Location :</span> {location}
                            </p>
                            <p className="">
                                <span className="font-semibold text-xl ">Seasonality :</span> {seasonality}
                            </p>
                            <p className="">
                                <span className="font-semibold text-xl ">Total_Visitors_PerYear :</span> {total_Visitors_PerYear}
                            </p>
                            <p className="">
                                <span className="font-semibold text-xl ">Travel_time :</span> {travel_time}
                            </p>
                            <p className="">
                                <span className="font-semibold text-xl ">Average_cost :</span> {average_cost}
                            </p>
                            <p className="">
                                <span className="font-semibold text-xl ">Short_description :</span> {short_description}
                            </p>



                        </div>
                    </Fade>
                </div>
            </div>

        </div>
    );
};

export default ViewSpot;