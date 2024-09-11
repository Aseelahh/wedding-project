import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import About from '../../components/about'
import ServiceSection from '../../components/ServiceSection';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/team'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ProjectSection from '../../components/ProjectSection';
import PricingSection from '../../components/PricingSection';

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About pt={'pt-120'}/>
            <ServiceSection pbClass={'pb-0'}/>
            <FunFact fClass={'pt-0'}/>
            <ProjectSection/>
            <PricingSection/>
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
