import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero2 from '../../components/hero2';
import StorySection from '../../components/StorySection';
import CoupleSection2 from '../../components/CoupleSection2';
import VideoSection from '../../components/VideoSection'
import PortfolioSection2 from '../../components/PortfolioSection2';
import EventSection from '../../components/EventSection';
import RSVP from '../../components/RSVP';
import BlogSection from '../../components/BlogSection';
import Scrollbar from '../../components/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer';
import WeddingTime from '../../components/weddingTime';



const HomePage2 =() => {

    return(
        <Fragment>
            <Navbar/>
            <Hero2 heroClass={'wpo-hero-style-4'}/>
            <WeddingTime/>
            <CoupleSection2/>
            <StorySection/>
            <VideoSection/>
            <PortfolioSection2/>
            <RSVP/>
            <EventSection/>
            <PartnerSection/>
            <BlogSection/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage2;