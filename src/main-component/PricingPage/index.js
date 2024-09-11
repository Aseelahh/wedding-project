import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import PricingSection from '../../components/PricingSection';
import PartnerSection from '../../components/PartnerSection';

const PricingPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <PricingSection ptClass={'tnone wpo-pricing-section-s2'}/>
            <PartnerSection tNone={'pb-120'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default PricingPage;
