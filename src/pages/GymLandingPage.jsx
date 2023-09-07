import { styled } from "styled-components"
import { CssVariables } from "../utils/Variables"
import bgBlobImage from '../assets/bg-blob.png';
import GymNavigation from "../components/gymNaviftions";
import GymCarousel from "../components/GymCarousel";
import quotes from '../assets/quotes.png';
import prepare_for_run from '../assets/prepare_for_run.jpg';

const GymLandingPage = () => {
    return <GymPagaStyle>
        <div className="glassView backdrop-blur-none rounded-3xl p-7 flex flex-col gap-8">
            <GymNavigation />
            <div className="flex justify-between pt-8">
                <div className="textContainer flex flex-col gap-3">
                    <div className="textBig text-9xl text-white">
                        ACHIVE YOUR SMART BODY RIGHT NOW.
                    </div>
                    <div>
                        <img src={quotes} className="w-6 flex-shrink-0" alt={"\""} />
                    </div>
                    <div className="text-2xl flex-shrink-0 text-white transition py-1 px-2 rounded">
                        {"\"The body achieves what the mind believes.\""}
                    </div>
                    <div className="flex gap-10">
                        <button className="button bg-red-950 text-2xl text-white transition flex-shrink-0 hover:bg-red-900 font-bold py-2 px-6 rounded-lg">
                            JOIN NOW
                        </button>
                        <button className="button transparent text-2xl text-white transition flex-shrink-0 hover:bg-red-900 font-bold py-2 px-4 rounded-lg">
                            BOOK YOUR SEAT
                        </button>
                    </div>
                </div>
                <div className="carousel">
                    <GymCarousel />
                </div>
            </div>
            <div className="flex justify-between pt-7 gap-8">
                <div style={{ width: '40%' }}>
                    <img src={prepare_for_run} className="rounded-2xl" alt={"\""} style={{width: '100%'}}/>
                </div>
                <div className="flex flex-col flex-grow bg-red-950 rounded-3xl">
                    <div className="servicesSection text-white text-3xl w-full text-center">
                        OUR SERVICES
                    </div>
                </div>
            </div>
        </div>
    </GymPagaStyle>
}

export default GymLandingPage

export const GymPagaStyle = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: auto;
    background-image: url(${bgBlobImage}); 
    padding: 60px 20px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .glassView{
        width: min(80%, 1400px);
        min-height: 600px;
        background-color: ${CssVariables.glassRed};
        .textContainer{
            max-width: 50%;
            .textBig{
                font-family: Anton;
            }
        }
        .carousel{
            max-width: 50%;
        }
        .servicesSection{
            width: 60%;
            font-family: Anton;

        }
    }
`