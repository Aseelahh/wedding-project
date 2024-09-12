import React from "react";
import SectionTitle from "../SectionTitle";
<<<<<<< HEAD
<<<<<<< HEAD
import ImagePicker from "../ImagePicker";

const ImageUploadSection = (props) => {
  return (
    <section
      className={`wpo-event-section section-padding ${props.eClass}`}
      id="image-upload"
    >
      <div className="container">
        <SectionTitle MainTitle={"Upload Captured Images"} />
        <div>
          <ImagePicker />
=======
import sImg1 from "../../images/event/1.jpg";
import sImg2 from "../../images/event/2.jpg";
import sImg3 from "../../images/event/3.jpg";
import LocationMap from "../LocationMap";
=======
import ImagePicker from "../ImagePicker";
>>>>>>> 046d4d6 (First image upload done. Fixing image not showing in cloud)

const ImageUploadSection = (props) => {
  return (
    <section
      className={`wpo-event-section section-padding ${props.eClass}`}
      id="image-upload"
    >
      <div className="container">
<<<<<<< HEAD
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
>>>>>>> 7ecd9e5 (Navigation clean up and set up image upload section)
=======
        <SectionTitle MainTitle={"Upload Captured Images"} />
        <div>
          <ImagePicker />
>>>>>>> 046d4d6 (First image upload done. Fixing image not showing in cloud)
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default ImageUploadSection;
=======
export default EventSection;
>>>>>>> 7ecd9e5 (Navigation clean up and set up image upload section)
=======
export default ImageUploadSection;
>>>>>>> 046d4d6 (First image upload done. Fixing image not showing in cloud)
