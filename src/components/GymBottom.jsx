import prepare_for_run from '../assets/prepare_for_run.jpg';
import weights from '../assets/weights.png';
import { MdArrowForwardIos } from 'react-icons/md'
import { BsChevronDown } from 'react-icons/bs'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';

const GymBottom = () => {
    const { width } = useWindowDimensions();
    //depends on screen size depine how many rows need
    const columns = width > 1024 ? [[], [], []] : [[], []];
    for (let i = 0; i < servicesData.length; i++) {
        //1024px is lg size from custom tailwind width
        if (width > 1024) {
            columns[i % 3].push(servicesData[i]);
        } else {
            columns[i % 2].push(servicesData[i]);
        }
    }

    return (
        <div className="flex justify-between pt-7 gap-8 bottomSection 2xl:flex-col">
            {/* left side of bottom with picture */}
            <div className="bottomLeft relative w-2/5 2xl:w-full">
                <div className="text absolute top-7 right-6 text-4xl text-gray-800 text-right w-1/3 md:text-3xl lg:w-1/2" >
                    THE NEXT STEP IN THE SUCCESS OF WEIGHT LOSS
                </div>
                <div className="border-b-4 border-gray-800 absolute bottom-8 w-full" />
                <Link to='/empty' className="border border-white absolute bottom-5 right-1/2 p-1 rounded-full bg-gray-800 text-white transition hover:scale-110">
                    <MdArrowForwardIos />
                </Link>
                <img src={prepare_for_run} className="rounded-2xl w-full" alt={"\""} />
            </div>
            {/* right side of bottom with services */}
            <div className="flex flex-col flex-grow bg-red-950 rounded-3xl relative">
                {/* title of services */}
                <div className="servicesSection text-white text-3xl w-full font-bolder text-center pt-6">
                    OUR SERVICES
                </div>
                {/* service elements */}
                <div className="serviceName grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 p-6 justify-between 2xl:pt-8">
                    {columns.map((column, index) => (
                        <div key={index}>
                            {column.map((service, serviceIndex) => (
                                <Link to='/empty' key={serviceIndex} className="flex items-center gap-2 text-white transition hover:text-gray-500">
                                    <img src={weights} className="rounded-2xl w-6 flex-shrink-0" alt="*" />
                                    <div className="text-md flex-shrink-0">
                                        {service}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="border-b-2 border-white w-full absolute bottom-6" />
                <Link to='/empty' className="border border-white absolute bottom-4 right-1/2 p-1 rounded-full bg-red-950 text-white transition hover:scale-110 hover:text-gray-500 flex items-center">
                    <BsChevronDown />
                </Link>
            </div>
        </div>
    );
};

export default GymBottom;

const servicesData = [
    'CARDIO', 'CROSSFIT', 'GROUP TRAINING', 'WEIGHT LOSS', 'ABS CLASS', 'NUTRITIONIST',
    'POWERLIFTING', 'BODYBUILDING', 'MEDICAL CONSULTANCY', 'TRAINING', 'AEROBICS', 'HEALTH',
    'FITNESS', 'EXERCISE CLASS', 'PERSONAL TRAINING'
];