import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { animated, useSpring } from '@react-spring/web'
import { CssVariables } from '../utils/Variables';

const DropdownMenu = ({ data, isToggled }) => {
    const menuAppear = useSpring({
      transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-50px,0)",
      opacity: isToggled ? 1 : 0
    });
    return (
        <animated.div style={menuAppear}>
            <DropdownMenuStyle className="dropdown-menu absolute top-2 right-0  z-10 bg-red-950 rounded-xl p-3">
                {data.map((item, index) => (
                    <Link to={item.link} key={index} className="dropdownItem text-white block p-2 pl-5 transition rounded-lg">
                        {item.text}
                    </Link>
                ))}
            </DropdownMenuStyle>
        </animated.div>
    );
};

DropdownMenu.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })).isRequired,
    isToggled: PropTypes.bool
};

export default DropdownMenu;

const DropdownMenuStyle = styled.div`
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    min-width: 180px;
    .dropdownItem{
        transition: all ease-in-out 500;
    }
    .dropdownItem:hover{
            background-color: ${CssVariables.glassWhite};
    }
`