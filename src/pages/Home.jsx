
import Banner from "../Banner/Banner";
import TouristSection from "../TouristSection/TouristSection";
import Country from "./Country";
import Payment from "./Payment";
import TourBooking from "./TourBooking";




const Home = () => {


    return (


        <div className="bg-amber-100">
            <Banner></Banner>
            <TouristSection></TouristSection>
            <Country></Country>
            <Payment></Payment>
            <TourBooking></TourBooking>


        </div>

    );
};


export default Home;