import React from "react";
import SectionTitle from "../SectionTitle";

const ImageUploadSection = (props) => {
  return (
    <section
      className={`wpo-event-section section-padding ${props.eClass}`}
      id="image-upload"
    >
      <div className="container">
        <SectionTitle MainTitle={"TIME AND PLACE"} />
        <div></div>
      </div>
    </section>
  );
};

export default ImageUploadSection;
