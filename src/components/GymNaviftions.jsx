import gymLogo from '../assets/gymLogo.png';
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import { FaBars } from 'react-icons/fa';
import useWindowDimensions from "../hooks/useWindowDimaensions";

const navElements = [
    { text: 'Home', link: '/' },
    { text: 'About us', link: '/empty' },
    { text: 'Pricing', link: '/empty' },
    { text: 'Blog', link: '/empty' },
]

const GymNavigation = () => {
    const [showMenu, setShowMenu] = useState(false); // State to control the menu visibility
    const { width } = useWindowDimensions();
    // Function to toggle the menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="w-full">
            <div className="flex gap-8 justify-between  lg:flex-col">
                <div className='flex gap-2 text-2xl justify-between flex-grow lg:mr-24 md:mr-16 items-center'>
                    <div className="flex gap-2 text-2xl flex-shrink-0 mr-28 lg:mr-20 md:mr-16 items-center">
                        <img src={gymLogo} className="w-8 h-9 flex-shrink-0" alt="Logo" />
                        <div className="text-white font-bold tracking-wide">CHAMPION GYM</div>
                    </div>
                    <div className="flex gap-6 justify-end items-center flex-grow md:flex-col md:flex-shrink-0">
                        {width < 1300 ? (
                            <>
                                <button className="burger-menu" onClick={toggleMenu}>
                                    <FaBars className="text-white text-4xl transition hover:text-red-900" />
                                </button>
                                {/* {showMenu && (
                                <div className="mobile-menu">
                                    {navElements.map((el) => (
                                        <Link to={el.link} key={el.text}>
                                            <div className="text-lg navText">{el.text}</div>
                                        </Link>
                                    ))}
                                </div>
                            )} */}
                            </>
                        ) : (
                            <div className="flex flex-grow justify-around gap-9 flex-shrink-0 2xl:gap-3">
                                {navElements.map((el) => (
                                    <Link to={el.link} key={el.text}>
                                        <div className="text-2xl flex-shrink-0 text-white transition py-3 px-4 rounded-lg hover:bg-red-900">{el.text}</div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex-shrink-0'>
                    <button className="button bg-red-950 text-2xl text-white transition  hover:bg-red-900 font-bold py-3 px-4 rounded-lg">
                        CONTACT US
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GymNavigation;
