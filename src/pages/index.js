import React from 'react';
import { Spring, config as springConfig } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import myImage from '../assets/images/2018_10_Shawn-Tennity.jpg';
import watchList from '../assets/images/WatchList.png'
import bucketList from '../assets/images/restaurant-bucketlist.png'
import toolTime from '../assets/images/neighborhood-tool-time.png'
import issueTracker from '../assets/images/issue-tracker.png'
import ProjectLight from '../components/ProjectLight';

const IndexPage = () => {
  return (
    <Layout>
      <Header />

      <header className="masthead" id="page-top">
        <div className="container d-flex h-100 align-items-center">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => {
              return (<Spring
                delay={300}
                to={{
                  opacity: isVisible ? 1 : 0
                }}
              >
                {props =>
                  <div className="mx-auto text-center" style={{ ...props }}>
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
              )
            }}
          </VisibilitySensor>
        </div>
      </header>

      <section id="projects" className="projects-section bg-light">
        <div className="container">
          <h1 className="text-center">Projects</h1>

          <ProjectLight
            translateDirection={'right'}
            imgSrc={watchList}
            name={'WatchList'}
            description={'Utilizes The Movie Database API to pull and parse data of TV shows based on a user search or what is popular.  Created with React, Redux, and Semantic-UI on the front-end. A Rails API with a PostgresSQL handles the back-end.'}
            username={'chuck'}
            password={'password'}
            githubLink={'https://github.com/stennity8/watchlist-client'}
            demoLink={'https://watch-list.netlify.com/'}
          />

          <div>
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => {
                let screenWidth = window.innerWidth - 20
                let offset = 100
                if (document.getElementById('project1')) {
                  offset = document.getElementById('project1').offsetWidth
                }
                let translateXOffset = ((screenWidth - offset) / 2) + offset
                return (
                  <Spring
                    config={{ tension: 280, friction: 70 }}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : `translateX(${translateXOffset}px)`
                    }}
                  >
                    {props =>
                      <div id="project1" className="row align-items-center no-gutters mb-4 mb-lg-5 border border-secondary" style={{ ...props }}>
                        <div className="col-xl-8 col-lg-7" >
                          <img className="img-fluid mb-3 mb-lg-0" src={watchList} alt="" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                          <div className="featured-text text-center text-lg-left">
                            <h4>WatchList</h4>
                            <p className="text-black mb-0">
                              Utilizes The Movie Database API to pull and parse data of TV shows based on a user search or what is popular.  Created with React, Redux, and Semantic-UI on the front-end. A Rails API with a PostgresSQL handles the back-end.
                            <br></br>
                              <br></br>
                              Demo:
                            <br></br>
                              username: chuck
                            <br></br>
                              password: password
                      </p>
                            <div className="social d-flex justify-content-center mt-3">
                              <a key="watchlist-github" href="https://github.com/stennity8/watchlist-client" className="btn btn-primary mx-2 p-2">
                                <i className="fab fa-github"></i>
                                GitHub
                          </a>
                              <a key="watchlist-netlify" href="https://watch-list.netlify.com/" className="btn btn-primary mx-2 p-2">
                                <i className="fa fa-cog"></i>
                                Demo
                          </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </Spring>
                )
              }}
            </VisibilitySensor>
          </div>

          <div>
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => {
                let screenWidth = window.innerWidth - 20
                let offset = 100
                if (document.getElementById('project1')) {
                  offset = document.getElementById('project1').offsetWidth
                }
                let translateXOffsetNeg = -(((screenWidth - offset) / 2) + offset)

                return (
                  <>
                    <Spring
                      config={{ tension: 280, friction: 70 }}
                      to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : `translateX(${translateXOffsetNeg}px)`
                      }}
                    >
                      {props =>
                        <div className="row justify-content-center no-gutters mb-4 mb-lg-0" style={{ ...props }}>
                          <div className="col-lg-6 fill">
                            <img className="img-fluid" src={issueTracker} alt="" />
                          </div>
                          <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                              <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                  <h4 className="text-white">Issue Tracker</h4>
                                  <p className="mb-0 text-white">
                                    An issue tracker to keep track of bugs/issues in your current projects.  Front-end created using Vanilla JS and Bootstrap. A Rails API with a PostgresSQL handles the back-end.
                                  </p>
                                  <hr className="d-none d-lg-block mb-0 ml-0" />
                                  <div className="d-flex justify-content-center mt-3">
                                    <a key="issue-tracker-github" href="https://github.com/stennity8/issue-tracker-frontend" className="btn btn-primary mx-2 p-2">
                                      <i className="fab fa-github"></i>
                                      GitHub
                                    </a>
                                    <a key="issue-tracker-demo" href="https://issue-tracker-st.netlify.com/" className="btn btn-primary mx-2 p-2">
                                      <i className="fa fa-cog"></i>
                                      Demo
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </Spring>
                  </>
                )
              }}
            </VisibilitySensor>
          </div>


          <div>
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => {
                let screenWidth = window.innerWidth - 20
                let offset = 100
                if (document.getElementById('project1')) {
                  offset = document.getElementById('project1').offsetWidth
                }
                let translateXOffset = ((screenWidth - offset) / 2) + offset
                return (
                  <>
                    <Spring
                      config={{ tension: 280, friction: 70 }}
                      to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : `translateX(${translateXOffset}px)`
                      }}
                    >
                      {props =>
                        <div className="row justify-content-center no-gutters" style={{ ...props }}>
                          <div className="col-lg-6 fill">
                            <img className="img-fluid" src={toolTime} alt="" />
                          </div>
                          <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                              <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                  <h4 className="text-white">Neighborhood Tool Time</h4>
                                  <p className="mb-0 text-white">
                                    A marketplace for neighbors to borrow and lend tools or equipment to each other.  This app uses Ruby on Rails 6.0 along with SASS and Bootstrap for styling.
                                    <br></br>
                                    <br></br>
                                    Demo:
                                    <br></br>
                                    e-mail: chuck@chuck.com
                                    <br></br>
                                    password: password
                                  </p>
                                  <hr className="d-none d-lg-block mb-0 mr-0" />
                                  <div className="d-flex justify-content-center mt-3">
                                    <a key="neighborhood-tool-time-github" href="https://github.com/stennity8/neighborhood-tool-time" className="btn btn-primary mx-2 p-2">
                                      <i className="fab fa-github"></i>
                                      GitHub
                                    </a>
                                    <a key="neighborhood-tool-time-demo" href="https://neighborhood-tool-time.herokuapp.com/" className="btn btn-primary mx-2 p-2">
                                      <i className="fa fa-cog"></i>
                                      Demo
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </Spring>
                  </>
                )
              }}
            </VisibilitySensor>
          </div>

          <div>
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => {
                let screenWidth = window.innerWidth - 20
                let offset = 100
                if (document.getElementById('project1')) {
                  offset = document.getElementById('project1').offsetWidth
                }
                let translateXOffsetNeg = -(((screenWidth - offset) / 2) + offset)

                return (
                  <>
                    <Spring
                      config={{ tension: 280, friction: 70 }}
                      to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateX(0)" : `translateX(${translateXOffsetNeg}px)`
                      }}
                    >
                      {props =>
                        <div className="row align-items-center no-gutters mt-4 mt-lg-5" style={{ ...props }}>
                          <div className="col-xl-8 col-lg-7">
                            <img className="img-fluid mb-3 mb-lg-0" src={bucketList} alt="" />
                          </div>
                          <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                              <h4>Restaurant Bucket List</h4>
                              <p className="text-black mb-0">
                                An app for reviewing restaurants and creating a bucket list of restaurants you’d like to dine at.  This app was created with Ruby, Sinatra, and Bootstrap.
                                <br></br>
                                <br></br>
                                Demo:
                                <br></br>
                                username: ChuckGato
                                <br></br>
                                password: password
                              </p>
                              <div className="social d-flex justify-content-center mt-3">
                                <a key="restaurant-bucket-list-github" href="https://github.com/stennity8/sinatra-restaurant-buckeklist-app" className="btn btn-primary mx-2 p-2">
                                  <i className="fab fa-github"></i>
                                  GitHub
                                </a>
                                <a key="restaurant-bucket-list-demo" href="http://restaurant-bucket-list.herokuapp.com/" className="btn btn-primary mx-2 p-2">
                                  <i className="fa fa-cog"></i>
                                  Demo
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </Spring>
                  </>
                )
              }}
            </VisibilitySensor>
          </div>

        </div>
      </section>

      <section id="about" className="about-section text-center">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => {
            return (<Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0
              }}
            >
              {props =>
                <div className="container" style={{ ...props }}>
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <h2 className="text-white mb-2">About</h2>
                      <img src={myImage} className="img-fluid rounded-circle w-25 " alt="shawn-tennity" />
                      <p className="text-white">
                        For as long as I can remember I have enjoyed solving problems.  This passion led me to software engineering and web development.  The path to this career was not straight, but the journey has been filled with jobs that have each added tools to my skillset.  If you are looking for someone with a combination of soft and technical skills, or you just want to chat, check out my portfolio and reach out.
                      </p>
                    </div>
                  </div>
                </div>
              }
            </Spring>
            )
          }}
        </VisibilitySensor>
      </section>

      <SocialLinks />
      <Footer />
    </Layout>
  )
};

export default IndexPage;