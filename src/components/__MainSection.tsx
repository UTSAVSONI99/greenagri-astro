import React, { useState } from 'react';
// import {Button} from './ui/button';
import bgImage from '../../public/bg-image.png';
import bgImage2 from '../../public/bg-image2.webp';
// import Nav from './Nav';

const navItems = [
    { href: "/", label: "Home" },
    { href: "/production", label: "Production" },
    { href: "/product", label: "Product" },
    { href: "/contact", label: "Contact-us" },
];
function  Button ({children, ...props}:{
    children: React.ReactNode;
    [x:string]: any;
}) {
    return (
        <button {...props} className="bg-yellow-50 text-lg font-extrabold px-12">
            {children}
        </button>
    )
}
const slides = [
    {
        imgSrc: bgImage,
        imgAlt: 'Vibrant abstract painting with swirling blue and light pink hues on a canvas.',
        title: 'Manufacturing and distributing premium-quality rice to aspiring nations for over 50 years.',
        description: `With India's largest production facility, we proudly export over 300,000 tonnes of rice annually to 25 countries worldwide.`,
        ctaUrl: 'https://example.com',
        ctaText: 'Contact-Us',
    },
    {
        imgSrc: bgImage2,
        imgAlt: 'Vibrant abstract painting with swirling red, yellow, and pink hues on a canvas.',
        title: 'Welcome to Green Agri Corp Pvt Ltd',
        description: 'Your trusted source for agricultural products.',
        ctaUrl: 'https://example.com',
        ctaText: 'Contact-Us',
    },
    {
        imgSrc: bgImage,
        imgAlt: 'Vibrant abstract painting with swirling blue and purple hues on a canvas.',
        title: 'Manufacturing and distributing premium-quality rice to aspiring nations for over 50 years.',
        description: `With India's largest pr   oduction facility, we proudly export over 300,000 tonnes of rice annually to 25 countries worldwide.`,
        ctaUrl: 'https://example.com',
        ctaText: 'Contact-Us',
    },
];

const MainSection = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

    const previous = () => {
        if (currentSlideIndex > 1) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        } else {
            setCurrentSlideIndex(slides.length);
        }
    };

    const next = () => {
        if (currentSlideIndex < slides.length) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        } else {
            setCurrentSlideIndex(1);
        }
    };

    return (
        <div className="relative h-[850px] w-full overflow-hidden my-auto pt-23">
            {/* previous button */}
            <button
                type="button"
                className="absolute left-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:outline-offset-0 dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60 dark:focus-visible:outline-white"
                aria-label="previous slide"
                onClick={previous}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="3"
                    className="size-5 md:size-6 pr-0.5"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                </svg>
            </button>

            {/* next button */}
            <button
                type="button"
                className="absolute right-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:outline-offset-0 dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60 dark:focus-visible:outline-white"
                aria-label="next slide"
                onClick={next}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="3"
                    className="size-5 md:size-6 pl-0.5"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
            </button>

            {/* slides */}
            <div className="relative min-h-[850px] w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 ${currentSlideIndex === index + 1 ? 'block' : 'hidden'}`}
                    >
                        {/* Title and description */}
                        <div className="lg:px-32 lg:py-52 absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-gradient-to-t from-neutral-950/85 to-transparent px-16 py-52 text-center">
                            <h3
                                className="w-full lg:w-[80%] poppins-extrabold text-2xl md:text-4xl lg:text-5xl font-bold text-white"
                                data-aos="fade-up"
                                aria-describedby={`slide${index + 1}Description`}
                            >
                                {slide.title}
                            </h3>
                            <p
                                className="lg:w-1/2 w-full poppins-medium md:text-base lg:text-xl text-white"
                                id={`slide${index + 1}Description`}
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                {slide.description}
                            </p>
                            <Button
                                data-aos="fade-up"
                                data-aos-delay="400"
                                type="button"
                                className="bg-yellow-50 text-lg font-extrabold px-12"
                            >
                                {slide.ctaText}
                            </Button>
                        </div>
                        <img
                            className="absolute w-full h-full inset-0 object-cover text-neutral-600 dark:text-neutral-300"
                            src={slide.imgSrc||""}
                            alt={slide.imgAlt}
                        />
                        
                    </div>
                ))}
            </div>

            {/* indicators */}
            <div
                className="absolute rounded-md bottom-3 md:bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-4 md:gap-3 px-1.5 py-1 md:px-2"
                role="group"
                aria-label="slides"
            >
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        className={`size-2 cursor-pointer rounded-full transition ${currentSlideIndex === index + 1 ? 'bg-neutral-300' : 'bg-neutral-300/50'}`}
                        onClick={() => setCurrentSlideIndex(index + 1)}
                        aria-label={`slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default MainSection;
