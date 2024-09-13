import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero2 from "../../components/hero2";
import StorySection from "../../components/StorySection";
import CoupleSection2 from "../../components/CoupleSection2";
import EventSection from "../../components/EventSection";
import Scrollbar from "../../components/scrollbar";
import PartnerSection from "../../components/PartnerSection";
import Footer from "../../components/footer";
import WeddingTime from "../../components/weddingTime";

const HomePage2 = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero2 boxClass={"wpo-box-style"} heroClass={"wpo-hero-style-2"} />
      <WeddingTime />
      <CoupleSection2 />
      <StorySection />
      {/* <VideoSection /> */}
      {/* <PortfolioSection2 /> */}
      {/* <RSVP /> */}
      <EventSection />
      <PartnerSection />
      {/* <BlogSection /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage2;
