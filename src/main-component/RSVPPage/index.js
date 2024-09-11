import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import RSVP from '../../components/RSVP';
import EventSection from '../../components/EventSection';

const RSVPPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'RSVP'} pagesub={'RSVP'}/> 
            <RSVP pt={'pt-120'}/>
            <EventSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RSVPPage;
