import React, { Component } from 'react';
import Scroll from './Scroll';
import config from '../../config';
import pdf from '../assets/docs/Resume-12_2019.pdf'
import myImage from '../assets/images/2018_10_Shawn-Tennity.jpg';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <Scroll>
            <a className="navbar-brand" href="#page-top">
              <i class="fas fa-home">{config.siteHome}</i>

            </a>
          </Scroll>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
              }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="projects"
                >
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </Scroll>
              </li> */}
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="about"
                >
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </Scroll>
              </li>

              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="contact"
                >
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </Scroll>
              </li>

              {/* <li className="nav-item">
                <a href={pdf} className="nav-link">
                  Resume
                </a>
              </li> */}
              {/* 
              <li className="nav-item">
                <a href="https://stennity8.github.io/" className="nav-link">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
