import React, { useState, useEffect } from "react";
import TestimonialCard from "../testimonialCard/testimonialCard";
import { testimonialsData } from "../../data/data";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [carouselWidth, setCarouselWidth] = useState(window.innerWidth);

  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  useEffect(() => {
    const handleResize = () => setCarouselWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === testimonialsData.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, testimonialsData.length]);

  const transformValue = carouselWidth < 640 ? 118 : 35;

  return (
    <>
      <h2
        className="text-[--bgBlue] text-center sm:text-5xl text-4xl my-20"
        id="review"
      >
        Our Happy Customers
      </h2>
      <div>
        <div
          className={`flex gap-10 space-x-4 transition-transform duration-500 ${
            !isTransitioning ? "duration-0" : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * transformValue}%)`,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              className=""
              key={index}
              imgSrc={testimonial.image}
              text={testimonial.text}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsCarousel;
