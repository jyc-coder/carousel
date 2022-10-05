import {ReactNode, useEffect, useState} from 'react';
import styled from '@emotion/styled';

interface CaourselProps {
  children: ReactNode | ReactNode[];
  loop?: boolean;
  autoLoop?: boolean;
  autoTime?: number;
  transitionTime?: number;
  direction?: 'column' | 'row';
}

const CarouselContainer = styled.div<{
  direction: 'column' | 'row';
}>`
  width: 500px;
  height: 500px;
  background-color: #eee;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: ${({direction}) => direction};
`;

const CarouselItem = styled.div<{
  offset: number;
  transitionTime: number;
  direction?: 'column' | 'row';
}>`
  width: 500px;
  height: 500px;
  min-width: 500px;
  min-height: 500px;
  transition: transform ${({transitionTime}) => transitionTime}ms ease-in;
  transform: translate${({direction}) => (direction === 'row' ? 'X' : 'Y')}(${({offset}) => -offset * 100}%);
`;

const CarouselButton = styled.div<{
  position: 'left' | 'right';
  direction?: 'column' | 'row';
}>`
  z-index: 999;
  cursor: pointer;
  width: 50px;
  height: 50px;
  transition: all 1s;
  background-color: #555;
  color: white;
  position: absolute;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  top: calc(
    ${({position, direction}) => (direction === 'row' ? '50% - 25px' : position === 'left' ? 0 : '100% - 50px')}
  );
  left: calc(
    ${({position, direction}) => (direction === 'column' ? '50% - 25px' : position === 'left' ? 0 : '100% - 50px')}
  );
  ${({direction}) => direction === 'column' && 'transform: rotate(90deg)'};
`;
const Carousel = ({
  children: propsChildren,
  loop,
  autoLoop,
  autoTime = 3000,
  transitionTime = 1000,
  direction = 'row',
}: CaourselProps) => {
  const children = Array.isArray(propsChildren) ? propsChildren : [propsChildren];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (autoLoop) {
      const intv = setInterval(() => setIdx((prev) => (prev < children.length - 1 ? prev + 1 : 0)), autoTime);
      return () => clearInterval(intv);
    }
  }, [autoLoop, autoTime, children.length]);

  return (
    <CarouselContainer direction={direction}>
      <CarouselButton
        direction={direction}
        onClick={() => {
          if (idx > 0) setIdx((prev) => prev - 1);
          else if (loop) {
            setIdx(children.length - 1);
          }
        }}
        position="left"
      >
        {'<'}
      </CarouselButton>
      {children.map((child, index) => (
        <CarouselItem transitionTime={transitionTime} offset={idx} key={index} direction={direction}>
          {child}
        </CarouselItem>
      ))}
      <CarouselButton
        direction={direction}
        onClick={() => {
          if (idx < children.length - 1) setIdx((prev) => prev + 1);
          else if (loop) {
            setIdx(0);
          }
        }}
        position="right"
      >
        {'>'}
      </CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
