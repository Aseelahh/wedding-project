import React from 'react'
import SectionTitle from '../SectionTitle'
import pImg1 from '../../images/RD6.png'
import pImg2 from '../../images/RD10.png'
import pImg3 from '../../images/RD2.png'
import pImg4 from '../../images/RD3.png'
import pImg5 from '../../images/RD4.png'
import pImg6 from '../../images/RD5.png'
import pImg7 from '../../images/RD.png'
import pImg8 from '../../images/RD7.png'
import pImg9 from '../../images/RD8.png'
import ReactFancyBox from '../../main-component/ProjectSinglePage/ReactFancyBox'
// import ReactFancyBox from 'react-fancybox'
// import 'react-fancybox/lib/fancybox.css'

const Portfolios = [
  {
    Pimg: pImg1,
  },
  {
    Pimg: pImg2,
  },
  {
    Pimg: pImg3,
  },
  {
    Pimg: pImg4,
  },
  {
    Pimg: pImg5,
  },
  {
    Pimg: pImg6,
  },
  {
    Pimg: pImg7,
  },
  {
    Pimg: pImg8,
  },
  {
    Pimg: pImg9,
  },
];

const PortfolioSection2 = (props) => {
  return (
    <section
      className={`wpo-portfolio-section section-padding ${props.pClass}`}
      id="gallery"
    >
      <div className="container">
        <SectionTitle MainTitle={"Captured Moments"} />
        <div className="sortable-gallery">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-grids gallery-container clearfix">
                {Portfolios.map((portfolio, pitem) => (
                  <div className="grid" key={pitem}>
                    <div className="img-holder">
                      <ReactFancyBox
                        thumbnail={portfolio.Pimg}
                        image={portfolio.Pimg}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection2;
