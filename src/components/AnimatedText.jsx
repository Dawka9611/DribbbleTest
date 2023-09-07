import styled, { keyframes } from 'styled-components'

const AnimatedText = () => {
    return <span>
        <Wrapper>
            {"RIGHT "}
        </Wrapper>
        NOW.
    </span>
}

export default AnimatedText

const animations = keyframes`
    0%{opacity: 0.2}
    24%{opacity: 1}
    75%{opacity: 1}
    100%{opacity: 0.2}
`

const Wrapper = styled.span`
    opacity: 0;
    animation-name: ${animations};
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`