import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import StorySection from "../../components/StorySection";
import CoupleSection from "../../components/CoupleSection";
// import VideoSection from "../../components/VideoSection";
import PortfolioSection2 from "../../components/PortfolioSection2";
import EventSection from "../../components/ImageUploadSection";
import RSVP from "../../components/RSVP";
// import BlogSection from "../../components/BlogSection";
import Scrollbar from "../../components/scrollbar";
import PartnerSection from "../../components/PartnerSection";
import Footer from "../../components/footer";
import ImageUploadSection from "../../components/ImageUploadSection";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar class={"wpo-site-header-s1"} />
      <Hero />
      <CoupleSection />
      <StorySection />
      {/* <VideoSection /> */}
      <PortfolioSection2 />
<<<<<<< HEAD
=======
      <ImageUploadSection />
>>>>>>> 2143ceb (ui-updated)
      {/* <RSVP /> */}
      <EventSection />
      {/* <PartnerSection />
       <BlogSection /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;
