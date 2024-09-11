import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import sImg1 from "../../images/story/FM.png";
import sImg2 from "../../images/story/FD.png";
import sImg3 from "../../images/story/MEM.png";
import sImg4 from "../../images/story/MP.png";

import sIcon1 from "../../images/story/1.png";
import sIcon2 from "../../images/story/2.png";
import sIcon3 from "../../images/story/3.png";
import sIcon4 from "../../images/story/4.png";

import Shape from "../../images/story/shape.jpg";

const StorySection = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const Tabs = [
    {
      Id: "1",
      tabItem: "First Meet",
    },
    {
      Id: "2",
      tabItem: "First Date",
    },
    {
      Id: "3",
      tabItem: "Favorite memory",
    },
    {
      Id: "4",
      tabItem: "Marriage Proposal",
    },
  ];

  const Story = [
    {
      Id: "1",
      sImg: sImg1,
      sIcon: sIcon1,
      Shape: Shape,
      sTitle: "First Time We Met",
      date: "Oct 23 ,2021",
      description:
        "I remember the day we met. You walked into the room and i could not help but notice how reserved and poise you were. You looked incredibly handsome and i could not take my eyes off you. However,my heart sank when i saw the ring on your finger. I thought to myself, wow, his wife is very lucky to have him. Little did i know, I would soon become that lucky wife. Now, I am proud to say that i am your wife and i feel incredibly blessed to have you in my life.",
    },
    {
      Id: "2",
      sImg: sImg2,
      sIcon: sIcon2,
      Shape: Shape,
      sTitle: "First Date",
      date: "Mar 29,2022",
      description:
        ' Our first date at Kappadocia was really cute. " He sang a birthday song for me. I felt really shy and happy "."She was grinning from ear to ear and looked a bit nervous during our date. I kept telling her she was the most beautiful birthday girl i have ever seen. It was one of the best dates of my life " ',
    },
    {
      Id: "3",
      sImg: sImg3,
      sIcon: sIcon3,
      Shape: Shape,
      sTitle: "Favorite memory",
      date: "Nov 17,2021",
      description:
        " I could never forget this day. You picked me up from my hostel after my ICAN exam and we went to chill at Presken. That's when you asked me to be your girlfriend and without any hesitation, I said yes! Sometimes, the answer to a question is already clear before you even ask it.",
    },
    {
      Id: "4",
      sImg: sImg4,
      sIcon: sIcon4,
      Shape: Shape,
      sTitle: "Marriage Proposal",
      date: "Dec 16,2023",
      description:
        "From the first day i met you, i knew it was you. 'Saying yes to him was the easiest thing I've ever done, without a second thought'-'Asking her to marry me was the best decision of my life' ",
    },
  ];

  return (
    <section className="wpo-story-section section-padding" id="story">
      <div className="container">
        <SectionTitle MainTitle={"Our love story"} />
        <div className="row align-items-center justify-content-center">
          <div className="col col-lg-12 col-12">
            <div className="tab-area">
              <div className="tablinks">
                <Nav tabs className="service-thumbs-outer">
                  {Tabs.map((tab, titem) => (
                    <NavItem key={titem}>
                      <NavLink
                        className={`service-thumb ${classnames({
                          active: activeTab === tab.Id,
                        })}`}
                        onClick={() => {
                          toggle(tab.Id);
                        }}
                      >
                        {tab.tabItem}
                        <span className="number">{tab.tabNumber}</span>
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </div>
              <TabContent activeTab={activeTab}>
                {Story.map((story, Sitem) => (
                  <TabPane tabId={story.Id} key={Sitem}>
                    <div className="wpo-story-item">
                      <div className="wpo-story-img">
                        <img
                          src={story.sImg}
                          alt=""
                        />
                      </div>
                      <div className="wpo-story-content">
                        <div className="wpo-story-content-inner">
                          <span>
                            <img
                              src={require("../../images/story/1.png")}
                              alt=""
                            />
                          </span>
                          <h2>{story.sTitle}</h2>
                          <span>{story.date}</span>
                          <p>{story.description}</p>
                          <div className="border-shape">
                            <img src={story.Shape} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                ))}
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
