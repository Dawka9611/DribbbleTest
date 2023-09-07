import PropTypes from 'prop-types';

const Button = ({ text, customClassName, onClick, children, transparent }) => {
    const dark = 'bg-red-950 text-2xl text-white transition hover:bg-red-900 font-bold py-3 px-4 rounded-lg';
    const light ='flex-shrink-0 text-white transition py-3 px-4 rounded-lg'
    const className =transparent ? `${light} ${customClassName}` : dark;

    return (
        <button className={className} onClick={onClick}>
            {children ?? text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    customClassName: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    transparent: PropTypes.bool
};

export default Button;