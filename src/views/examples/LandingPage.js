/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
require("bootstrap/less/bootstrap.less");

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import DownloadLink from "components/Resume_down.js"
import Contact from "components/contactUs.js";


function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
    {/* <IndexNavbar></IndexNavbar> */}
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">About Me</h2>
                <h5 className="description">
                  I posess a unique mix of communication and technical skills that allows me to deliver, 
                  innovate and build technology for the future.
                </h5>
                <br />
                {/* <div class="download">
                      <a href="resume/IMG_0711.jpg">
                      Download Resume
                    </a>
                </div> */}
                <div class="columns download">
                  <p>
                    <a href={require("assets/resume/JosephVanHorn_PDF_Resume.pdf")} class="button" download><i class="fa fa-download"></i>Download Resume</a>
                  </p>
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Development Skills</h4>
                    <br></br>
                    <p className="description">
                      Javascript | HTML5 | CSS | jQuery | Bootstrap | Github | Git | Web APIs
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Data Skills</h4>
                    <br></br>
                    <p>
                      SQL | Python | mySQL | MongoDB | Tableau
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Professional Work and Projects</h2>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/fitfix.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">FitFix</CardTitle>
                        <h6 className="card-category">Fitness Web Application</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Fit fix is a fitness application that help people start there fitness journey. 
                      Get access to workout templates that provide recommended sets and repetitions. 
                      Each exercise is paired with instructions and a demo video. Track weight and save your favorite exercises.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <a href="https://shrouded-falls-90324.herokuapp.com/">Link to Application</a>
                    <br></br>
                    <br></br>
                    <i className="fa fa-github" />
                    <a href="https://github.com/joe8021/project3">Link to Repo</a>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/spotashow.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">SpotaShow</CardTitle>
                        <h6 className="card-category">Live Music Web Application</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The purpose of this application is for a user to login, search an artist and then render information of that artist and their events / concerts.
                       A map will appear with nearby events using the user's geolocation and give you the ability to purchase tickets to that event using Ticketmaster.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <a href="https://immense-headland-42429.herokuapp.com/">Link to Application</a>
                    <br></br>
                    <br></br>
                    <i className="fa fa-github" />
                    <a href="https://github.com/project2-bootcamp/project2">Link to Repo</a>
                  </CardFooter>
                </Card>
              </Col>
              
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Contact></Contact>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
