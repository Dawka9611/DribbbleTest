import { useState } from 'react';
import gym1 from '../assets/gym1.jpg';
import gym3 from '../assets/gym3.jpg';
import gym4 from '../assets/gym4.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled } from 'styled-components';

const carouselElements = [
    { src: gym1, alt: "Gym1" },
    { src: gym3, alt: "Gym3" },
    { src: gym4, alt: "Gym4" },
];

const GymCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <CarouselStyle className="carousel-container w-full rounded-4xl flex-grow">
            <Carousel
                showArrows={true}
                selectedItem={currentIndex}
                onChange={setCurrentIndex}
                showThumbs={false}
                dynamicHeight={false}
                emulateTouch={true}
                autoPlay={true} // Enable auto-play
                interval={3000}
                infiniteLoop={true}
                showStatus={false}
            >
                {carouselElements.map((image, index) => (
                    <div key={index} className="w-full h-full">
                        <img src={image.src} alt={image.alt} className='rounded-3xl  w-full h-full object-cover'/>
                    </div>
                ))}
            </Carousel>
        </CarouselStyle>
    );
};

const CarouselStyle = styled.div`
  .arrowStyles {
    position: absolute;
    z-index: 2;
    top: calc(50% - 15px);
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    text-align: center;
  }
  .next {
    right: 0;
  }
`;

export default GymCarousel;

