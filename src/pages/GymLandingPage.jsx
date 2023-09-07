import { styled } from "styled-components"
import { CssVariables } from "../utils/Variables"
import bgBlobImage from '../assets/bg-blob.png';
import GymNavigation from "../components/gymNaviftions";
import GymCarousel from "../components/GymCarousel";
import quotes from '../assets/quotes.png';
import GymBottom from "../components/GymBottom";

const GymLandingPage = () => {
    return <GymPagaStyle>
        <div className="glassView backdrop-blur-none p-10 pb-12 flex flex-col gap-8">
            <GymNavigation />
            <div className="flex justify-between pt-14 lg:pt-8 gap-3 2xl:flex-col">
                <div className="textContainer w-full flex flex-col gap-3 pt-9 2xl:flex-row 2xl:w-full 2xl:pb-10 lg:flex-col">
                    <div className="textBig text-9xl text-white w-full md:text-8xl">
                        ACHIVE YOUR SMART BODY RIGHT NOW.
                    </div>
                    <div>
                        <img src={quotes} className="w-6 flex-shrink-0" alt={"\""} />
                    </div>
                    <div>
                        <div className="text-2xl flex-shrink-0 text-white transition py-1 px-2 rounded tracking-wide">
                            {"\"The body achieves what the mind believes.\""}
                        </div>
                        <div className="flex gap-10 pt-11 2xl:flex-col lg:gap-4">
                            <button className="button bg-red-950 text-2xl text-white transition flex-shrink-0 hover:bg-red-900 font-bold py-4 px-5 rounded-lg">
                                JOIN NOW
                            </button>
                            <button className="button transparent text-2xl text-white transition flex-shrink-0 hover:bg-red-900 font-bold py-4 px-5 rounded-lg">
                                BOOK YOUR SEAT
                            </button>
                        </div>
                    </div>
                </div>
                <GymCarousel />
            </div>
            <GymBottom className='bottomSection' />
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
    padding: 40px 0;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .glassView{
        width: min(80%, 1450px);
        min-height: 600px;
        background-color: ${CssVariables.glassRed};
        border-radius: 34px;
        .textContainer{
            .textBig{
                font-family: Anton;
            }
        }
        .servicesSection{
            width: 60%;
            font-family: Anton;
        }
        .bottomSection{
            font-family: Anton;
            .serviceName{
                font-family: Open Sans;
            }
        }

}
`