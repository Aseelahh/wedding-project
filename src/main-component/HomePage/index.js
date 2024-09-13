import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import StorySection from "../../components/StorySection";
import CoupleSection from "../../components/CoupleSection";
import PortfolioSection2 from "../../components/PortfolioSection2";
import EventSection from "../../components/ImageUploadSection";
import Scrollbar from "../../components/scrollbar";
import Footer from "../../components/footer";
import ImageUploadSection from "../../components/ImageUploadSection";

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
