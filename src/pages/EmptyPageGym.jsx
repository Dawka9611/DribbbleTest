import GymNavigation from "../components/gymNaviftions";
import { GymPagaStyle } from "./GymLandingPage";

const EmptyPage = () => {
    return <GymPagaStyle>
        <div className="glassView backdrop-blur-none rounded-3xl">
            <GymNavigation />
            <div className="flex justify-center pt-20">
                <div className="text-white font-bold tracking-wide text-3xl h-full">
                    No content to show
                </div>
            </div>
        </div>
    </GymPagaStyle>
}

export default EmptyPage