import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import IsMobile from '../../helpers/IsMobile';
import { FooterWrapper } from './footer.css';
import BackgroundImage from 'gatsby-background-image';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import "scss/main.scss"

const Footer = () => {
  const isMobileDevice = IsMobile();

  return (
    <FooterWrapper>
      <footer class="col-lg-12">
        <div class="footer-section">
          <div class="row">
            <div class="col-md-4">
              <iframe width="100%" height="130px" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Chennai&ie=UTF8&t=&z=12&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div>
            <div class="col-md-4">
              <p>26/4E, CDS Chennai Pattinum,
              <br />
              Thiruporur - Guduvanchery Road,
              <br />
              (Off OMR) Ammapet, (Kanchi Dist),
              <br />
              Chennai - 603 108, T.N. India.
              <br />
              Copyright © 2018
              <br />
              SURAAJ Risk &amp; Resilience Management Consultants LLP.
              <br />
              All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrapper>

  );
};

export default Footer;
