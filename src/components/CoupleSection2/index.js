import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import coupleImg1 from '../../images/couple/2.jpg'
import coupleImg2 from '../../images/couple/3.jpg'
 
class CoupleSection2 extends Component {

    render() {
        return(
            <section className={`couple-section-s2 section-padding ${this.props.cClass}`} id="couple">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xs-12">
                            <div className="couple-area clearfix">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="couple-item">
                                            <div className="couple-img">
                                                <img src={coupleImg1} alt=""/>
                                            </div>
                                            <div className="couple-text">
                                                <h3>Daniel Watson</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel facilisis.</p>
                                                <div className="social">
                                                    <ul>
                                                        <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                                        <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                                        <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="middle-couple-text">
                                            <Slide bottom cascade>
                                                <h2>
                                                    <span>L</span>
                                                    <span>o</span>
                                                    <span>v</span>
                                                    <span>e</span>
                                                </h2>
                                            </Slide>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="couple-item">
                                            <div className="couple-img">
                                                <img src={coupleImg2} alt=""/>
                                            </div>
                                            <div className="couple-text">
                                                <h3>Jessica Henry</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                                                    accumsan lacus vel facilisis.</p>
                                                <div className="social">
                                                    <ul>
                                                        <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                                        <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                                        <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}
 
export default CoupleSection2;