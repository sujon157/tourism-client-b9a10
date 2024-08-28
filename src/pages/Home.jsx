
import Banner from "../Banner/Banner";
import TouristSection from "../TouristSection/TouristSection";
import Country from "./Country";
import Payment from "./Payment";




const Home = () => {


    return (


        <div className="bg-amber-100">
            <Banner></Banner>
            <TouristSection></TouristSection>
            <Country></Country>
            <Payment></Payment>


        </div>

    );
};


export default Home;