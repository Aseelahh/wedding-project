import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-5.jpg'
import hero2 from '../../images/slider/slide-6.jpg'
import hero3 from '../../images/slider/slide-7.jpg'

import heros1 from '../../images/slider/shape7.png'
import heros2 from '../../images/slider/shape8.png'



class Hero3 extends Component {
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
            <div className="wpo-hero-slider wpo-hero-style-3">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Slider {...settings}>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title-sub">
                                                <span>
                                                    <i><img src={heros1} alt="" /></i>
                                                    Welcome To Feelings
                                                    <i><img src={heros2} alt="" /></i>
                                                </span>
                                            </div>
                                            <div className="slide-title">
                                                <h2>Making Memory That Last Forever</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Plan Your Wedding</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title-sub">
                                                <span>
                                                    <i><img src={heros1} alt="" /></i>
                                                    Welcome To Feelings
                                                    <i><img src={heros2} alt="" /></i>
                                                </span>
                                            </div>
                                            <div className="slide-title">
                                                <h2>Making Memory That Last Forever</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Plan Your Wedding</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title-sub">
                                                <span>
                                                    <i><img src={heros1} alt="" /></i>
                                                    Welcome To Feelings
                                                    <i><img src={heros2} alt="" /></i>
                                                </span>
                                            </div>
                                            <div className="slide-title">
                                                <h2>Making Memory That Last Forever</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Plan Your Wedding</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero3;