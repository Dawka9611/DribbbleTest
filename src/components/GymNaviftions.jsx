import gymLogo from '../assets/gymLogo.png';
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import { FaBars } from 'react-icons/fa';
import useWindowDimensions from "../hooks/useWindowDimensions";
import DropdownMenu from './DropdownMenu';
import { animated, useSpring } from '@react-spring/web'

const navElements = [
    { text: 'Home', link: '/' },
    { text: 'About us', link: '/empty' },
    { text: 'Pricing', link: '/empty' },
    { text: 'Blog', link: '/empty' },
]

const GymNavigation = () => {
    const [showMenu, setShowMenu] = useState(false); // State to control the menu visibility
    const { width } = useWindowDimensions();
    const [rotateProps] = useSpring(() => ({
        from: { transform: 'rotateY(0deg)' },
        to: { transform: 'rotateY(360deg)' },
        config: {
          duration: 5000, // Adjust the duration as needed
        },
        reset: true, // Reset the animation to the "from" state after each iteration
        loop: true, // Enable looping
      }));

    return (
        <div className="w-full">
            <div className="flex gap-8 justify-between  lg:flex-col lg:gap-3">
                <div className='flex gap-2 text-2xl justify-between flex-grow lg:mr-24 md:mr-16 items-center'>
                    <div className="flex gap-2 text-3xl flex-shrink-0 mr-28 lg:mr-20 md:mr-16 items-center">
                        <animated.img
                            style={rotateProps}
                            src={gymLogo}
                            className="w-9 h-9 flex-shrink-0"
                            alt="Logo"
                        />
                        <div className="text-white font-bold tracking-wide">CHAMPION GYM</div>
                    </div>
                    <div className="flex gap-6 justify-end flex-grow md:flex-col md:flex-shrink-0">
                        {width < 1300 ? (
                            <div className=''>
                                <button
                                    onClick={() => setShowMenu(!showMenu)}>
                                    <FaBars className="text-white text-5xl transition hover:text-red-900" />
                                </button>
                                {showMenu && <DropdownMenu data={navElements} isToggled={showMenu} />}
                            </div>
                        ) : (
                            <div className="flex flex-grow justify-around gap-9 flex-shrink-0 2xl:gap-3">
                                {navElements.map((el) => (
                                    <Link to={el.link} key={el.text}>
                                        <div className="navItem text-2xl flex-shrink-0 text-white transition py-3 px-4 rounded-lg">{el.text}</div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex-shrink-0 pt-0'>
                    <button className=" bg-red-950 text-2xl text-white transition  hover:bg-red-900 font-bold py-3 px-4 rounded-lg">
                        CONTACT US
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GymNavigation;
