
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function MainSlider(props) {
    const { 
        children,
        className,
        sliderType = 'main-slider'
    } = props;
    const [currentSlide, setcurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState();
    var settings = 
        sliderType === 'main-slider' &&
        {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 8000,
            adaptiveHeight: false,
            beforeChange: (current) => {
                setcurrentSlide(current + 1)
            },
            afterChange: (current) => {
                setcurrentSlide(current + 1);
            },
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        fade: false
                    }
                }
            ]
        } || sliderType === 'mobile-to-slider' &&
        {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            autoplay: true,
            autoplaySpeed: 8000,
            centerMode: true,
            responsive: [
                {
                  breakpoint: 991,
                },
                {
                  breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
                  settings: 'unslick'
                }
              ]
        }

    const slider = React.useRef(null);

    const handlePrevSlide = () => {
        slider.current.slickPrev();
    };
    const handleNextSlide = () => {
        slider.current.slickNext();
    };

    useEffect(() => {
        setTotalSlides(slider.current.props.children.length);
    }, []);

    return (
        <>
            <div className={`bf-main-slider--parent ${sliderType === 'mobile-to-slider' ? 'bf-mobile-to-slider' : ''}`}>
                <Slider {...settings} className={className ? className : ''} ref={slider}>
                    {children}
                </Slider>
                <div className={`slick-arrow-container ${currentSlide === 1 ? 'slick-arrow-container--first-slide' : ''} ${currentSlide === totalSlides ? 'slick-arrow-container--last-slide' : ''}`}>
                    <button className={`slick-arrow slick-prev`} onClick={handlePrevSlide}><i className={'icon icon--back-arrow'}></i></button>
                    <button className={`slick-arrow slick-next`} onClick={handleNextSlide}><i className={'icon icon--back-arrow'}></i></button>
                </div>
            </div>
        </>
    );
}

