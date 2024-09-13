import React from "react";
import SectionTitle from "../SectionTitle";
import sImg1 from "../../images/event/1.jpg";
import sImg2 from "../../images/event/2.jpg";
import sImg3 from "../../images/event/3.jpg";
import LocationMap from "../LocationMap";

const Events = [
  {
    Simg: sImg1,
    title: "White Wedding ",
    li1: "Saturday, 14 Sep, 2024 11:00 AM – 1:00 PM",
    li2: "St Peter Claver Catholic Church, Ajao Estate, Lagos",
    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31709.219725381783!2d3.3236215140273444!3d6.565475213829487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d6.580847599999999!2d3.3554434!4m5!1s0x103b8e6ec4b3c3a9%3A0xa39dc77920b1dc36!2sG8QF%2BFVV%20St.%20Peter%20Claver%20Catholic%20Church%2C%20Chivita%20Ave%2C%20Isolo%2C%20Lagos%20102214%2C%20Lagos!3m2!1d6.5387083!2d3.3245204999999998!5e0!3m2!1sen!2sng!4v1726190853023!5m2!1sen!2sng",
  },
  {
    Simg: sImg2,
    title: "RECEPTION",
    li1: "Saturday, 14 Sep, 2024   1:00 PM – 4:00 PM",
    li2: "Pleasant Event Center Obanta Avenue, off Ajao Str, Adeniyi Jones, Ikeja Lagos",
    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d15853.770115486812!2d3.338473758393812!3d6.591789994429718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d6.5809413999999995!2d3.3553563!4m5!1s0x103b93e97095d7b1%3A0x7e4717bc79dccd3c!2sPleasant%20Event%20Center%2C%201%20Obanta%20Avenue%2C%20Off%20Ajao%20Rd%2C%20Ikeja%2C%20Lagos!3m2!1d6.6029031!2d3.3403026!5e0!3m2!1sen!2sng!4v1726190949395!5m2!1sen!2sng",
  },

  {
    Simg: sImg3,
    title: "AFTER PARTY",
    li1: "Saturday, 14 Sep, 2024   4:00 PM – 9:00 PM",
    li2: "Pleasant Event Center Obanta Avenue, off Ajao Str, Adeniyi Jones, Ikeja Lagos",
    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d15853.770115486812!2d3.338473758393812!3d6.591789994429718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d6.5809413999999995!2d3.3553563!4m5!1s0x103b93e97095d7b1%3A0x7e4717bc79dccd3c!2sPleasant%20Event%20Center%2C%201%20Obanta%20Avenue%2C%20Off%20Ajao%20Rd%2C%20Ikeja%2C%20Lagos!3m2!1d6.6029031!2d3.3403026!5e0!3m2!1sen!2sng!4v1726190949395!5m2!1sen!2sng",
  },
];

const EventSection = (props) => {
  return (
    <section
      className={`wpo-event-section section-padding ${props.eClass}`}
      id="events"
    >
      <div className="container">
        <SectionTitle MainTitle={"TIME AND PLACE"} />
        <div className="wpo-event-wrap">
          <div className="row">
            {Events.map((event, eitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                <div className="wpo-event-item">
                  <div className="wpo-event-img">
                    <img src={event.Simg} alt="" />
                  </div>
                  <div className="wpo-event-text">
                    <h2>{event.title}</h2>
                    <ul>
                      <li>{event.li1}</li>
                      <li>{event.li2}</li>
                      <li>
                        <LocationMap loc={event.iframe_src} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
