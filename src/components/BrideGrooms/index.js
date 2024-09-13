import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle";
import timg1 from '../../images/Aisha.jpeg'
import timg2 from '../../images/Etom.jpeg'
import timg3 from '../../images/Amala.jpeg'
import timg4 from '../../images/Ololade.jpeg'
import timg5 from '../../images/Mo.jpeg'
import timg6 from '../../images/Nehylow.jpeg'
import timg7 from '../../images/Folla.jpeg'
import timg8 from '../../images/Moyo.jpeg'
import timg9 from '../../images/Onyinbéke.jpeg'
import timg10 from '../../images/Chinelo.jpeg'
// import VideoSection from "../VideoSection";

const Brides = [
  {
    id:'1',
    tImg:timg1,
    name:'Aisha',
    title:'Friend',     
 },
 {
    id:'2',
    tImg:timg2,
    name:'Etom',
    title:'Sister',     
 },
 {
    id:'3',
    tImg:timg3,
    name:'Amala',
  title:'Cousin',     
 },
 {
    id:'4',
    tImg:timg4,
    name:'Ololade',
    title:'Friend',     
 },
 {
  id:'5',
  tImg:timg5,
  name:'Mo',
  title:'Friend',     
},
{
  id:'6',
  tImg:timg6,
  name:'Nehylow',
  title:'Friend',     
},
{
  id:'7',
  tImg:timg7,
  name:'Follaa',
  title:'Friend',     
},
{
  id:'8',
  tImg:timg8,
  name:'Moyo',
  title:'Friend',     
},
{
  id:'9',
  tImg:timg9,
  name:'Onyinbéke',
  title:'Friend',     
},
{
  id:'10',
  tImg:timg10,  
  name:'Chinelo',
  title:'Friend',   
},
]
const Grooms = [
  {
    id:'1',
    tImg:timg5,
    name:'Maria D’Soza',
    title:'Brother',     
 },
 {
    id:'2',
    tImg:timg6,
    name:'John Abraham',
    title:'Best Friend',     
 },
 {
    id:'3',
    tImg:timg7,
    name:'Elizabeth Anny',
    title:'Sister',     
 },
 {
    id:'4',
    tImg:timg8,
    name:'Robert Willy',
    title:'Friend',     
 },
 {
  id:'1',
  tImg:timg9,
  name:'Maria D’Soza',
  title:'Brother',     
},
{
  id:'1',
  tImg:timg10,
  name:'Maria D’Soza',
  title:'Brother',     
},
]


const BrideGrooms = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className="bride-groom-section">
      <div className="wpo-team-section section-padding pt-120">
        <div className="container">
          <SectionTitle MainTitle={'Bridesmaids'} />
          <div className="wpo-team-wrap">
            <div className="row">
              {Brides.slice(0, 11).map((Bride, tm) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={tm}>
                    <div className="wpo-team-item">
                      <div className="wpo-team-img">
                        <img src={Bride.tImg} alt="" />
                      </div>
                      <div className="wpo-team-text">
                        <h3>{Bride.name}</h3>
                        <span>{Bride.title}</span>
                        {/* <ul>
                          <li><Link onClick={ClickHandler} to="/"> <i className="ti-facebook"></i></Link></li>
                          <li><Link onClick={ClickHandler} to="/"> <i className="ti-twitter-alt"></i></Link></li>
                          <li><Link onClick={ClickHandler} to="/"> <i className="ti-linkedin"></i></Link></li>
                          <li><Link onClick={ClickHandler} to="/"> <i className="ti-instagram"></i></Link></li>
                        </ul> */}
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <VideoSection/> */}
      <div className="wpo-team-section pt-120 section-padding">
        <div className="container">
          <SectionTitle MainTitle={'Groomsmen'} />
          <div className="wpo-team-wrap">
            <div className="row">
              {Grooms.slice(0, 6).map((Groom, gm) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={gm}>
                    <div className="wpo-team-item">
                      <div className="wpo-team-img">
                        <img src={Groom.tImg} alt="" />
                      </div>
                      <div className="wpo-team-text">
                        <h3>{Groom.name}</h3>
                        <span>{Groom.title}</span>
                        {/* <ul>
                          <li><Link onClick={ClickHandler} to="/"> <i className="ti-facebook"></i></Link></li>
                          <li><Link onClick={ClickHandler} to="/"> <i className="ti-twitter-alt"></i></Link></li>
                          <li><Link onClick={ClickHandler} to="/"> <i className="ti-linkedin"></i></Link></li>
                          <li><Link onClick={ClickHandler} to="/"> <i className="ti-instagram"></i></Link></li>
                        </ul> */}
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrideGrooms;