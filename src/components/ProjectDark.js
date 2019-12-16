import React from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import { Spring } from 'react-spring/renderprops'


const ProjectLight = ({ translateDirection, imgSrc, name, description, username, password, githubLink, demoLink, screenWidth }) => {
  console.log(screenWidth)

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
                    <div className="row justify-content-center no-gutters mb-4 mb-lg-0" style={{ ...props }}>
                      <div className="col-lg-6 fill">
                        <img className="img-fluid" src={imgSrc} alt="" />
                      </div>
                      <div className={translateDirection === 'right' ? 'col-lg-6 order-lg-first' : 'col-lg-6'}>
                        <div className="bg-black text-center h-100 project">
                          <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-left">
                              <h4 className="text-white">{name}</h4>
                              <p className="mb-0 text-white">
                                {description}
                                {demo(username, password)}
                              </p>
                              <hr className="d-none d-lg-block mb-0 ml-0" />
                              <div className="d-flex justify-content-center mt-3">
                                <a key="issue-tracker-github" href={githubLink} className="btn btn-primary mx-2 p-2">
                                  <i className="fab fa-github"></i>
                                  GitHub
                                    </a>
                                <a key="issue-tracker-demo" href={demoLink} className="btn btn-primary mx-2 p-2">
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
