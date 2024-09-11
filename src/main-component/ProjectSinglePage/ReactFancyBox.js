import React, { useEffect } from 'react';
import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox.css";

const ReactFancyBox = ({ thumbnail, image }) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Optional configuration
    });

    return () => {
      Fancybox.destroy(); // Clean up
    };
  }, []);

  return (
    <div>
      <a data-fancybox="gallery" href={image}>
        <img src={thumbnail} alt="Thumbnail 1" />
      </a>
    </div>
  );
};

export default ReactFancyBox;
