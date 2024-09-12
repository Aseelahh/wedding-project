import React from "react";
import SectionTitle from "../SectionTitle";
import sImg1 from "../../images/TWP.png";
import sImg2 from "../../images/RTN.png";
import sImg3 from "../../images/AFTER.png";
import LocationMap from "../LocationMap";

const Events = [
  {
    Simg: sImg1,
    title: "White Wedding ",
    li1: "Saturday, 14 Sep, 2024 11:00 AM – 1:00 PM",
    li2: "St Peter Claver Catholic Church, Ajao Estate, Lagos",
  },
  {
    Simg: sImg2,
    title: "RECEPTION",
    li1: "Saturday, 14 Sep, 2024   1:00 PM – 4:00 PM",
    li2: "Pleasant Event Center Obanta Avenue, off Ajao Str, Adeniyi Jones, Ikeja Lagos",
  },

  {
    Simg: sImg3,
    title: "AFTER PARTY",
    li1: "Saturday, 14 Sep, 2024   4:00 PM – 9:00 PM",
    li2: "Pleasant Event Center Obanta Avenue, off Ajao Str, Adeniyi Jones, Ikeja Lagos",
  }
  
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
                        <LocationMap />
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
