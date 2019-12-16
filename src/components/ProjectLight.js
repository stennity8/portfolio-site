import React from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import { Spring } from 'react-spring/renderprops'


const ProjectLight = ({ translateDirection, imgSrc, name, description, username, password, githubLink, demoLink, screenWidth }) => {
  const demo = (username, password) => {
    if (username) {
      return (
        <>
          <br></br>
          <br></br>
          Demo:
        <br></br>
          username: {username}
          < br ></br >
          password: {password}
        </>
      )
    }
  }

  if (typeof window !== 'undefined') {

    return (
      <div>
        <div>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => {
              // let screenWidth = window.innerWidth - 20
              let offset = 100

              if (document.querySelector('.project')) {
                offset = document.querySelector('.project').offsetWidth
              }

              let translateXOffset
              if (translateDirection === 'left') {
                translateXOffset = -(((screenWidth - offset) / 2) + offset)
              } else {
                translateXOffset = ((screenWidth - offset) / 2) + offset
              }

              return (
                <Spring
                  config={{ tension: 280, friction: 70 }}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : `translateX(${translateXOffset}px)`
                  }}
                >
                  {props =>
                    <div className="project row align-items-center no-gutters mb-4 mt-4 mb-lg-5 border border-secondary" style={{ ...props }}>
                      <div className="col-xl-8 col-lg-7" >
                        <img className="img-fluid mb-3 mb-lg-0" src={imgSrc} alt="" />
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left m-3">
                          <h4>{name}</h4>
                          <p className="text-black mb-0">
                            {description}
                            {demo(username, password)}
                          </p>
                          <div className="social d-flex justify-content-center mt-3">
                            <a key="watchlist-github" href={githubLink} className="btn btn-primary mx-2 p-2">
                              <i className="fab fa-github"></i>
                              GitHub
                            </a>
                            <a key="watchlist-netlify" href={demoLink} className="btn btn-primary mx-2 p-2">
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
      </div >
    );
  } else {
    return <div></div>
  }
}

export default ProjectLight;
