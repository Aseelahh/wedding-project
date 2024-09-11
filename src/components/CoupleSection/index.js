import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import coupleImg1 from '../../images/couple/1.jpg'
 
class CoupleSection extends Component {

    render() {
        return(
            <section className="couple-section section-padding" id="couple">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xs-12">
                            <div className="couple-area clearfix">
                                <div className="text-grid bride">
                                    <h3>Ifechukwu Chiedu</h3>
                                    <p>I cannot remember how life was without him, because ever since I met him the narrative changed and I realized there was a part of me that was dark and he lit it up. I love you very much Obim ❤️❤️ </p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <img src={require('../../../../feelings/src/images/wp2.png')}alt=""/>
                                    </div>
                                </div>
                                <div className="text-grid groom">
                                    <h3>Obinna Okeke</h3>
                                    <p>I did not think any day could surpass the day I met her in being the best day of my life but it is second only to the day she agreed to be my wife. It's a few days to our wedding, rather than thinking if i'm doing the right thing, i wish i asked her earlier. I love you ❤️.</p>
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
            </section>
            
        );
    }
}
 
export default CoupleSection;