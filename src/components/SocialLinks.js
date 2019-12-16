import React from 'react';
import config from '../../config';
import pdf from '../assets/docs/Resume-12_2019.pdf'

export default function SocialLinks() {
  return (
    <section className="contact-section bg-black" id="contact">
      <div className="container">
        <div className="row d-flex justify-content-center">

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">
                  <a href={`mailto:${config.email}`}>{config.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">{config.phone}</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="far fa-file-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Resume</h4>
                <hr className="my-4 mx-auto" />
                <a href={pdf}>Download PDF</a>
              </div>
            </div>
          </div>
        </div>

        <div className="social d-flex justify-content-center" id="social-button">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} className={`mx-2`}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
