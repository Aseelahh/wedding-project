import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ServiceSection2 from '../../components/ServiceSection2';
import FunFact from '../../components/FunFact';
import PricingSection from '../../components/PricingSection';

const ServicePage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection2 sSClass={'wpo-service-section-s3'}/>
            <FunFact fClass={'wpo-fun-fact-section-s2 section-padding pt-0'}/>
            <PricingSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;
