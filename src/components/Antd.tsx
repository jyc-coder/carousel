import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const Antd = () => {
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Carousel
      style={{
        width: 500,
      }}
    >
      <div>
        <div style={contentStyle}>반가워용</div>
      </div>
      <div>
        <div style={contentStyle}>안녕하세용</div>
      </div>
      <div>
        <div style={contentStyle}>좋은 하루</div>
      </div>
      <div>
        <div style={contentStyle}>보내새요</div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        </div>
      </div>
    </Carousel>
  );
};

export default Antd;
