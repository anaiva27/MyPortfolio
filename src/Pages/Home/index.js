import React, { useState} from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import "./style.css";
import headerImage from "../../img/headerImage.png";
import headerImage2 from "../../img/headerImage22.jpg";
import project1 from "../../img/s1.jpg";
import project2 from "../../img/s2.jpg";
import project3 from "../../img/s3.jpg";
import polygonB from "../../img/black-polygon.png";
import polygonBL from "../../img/lg-black-polygon.png";
import polygonW from "../../img/white-polygon.png";
import wp from "../../img/wp3.jpg";

const Home = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const work = [ 
    {
      name: "Project 1",
      link: "#",
      imageSrc: project1,
    },
    {
      name: "Project 2",
      link: "#",
      imageSrc: project2,
    },
    {
      name: "Project 3",
      link: "#",
      imageSrc: project3,
    },
    {
      name: "Project 3",
      link: "#",
      imageSrc: project3,
    },
  ];
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="img-container">
            <img src={headerImage2} alt="header image" />
            <div className="black-background"></div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
          <div className="name">
            <h2 className="first">Anastasia</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
          <div className="name">
            <h2 className="last">Warren</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
          <div className="position">
            <div></div>
            <h2 className="last">
              {/* Front-End, Back-End, Database experience */}
              Software Developer
            </h2>
          </div>
        </Animator>
      </ScrollPage>

      {/* section 2 */}
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title">Portfolio</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="portfolio-content">
            {work?.map((work, index) => {
              return (
                <a href={work.link} target="_blank" key={work.name}>
                  <div className="portfolio-card">
                    <div className="project-image">
                      <img src={work.imageSrc} alt={work.name} />
                    </div>
                    <div className="portfolio-title">
                      <h3>{work.name}</h3>
                    </div>
                    <div className="count">0{index+1}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </Animator>
      </ScrollPage>

            {/* section 3 */}

            <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title about-me">About Me</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
          <div className="background-image-container">
            <img src={polygonBL} alt="my picture" />
            <div className="black-background"></div>
          </div>
          </Animator>

          <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
            <div className="details">
              <h2 className="greetings">Hello,</h2>
              <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo, id doloremque eligendi enim ex amet, dolor rerum vel nobis dolorum qui? At maiores dignissimos perferendis laborum fuga expedita dolorem?
              </p>
              <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo, id doloremque eligendi enim ex amet, dolor rerum vel nobis dolorum qui? At maiores dignissimos perferendis laborum fuga expedita dolorem?
              </p>
              <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo, id doloremque eligendi enim ex amet, dolor rerum vel nobis dolorum qui? At maiores dignissimos perferendis laborum fuga expedita dolorem?
              </p>
            </div>
            </Animator>
      </ScrollPage>

       {/* section 4 */}

       <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title contact">Contact</div>
        </Animator>
      </ScrollPage>


    </ScrollContainer>
  );
};

export default Home;
