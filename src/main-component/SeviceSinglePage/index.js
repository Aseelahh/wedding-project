import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service';
import { Link } from 'react-router-dom'
import Benefits from './benefits'
import ServiceSidebar from './sidebar'
import Footer from '../../components/footer';

const SeviceSinglePage = (props) => {
    const { id } = useParams()

    const serviceDetails = Services.find(item => item.id === id)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={serviceDetails.title} pagesub={'Service'} />
            <div className="wpo-service-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-minimal-wrap">
                                <div className="wpo-minimal-img">
                                    <img src={serviceDetails.ssImg} alt="" />
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <h5>Project Requirement</h5>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden in the middle.</p>
                                <p>The majority have suffered alteration in some form or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden.</p>

                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={serviceDetails.sinnerImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={serviceDetails.sinnerImg2} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="process-wrap">
                                    <h5>Our work process</h5>
                                    <div className="row">
                                        {Services.slice(0, 3).map((service, Sitem) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                                                <div className="process-item">
                                                    <div className="process-icon">
                                                        <i className={`fi ${service.fIcon1}`}></i>
                                                    </div>
                                                    <div className="process-text">
                                                        <h3><Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link></h3>
                                                        <p>The lower-numbered purposes are better understood and practiced </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Benefits />
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default SeviceSinglePage;
