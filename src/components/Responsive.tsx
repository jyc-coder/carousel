import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Responsive = () => {
  return (
    <Carousel infiniteLoop>
      <div
        style={{
          height: 500,
          background: 'red',
        }}
      >
        hello
      </div>
      <div
        style={{
          height: 500,
          background: 'yellow',
        }}
      >
        hello2
      </div>
      <div
        style={{
          height: 500,
          background: 'green',
        }}
      >
        hello3
      </div>
    </Carousel>
  );
};

export default Responsive;
