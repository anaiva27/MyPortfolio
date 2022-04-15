import React, { useState } from "react";
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
import project4 from "../../img/s4.png";
import polygonB from "../../img/black-polygon.png";
import polygonBL from "../../img/lg-black-polygon.png";
import polygonW from "../../img/white-polygon.png";
import wp from "../../img/wp3.jpg";
import { FiGithub } from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import { TiSocialLinkedin } from "react-icons/ti";
import '../../fonts/DrukWideBoldRegular.ttf'

const Home = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const work = [
    {
      name: "Full Stack Student Portal",
      link: "https://vast-shore-72326.herokuapp.com/",
      imageSrc: project1,
      github: "https://github.com/larrygamboa/project2"
    },
    {
      name: "Weather Dashboard",
      link: "https://anaiva27.github.io/Weather-Application/",
      imageSrc: project2,
      github: "https://github.com/anaiva27/Weather-Application"
    },
    {
      name: "Wedding Planner",
      link: "https://mbubel.github.io/projectwedding/",
      imageSrc: project3,
      github: "https://github.com/mbubel/projectwedding"
    },
    {
      name: "Full Stack Online Store",
      link: "#",
      imageSrc: project4,
    },
  ];

  const handleContactClick = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

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
            <h3 className="first">Anastasia</h3>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
          <div className="name">
            <h3 className="last">Warren</h3>
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
                      <a href={work.github} target="_blank" key={work.github}>Github repo</a>
                    </div>
                    <div className="count">0{index + 1}</div>
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
              My name is Anastasia Warren. I’m a passionate software developer
              experienced in front end, back end and database management. I have
              a Bachelor's degree in Information technologies from a State
              Technical University and I'm working on getting a certificate in
              full-stack development from University of San Diego.{" "}
            </p>
            <p className="bio">
              Proficient in designing, testing and debugging processes, with an
              ability to effectively manage multiple projects, conducting
              extensive market and consumer research and optimizing web
              functionalities that improve data retrieval.{" "}
            </p>
            <p className="bio">
              Along with my obsession for perfecting code comes my unbeatable
              positive attitude. I’m passionate about finding the most efficient
              solutions for my team and my resiliency in problem solving. An
              engaging personality and excellent soft skills provide the
              confidence to easily fit in to any team setting and be an
              independent self starter if needed as well.{" "}
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

      <ScrollPage page={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontsize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  cursor: "pointer",
                  letterSpacing: "2px"
                }}
                onClick={() =>
                  handleContactClick("https://github.com/anaiva27")
                }
              >
                <FiGithub /> 
                &nbsp; GitHub anaiva27</div>
            </Animator>

            <Animator animation={MoveIn(1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  cursor: "pointer",
                  letterSpacing: "2px"
                }}
                onClick={() =>
                  handleContactClick("https://www.linkedin.com/in/anastasia27w/")
                }
              >
                <TiSocialLinkedin /> 
                &nbsp; LinkedIn anaiva27</div>
            </Animator>

            <Animator animation={MoveOut(-1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  cursor: "pointer",
                  letterSpacing: "2px"
                }}
                onClick={() =>
                  handleContactClick("mailto:ana.ivas27@gmail.com")
                }
              >
                <FiMail /> 
                &nbsp; email ana.ivas27@gmail.com</div>
            </Animator>
          </span>
        </div>
      </ScrollPage>


    </ScrollContainer>
  );
};

export default Home;
