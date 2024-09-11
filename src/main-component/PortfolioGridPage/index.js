import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import PortfolioSection2 from '../../components/PortfolioSection2';

const PortfolioGridPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Portfolio Grid'} pagesub={'Portfolio'}/> 
            <PortfolioSection2 pClass={'tb-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioGridPage;
