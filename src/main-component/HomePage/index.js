import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import StorySection from "../../components/StorySection";
import CoupleSection from "../../components/CoupleSection";
import PortfolioSection2 from "../../components/PortfolioSection2";
import EventSection from "../../components/ImageUploadSection";
import Scrollbar from "../../components/scrollbar";
import Footer from "../../components/footer";
<<<<<<< HEAD
<<<<<<< HEAD
import ImageUploadSection from "../../components/ImageUploadSection";
=======
import ImageUploadSection from "../../components/EventSection";
>>>>>>> 7ecd9e5 (Navigation clean up and set up image upload section)
=======
import ImageUploadSection from "../../components/ImageUploadSection";
>>>>>>> 046d4d6 (First image upload done. Fixing image not showing in cloud)

const HomePage = () => {
  return (
    <Fragment>
      <Navbar class={"wpo-site-header-s1"} />
      <Hero />
      <CoupleSection />
      <StorySection />
      <PortfolioSection2 />
      <ImageUploadSection />
      <EventSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;
