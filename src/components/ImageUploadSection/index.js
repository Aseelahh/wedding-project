import React from "react";
import SectionTitle from "../SectionTitle";
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
        </div>
      </div>
    </section>
  );
};

export default ImageUploadSection;
