import React from "react";
import LocationMap from "../LocationMap";

const Hero5 = (props) => {
  return (
    <section className="static-hero-s3">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="wpo-event-item">
                  <div className="wpo-event-text">
                    <h2>Obinna & Ifeh</h2>
                    <p>We Are Getting Married Sept 14,2024</p>
                    <ul>
                      <li>
                        Saturday, 14 Sep, 2024 <br />
                        11:00 AM – 9:00 PM
                      </li>
                      <li>Pleasant Event Center Obanta Avenue, off Ajao Str, Adeniyi Jones, Ikeja Lagos</li>
                      <li>
                        <LocationMap />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
