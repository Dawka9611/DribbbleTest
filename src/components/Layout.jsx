import { styled } from "styled-components"
import { CssVariables } from "../utils/Variables"
import bgBlobImage from '../assets/bg-blob.png';
import GymNavigation from "../components/gymNaviftions";
import GymBottom from "../components/GymBottom";
import PropTypes from 'prop-types';
//PS: all sizes (such as lg, 2xl, md) are customized inside of tailwind.config.js file
//all variables are from utils/Variables.jsx file. 

const LayoutComponent = ({ children }) => {
    return <GymPagaStyle>
        <div className="glassView backdrop-blur-none p-11 pb-15 flex flex-col gap-8">
            {/* navigation bar */}
            <GymNavigation />
            {/* main elements */}
            {children}
            {/* bottom section */}
            <GymBottom className='bottomSection' />
        </div>
    </GymPagaStyle>
}

export default LayoutComponent

LayoutComponent.propTypes = {
    children: PropTypes.node,
};

export const GymPagaStyle = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: auto;
    background-image: url(${bgBlobImage}); 
    padding: 100px 0px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: start;
    .glassView{
        width: min(80%, 1500px);
        min-height: 600px;
        background-color: ${CssVariables.glassRed};
        border-radius: 34px;
            .textBig{
                font-family: Anton;
            }
        .bottomSection{
            font-family: Anton;
            .serviceName{
                font-family: Open Sans;
            }
        }
        .button:hover{
        background-color: ${CssVariables.glassWhite};
        }
        .navItem:hover{
            background-color: ${CssVariables.glassWhite};
        }

}
`