import React from 'react';
import Antd from './components/Antd';
import Carousel from './components/Carousel';
import Responsive from './components/Responsive';
import Slick from './components/Slick';
function App() {
  return (
    <div>
      <Carousel loop autoLoop autoTime={2000} transitionTime={700} direction="column">
        <div>hello</div>
        <div>world</div>
        <div>반가워요</div>
        <div>좋은</div>
        <div>하루</div>
      </Carousel>
      {/*   <div>Antd</div>
      <Antd />
      <div>Responsive</div>
      <Responsive />
      <div>Slick</div>
      <Slick /> */}
    </div>
  );
}

export default App;
