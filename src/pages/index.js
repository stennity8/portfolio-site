import React, { Component } from 'react';
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
import ProjectDark from '../components/ProjectDark';

class IndexPage extends Component {
  state = {
    screenWidth: 1360
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize)
    this.setState({
      screenWidth: window.innerWidth - 20
    })
  }

  resize = () => {
    this.setState({
      screenWidth: window.innerWidth - 20
    })
  }

  render() {
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
              description={'Utilizes The Movie Database API to pull and parse data of TV shows based on a user search or what is popular.  Created with React, Redux, and Semantic-UI on the front-end. A Rails API and PostgresSQL database handles the back-end.'}
              username={'chuck'}
              password={'password'}
              githubLink={'https://github.com/stennity8/watchlist-client'}
              demoLink={'https://watch-list.netlify.com/'}
              screenWidth={this.state.screenWidth}
            />

            <ProjectDark
              translateDirection={'left'}
              imgSrc={issueTracker}
              name={'Issue Tracker'}
              description={'An issue tracker to keep track of bugs/issues in your current projects.  Front-end created using Vanilla JS and Bootstrap. A Rails API with a PostgresSQL handles the back-end'}
              username={null}
              password={null}
              githubLink={'https://github.com/stennity8/issue-tracker-frontend'}
              demoLink={'https://issue-tracker-st.netlify.com/'}
              screenWidth={this.state.screenWidth}
            />

            <ProjectDark
              translateDirection={'right'}
              imgSrc={toolTime}
              name={'Neighborhood Tool Time'}
              description={'A marketplace for neighbors to borrow and lend tools or equipment to each other.  This app uses Ruby on Rails 6.0 along with SASS and Bootstrap for styling.'}
              username={'chuck@chuck.com'}
              password={'password'}
              githubLink={'https://github.com/stennity8/neighborhood-tool-time'}
              demoLink={'https://neighborhood-tool-time.herokuapp.com/'}
              screenWidth={this.state.screenWidth}
            />

            <ProjectLight
              translateDirection={'left'}
              imgSrc={bucketList}
              name={'Restaurant Bucket List'}
              description={'An app for reviewing restaurants and creating a bucket list of restaurants you’d like to dine at.  This app was created with Ruby, Sinatra, and Bootstrap.'}
              username={'ChuckGato'}
              password={'password'}
              githubLink={'https://github.com/stennity8/sinatra-restaurant-buckeklist-app'}
              demoLink={'http://restaurant-bucket-list.herokuapp.com/'}
              screenWidth={this.state.screenWidth}
            />

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
                          For as long as I can remember I have enjoyed solving problems.  This passion led me to software engineering and web development.  The path to this career was not straight, but the journey has been filled with jobs that have each added tools to my skillset.  If you are looking for someone with a combination of soft and technical skills, please feel free to contact me.
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
  }
};

export default IndexPage;