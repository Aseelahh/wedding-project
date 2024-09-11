import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ServiceSection from '../../components/ServiceSection';
import FunFact from '../../components/FunFact';
import PricingSection from '../../components/PricingSection';
import Logo from "../../images/logo.png";

const ServicePageS2 =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection pbClass={'pt-70'}/>
            <FunFact fClass={'wpo-fun-fact-section-s2 section-padding pt-0'}/>
            <PricingSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePageS2;
