import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const App: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <div style={{ padding: 20 }}>
            <Carousel autoplay afterChange={onChange}>
                <div>
                    <h3 style={{ ...contentStyle, background: '#364d79' }}>1</h3>
                </div>
                <div>
                    <h3 style={{ ...contentStyle, background: '#53b1aa' }}>2</h3>
                </div>
                <div>
                    <h3 style={{ ...contentStyle, background: '#65b153' }}>3</h3>
                </div>
                <div>
                    <h3 style={{ ...contentStyle, background: '#b1a153' }}>4</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default App;