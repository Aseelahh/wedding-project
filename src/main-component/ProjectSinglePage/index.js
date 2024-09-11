import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import Projects from '../../api/projects'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const ProjectSinglePage = (props) => {
    const { id } = useParams()

    const projectDetails = Projects.find(item => item.id === id)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={projectDetails.title} pagesub={'Service'} />
            <section className="wpo-portfolio-single-section section-padding">
                <div className="container">
                    <div className="portfolio-single-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="portfolio-single-img">
                                    <img src={projectDetails.pSimg} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="portfolio-single-text">
                                    <h2>{projectDetails.title}</h2>
                                    <span>New York – 1075 Firs Avenue</span>
                                    <p>Randomised words which don't look even slightly believable. If you are going to use a
                                        passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                                        in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                                        predefined chunks as necessary, making this the first true generator on the
                                        Internet.</p>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form, by injected humour, or randomised words which
                                        don't look even slightly believable. </p>
                                    <div className="wpo-portfolio-single-content-des">
                                        <ul>
                                            <li>Client :<span>Robert William</span></li>
                                            <li>Location :<span>7 Lake Street,London</span></li>
                                            <li>Date :<span>20 Apr 2021</span></li>
                                            <li>Duration : <span>3 Month</span></li>
                                            <li>Tag :<span>Wedding, Planning</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="wpo-portfolio-section-s3 section-padding">
                        <h2 className="hidden">some</h2>
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio-grids gallery-container clearfix">
                                        {Projects.slice(0, 3).map((project, pitem) => (
                                            <div className="grid" key={pitem}>
                                                <div className="img-holder">
                                                    <ReactFancyBox
                                                        thumbnail={project.pimg1}
                                                        image={project.pimg1}
                                                        />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="pagi">
                        <ul>
                            <li><Link onClick={ClickHandler} to="/project-single/1"><i className="fi flaticon-left-arrow"></i> Previous</Link></li>
                            <li><Link onClick={ClickHandler} to="/project-single/2">Next <i className="fi flaticon-right-arrow-1"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectSinglePage;
