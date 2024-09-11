import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'

import heros1 from '../../images/slider/shape5.png'
import heros2 from '../../images/slider/shape6.png'



class Hero2 extends Component {
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
            <section className={this.props.boxClass}>
                <div className={`wpo-hero-slider ${this.props.heroClass}`}>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <Slider {...settings}>
                                <div className="hero-slide">
                                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                        <div className="container-fluid">
                                            <div className="wedding-announcement">
                                                <div className="couple-text">
                                                    <div className="shape-1"><img src={heros1} alt="" /></div>
                                                    <h2>Daniel & Jessica</h2>
                                                    <p>We Are Getting Married Nov 22,2022</p>
                                                    <div className="shape-2"><img src={heros2} alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-slide">
                                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                        <div className="container-fluid">
                                            <div className="wedding-announcement">
                                                <div className="couple-text">
                                                    <div className="shape-1"><img src={heros1} alt="" /></div>
                                                    <h2>Daniel & Jessica</h2>
                                                    <p>We Are Getting Married Nov 22,2022</p>
                                                    <div className="shape-2"><img src={heros2} alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-slide">
                                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                        <div className="container-fluid">
                                            <div className="container-fluid">
                                                <div className="wedding-announcement">
                                                    <div className="couple-text">
                                                        <div className="shape-1"><img src={heros1} alt="" /></div>
                                                        <h2>Daniel & Jessica</h2>
                                                        <p>We Are Getting Married Nov 22,2022</p>
                                                        <div className="shape-2"><img src={heros2} alt="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero2;