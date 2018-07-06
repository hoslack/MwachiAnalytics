import React from 'react';
import pic1 from '../images/data_a.jpg';
import pic3 from '../images/Data-Analysis.jpg';
import first from '../images/data-a.jpg';
import sec from '../images/sec.jpeg';


const Landing = () => (
  <header className="masthead text-center green d-flex">
    <div className="container my-auto">
      <div className="row ">
        <div className="col-lg-10 mx-auto">
          <h1 className="text-uppercase ">
            <strong>Mwachi Data Labs and Consult Group</strong>
          </h1>
          <h2>
            <strong>We Come Up with Reliable Insights From Data</strong>
          </h2>
          <hr />
        </div>
        <div className="col-lg-8 mx-auto">
          <div id="carouselExampleControls" className="carousel slide rounded" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active rounded">
                <img className="d-block img-fluid rounded" src={first} alt="First slide" />
              </div>
              <div className="carousel-item rounded">
                <img className="d-block img-fluid rounded" src={sec} alt="First slide" />
                {/* <div className="carousel-caption d-none d-md-block nav-bg myopacity white">
                  <h2 />
                </div> */}
              </div>
              <div className="carousel-item rounded">
                <img className="d-block img-fluid rounded" src={pic1} alt="First slide" />
                <div className="carousel-caption d-none d-md-block nav-bg myopacity rounded">
                  <h2>
                      Mwachi Datalabs and Consult Group offers a wide range of data and statistical
                       consulting services.
                      We have the necessary tools and expertise to help you experience growth in your area.
                      By helping you pierce through data,
                       we get you to learn and properly manage your expansions in academics, business and projects.
                    <br />
                  "
                  	We partner with our clients to develop engaging insights,
                  	strategies and design high quality, scalable solutions
                  "
                  </h2>

                </div>
              </div>
              <div className="carousel-item rounded">
                <img className="d-block img-fluid rounded" src={pic3} alt="Third slide" />
                <div className="carousel-caption d-none d-md-block nav-bg myopacity rounded">
                  <h2>
                  Are you interested in statistics and Data Science?
                  Are you in need of Academic support in Data Science?
                  You need insights and strategies for your business?
                  Projects?
                  Engage us today, and let us work with you to build rich brand experiences.
                  You will be glad.
                  </h2>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Landing;
