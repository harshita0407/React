import React, { useState } from 'react';

const images = [
  'https://img.freepik.com/free-photo/snow-mountain-blue-sky-leh-ladakh-india_1150-11114.jpg?ga=GA1.1.1888042844.1717693572&semt=ais_country_boost&w=740',
  'https://img.freepik.com/free-photo/snow-mountain-leh-india_1150-11109.jpg?ga=GA1.1.1888042844.1717693572&semt=ais_country_boost&w=740',
  'https://img.freepik.com/free-photo/beautiful-shot-top-mountain_181624-21611.jpg?ga=GA1.1.1888042844.1717693572&semt=ais_country_boost&w=740',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{textAlign:"center"}}>
      <img src={images[currentIndex]} alt="slide" style={{width:"600px",height:"300px"}} />
      <button onClick={prevSlide} style={{color:"black"}}>⟨</button>
      <button onClick={nextSlide} style={{color:"black"}}>⟩</button>
    </div>
  );
};
export default Slider;