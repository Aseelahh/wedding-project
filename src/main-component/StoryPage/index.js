import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import CoupleSection2 from '../../components/CoupleSection2';
import PortfolioSection from '../../components/PortfolioSection';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import StorySection from '../../components/StorySection';
import PartnerSection from '../../components/PartnerSection';

const StoryPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Our Story'} pagesub={'Story'}/> 
            <CoupleSection2/>
            <StorySection/>
            <PortfolioSection pSclass={'pt-0'}/>
            <PartnerSection tNone={'pb-120'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default StoryPage;
