import { useState } from 'react';
import gym1 from '../assets/gym1.jpg';
import gym2 from '../assets/gym2.jpg';
import gym3 from '../assets/gym3.jpg';
import gym4 from '../assets/gym4.jpg';

const corouselElements = [
    { src: gym1, alt: "Gym1" },
    { src: gym2, alt: "Gym2" },
    { src: gym3, alt: "Gym3" },
    { src: gym4, alt: "Gym4" },
]

const GymCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % corouselElements.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + corouselElements.length) % corouselElements.length);
    };

    return <div  className="relative w-ful">
        <div
            className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {
                corouselElements.map(el => {
                    return <div
                        key={el.src}
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none rounded-2xl"
                        data-te-carousel-active
                        data-te-carousel-item
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <img
                            src={el.src}
                            className="block w-full rounded-2xl"
                            alt="..." />
                    </div>
                })
            }
        </div>

        {/* <!--Carousel controls - prev item--> */}
        <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
        >
            <span className="inline-block h-8 w-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
        </button>

        <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
        >
            <span className="inline-block h-8 w-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
        </button>

    </div>
}

export default GymCarousel