import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import hero1 from '../../images/slider/slide-11.jpg'
import hero2 from '../../images/slider/slide-12.jpg'
import hero3 from '../../images/slider/slide-13.jpg'

import shape1 from '../../images/slider/shape5.png'
import shape2 from '../../images/slider/shape6.png'




class Hero4 extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="wpo-hero-slider wpo-hero-slider-s3">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Slider {...settings}>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="shape-1"><img src={shape1} alt=""/></div>
                                            <div className="slide-title">
                                                <h2>Gorgeous Gowns</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>The Most Wonderful Wedding Dress And Jewellery In The World.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/shop" className="theme-btn-s4">Shop Now</Link>
                                            </div>
                                            <div className="shape-2"><img src={shape2} alt=""/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="shape-1"><img src={shape1} alt=""/></div>
                                            <div className="slide-title">
                                                <h2>Gorgeous Gowns</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>The Most Wonderful Wedding Dress And Jewellery In The World.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/shop" className="theme-btn-s4">Shop Now</Link>
                                            </div>
                                            <div className="shape-2"><img src={shape2} alt=""/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="shape-1"><img src={shape1} alt=""/></div>
                                            <div className="slide-title">
                                                <h2>Gorgeous Gowns</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>The Most Wonderful Wedding Dress And Jewellery In The World.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/shop" className="theme-btn-s4">Shop Now</Link>
                                            </div>
                                            <div className="shape-2"><img src={shape2} alt=""/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero4;