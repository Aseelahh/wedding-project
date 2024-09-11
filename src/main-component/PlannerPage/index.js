import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import TeamSection from '../../components/team';

const PlannerPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Our Planners'} pagesub={'Planners'}/> 
            <TeamSection pt={'pt-120'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PlannerPage;
