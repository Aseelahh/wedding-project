import React from 'react'
import LocationMap from '../Modal'


const Hero5 = (props) => {
    return(
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>Daniel & Jessica</h2>
                                        <p>We Are Getting Married Nov 22,2022</p>
                                        <ul>
                                            <li>Monday, 25 Sep, 2022 <br/>
                                                1:00 PM – 4:30 PM</li>
                                            <li>Estern Star Plaza, Road 123, USA</li>
                                            <li><LocationMap/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero5;