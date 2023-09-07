import GymCarousel from "../components/GymCarousel";
import quotes from '../assets/quotes.png';
import { Link } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";
import LayoutComponent from "../components/Layout";

//PS: all sizes (such as lg, 2xl, md) are customized inside of tailwind.config.js file
//all variables are from utils/Variables.jsx file. 

const GymLandingPage = () => {
    return <LayoutComponent>
        <div className="flex justify-between pt-14 lg:pt-8 gap-3 2xl:flex-col">
            <div className="w-full flex flex-col gap-3 pt-8 2xl:flex-row 2xl:w-full 2xl:pb-10 lg:flex-col">
                <div className="textBig text-9xl text-white w-full md:text-8xl">
                    <div>
                        ACHIVE YOUR SMART BODY
                    </div>
                    <AnimatedText />
                </div>
                <div>
                    <img src={quotes} className="w-6 flex-shrink-0" alt={"\""} />
                </div>
                <div>
                    <div className="text-2xl flex-shrink-0 text-white transition py-1 px-2 rounded tracking-wide">
                        {"\"The body achieves what the mind believes.\""}
                    </div>
                    <div className="flex gap-10 pt-6 2xl:flex-col lg:gap-3">
                        <Link to='/empty' className=" bg-red-950 text-2xl text-white transition flex-shrink-0 hover:bg-red-900 font-bold py-4 px-5 rounded-lg">
                            JOIN NOW
                        </Link>
                        <Link to='/empty' className="button transparent text-2xl text-white transition flex-shrink-0 hover:bg-red-900 font-bold py-4 px-5 rounded-lg">
                            BOOK YOUR SEAT
                        </Link>
                    </div>
                </div>
            </div>
            <GymCarousel />
        </div>
    </LayoutComponent>
}

export default GymLandingPage
