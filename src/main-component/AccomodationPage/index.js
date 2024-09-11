import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import CoupleSection2 from '../../components/CoupleSection2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import WeddingTime from '../../components/weddingTime';
import EventSection from '../../components/EventSection';

const AccomodationPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Accomodation'} pagesub={'Accomodation'}/> 
            <WeddingTime wdClass={'section-padding mt-0'}/>
            <CoupleSection2 cClass={'pb-120'}/>
            <EventSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AccomodationPage;
