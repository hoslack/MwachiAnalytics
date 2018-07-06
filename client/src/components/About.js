import React from 'react';
import mwachi from '../images/mwachi.jpeg';
import jungle from '../images/jungle.jpeg';


const About = props => (
  <div >

    <div className="about-section">
      <div className="container">
        <div className="site-title text-center">
          <h3>About Mwachi Data Labs</h3>
          <p>Mwachi Data Labs and Consult Group was founded at The University of Nairobi By
           Mwachi Simon (BSC. Statistics with Operations Research) and Partners.
          </p>
        </div>
        <div className="about-inner-section">
          <div className="col-md-6 about-inner-column">
            <p>We are fuelled by a single mission: <br />
                To be the most professional, creative and helpful data consulting agency
                in Kenya and beyond.
                We approach each of our clients with fresh eyes and develop custom-made
                trategies and solutions.
            </p>

          </div>
          <div className="col-md-6 about-right">
            <img src={mwachi} alt=" " />
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>

    <div className="about-section">
      <div className="container">
        <div className="site-title text-center">
          <p>We are always yearning to grow our establishment but we are still the same
          agency at heart
          </p>
        </div>
        <div className="about-inner-section">
          <div className="col-md-6 about-right">
            <img src={jungle} alt=" " />
          </div>
          <div className="col-md-6 about-inner-column">
            <p>Are you ready  to start your journey through the jungle of data? <br />
            Email or give us a call today. You'll be glad you did. <br />
            Let us help you gather a boat-load  of tools that will help you get
            ahead of the curve.
            </p>

          </div>

          <div className="clearfix" />
        </div>
      </div>
    </div>
  </div>
);

export default About;
