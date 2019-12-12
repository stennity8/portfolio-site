import React from 'react';
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
// import Showcase from '../components/Showcase'

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import myImage from '../assets/images/2018_10_Shawn-Tennity.jpg';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

const IndexPage = () => {
  const animation = useSpring({
    config: { duration: 700 },
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return (
    <Layout>
      <Header />

      {/* <header className="masthead">
        <VisibilitySensor partialVisibility>
          <div className="container d-flex h-100 align-items-center">
            <animated.div style={animation} className="mx-auto text-center">
              <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
              <h2 className="text-white-75 mx-auto mt-2 mb-5">
                {config.subHeading}
              </h2>
              <Scroll type="id" element="projects">
                <a href="#projects" className="btn btn-primary">
                  Projects
            </a>
              </Scroll>
            </animated.div>
          </div>
        </VisibilitySensor>
      </header> */}
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">

          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0
                }}
              >
                {props =>
                  <div style={{ ...props }} className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
                    <h2 className="text-white-75 mx-auto mt-2 mb-5">
                      {config.subHeading}
                    </h2>
                    <Scroll type="id" element="projects">
                      <a href="#projects" className="btn btn-primary">
                        Projects
                        </a>
                    </Scroll>
                  </div>
                }
              </Spring>
            )}
          </VisibilitySensor>
        </div>
      </header>

      <section id="projects" className="projects-section bg-light">
        <div className="container">

          <h1 className="text-center">Projects</h1>
          {/* <VisibilitySensor partialVisibility onChange={(isVisible) => setHeaderVisibility(isVisible)}> */}
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={300}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(400px)"
                }}
              >
                {props =>
                  <div className="row align-items-center no-gutters mb-4 mb-lg-5" style={{ ...props }}>
                    <div className="col-xl-8 col-lg-7">
                      <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
                    </div>
                    <div className="col-xl-4 col-lg-5">
                      <div className="featured-text text-center text-lg-left">
                        <h4>Shoreline</h4>
                        <p className="text-black mb-0">
                          Grayscale is open source and MIT licensed. This means you can
                          use it for any project - even commercial projects! Download it,
                          customize it, and publish your website!
                  </p>
                        <div className="social d-flex justify-content-center mt-3">
                          <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                            <i className="fab fa-github"></i>
                            GitHub
                    </a>
                          <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                            <i className="fa fa-cog"></i>
                            Demo
                    </a>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </Spring>
            )}
          </VisibilitySensor>

          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Shoreline</h4>
                <p className="text-black mb-0">
                  Grayscale is open source and MIT licensed. This means you can
                  use it for any project - even commercial projects! Download it,
                  customize it, and publish your website!
              </p>
                <div className="social d-flex justify-content-center mt-3">
                  <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                    <i className="fab fa-github"></i>
                    GitHub
                </a>
                  <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                    <i className="fa fa-cog"></i>
                    Demo
                </a>
                </div>
              </div>
            </div>
          </div>


          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6 fill">
              <img className="img-fluid" src={demoImage1} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Misty</h4>
                    <p className="mb-0 text-white">
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                  </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                    <div className="d-flex justify-content-center mt-3">
                      <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                        <i className="fab fa-github"></i>
                        GitHub
                    </a>
                      <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                        <i className="fa fa-cog"></i>
                        Demo
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6 fill">
              <img className="img-fluid" src={demoImage2} alt="" />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Mountains</h4>
                    <p className="mb-0 text-white-50">
                      Another example of a project with its respective
                      description. These sections work well responsively as well,
                      try this theme on a small screen!
                  </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                    <div className="d-flex justify-content-center mt-3">
                      <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                        <i className="fab fa-github"></i>
                        GitHub
                    </a>
                      <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                        <i className="fa fa-cog"></i>
                        Demo
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center no-gutters mt-4 mt-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Shoreline</h4>
                <p className="text-black mb-0">
                  Grayscale is open source and MIT licensed. This means you can
                  use it for any project - even commercial projects! Download it,
                  customize it, and publish your website!
              </p>
                <div className="social d-flex justify-content-center mt-3">
                  <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                    <i className="fab fa-github"></i>
                    GitHub
                </a>
                  <a key={"url"} href={"url"} className="btn btn-primary mx-2 p-2">
                    <i className="fa fa-cog"></i>
                    Demo
                </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-2">About</h2>
              <img src={myImage} className="img-fluid rounded-circle w-25 " alt="shawn-photo" />
              <p className="text-white">
                For as long as I can remember I have enjoyed solving problems.  This passion led me to software engineering and web development.  The path to this career was not straight, but the journey has been filled with jobs that have each added tools to my skillset.  If you are looking for someone with a combination of soft and technical skills, or you just want to chat, check out my portfolio and reach out.
            </p>
            </div>
          </div>
        </div>
      </section>

      <SocialLinks />
      <Footer />
    </Layout>
  )
};

export default IndexPage;
