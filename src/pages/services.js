import React from "react";
import Header from "../components/header/header";
import ClientLogo from "../components/clientsLogo/clientsLogo";
import Footer from "../components/footer/footer";
import slider1 from "../images/slider/slider-1.jpg";
import slider2 from "../images/slider/slider-2.jpg";
import slider3 from "../images/slider/slider-3.jpg";
import sliderInner  from "../images/slider/innerSlider.jpg"
import styled from "styled-components"


export const ServicesWrapper = styled.div`
    max-width: 960px;
    margin:15px;
    font-family: sans-serif;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    box-shadow: 0px 5px 10px #ccc;
    min-height: 550px;
    padding: 15px;
    .panel-body {
      padding: 15px;
  }
  h2{
  color: #2e308f;
    margin-bottom: 20px;
}
  .img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
  }
.panel-body .services-wrap
{
  padding:15px 0px;
}
.panel-body .services-wrap img
{
  width: 100%;
  margin-bottom: 20px !important;
}
h4{
  margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.1;
    font-size: 18px;
    color: inherit;

}
.text-justify {
  text-align: justify;
}
p {
  margin: 0 0 10px;
}
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
    `;

const IndexPage = () => {


  return (
    <ServicesWrapper>
      <Header />
      <div class="inner-slider">
        <img src={sliderInner} class="img-responsive"></img>
      </div>
      <div className="container">
        <div className="row">
          <div class="col-md-3">
            <p>&nbsp;</p>
            <div class="list-group">
              <a href="#ser1" class="list-group-item">
                Resilience Management Solutions
                </a>
              <a href="#ser2" class="list-group-item">Risk Management and Project Management</a>
              <a href="#ser3" class="list-group-item">Information Systems</a>
              <a href="#ser4" class="list-group-item">Information Security &amp; Risk Management</a>
              <a href="#ser5" class="list-group-item">Business Continuity Management Systems</a>
              <a href="#ser6" class="list-group-item">Training &amp; Development</a>
              <a href="#ser7" class="list-group-item">Risk Management Reviews and Enhancements</a>
            </div>
          </div>
          <div class="col-md-8">
          <p>&nbsp;</p>

            <h2 class="">Services</h2>
            <a name="ser1"></a>
            <div class="panel panel-default">
              <div class="panel-body services-wrap row">
                <div class="col-md-5">
                  <img src={slider1} class="img-responsive"></img>
                </div>
                <div class="col-md-7">
                  <h4>Resilience Management Solutions  </h4>
                  <p class="text-justify">
                    From operational risks to organizational resilience management </p>
                </div>
                <div class="clearfix">&nbsp;</div>
              </div>
            </div>
            <a name="ser2"></a>
            <div class="panel panel-default">
              <div class="panel-body services-wrap row">
                <div class="col-md-7">
                  <h4>Risk Management and Project Management</h4>
                  <p class="text-justify">
                    Vendor/solution identification and integration support and end-to-end Enterprise Risk Management Framework solutions </p>
                </div>
                <div class="col-md-5">
                  <img src={slider2} class="img-responsive"></img>
                </div>
              </div>
              <div class="clearfix">&nbsp;</div>
            </div>
            <a name="ser3"></a>
            <div class="panel panel-default">
              <div class="panel-body services-wrap row">
                <div class="col-md-5">
                  <img src={slider1} class="img-responsive"></img>
                </div>
                <div class="col-md-7">
                  <h4>Information Systems   </h4>
                  <p class="text-justify">
                    <ul>
                      <li>Audit</li>
                      <li>Controls Review </li>
                      <li> Training &amp; Development</li>
                    </ul>
                  </p>
                </div>
                <div class="clearfix">&nbsp;</div>
              </div>
            </div>
            <a name="ser4"></a>
            <div class="panel panel-default">
              <div class="panel-body services-wrap row">
                <div class="col-md-7">
                  <h4>Information Security &amp; Risk Management   </h4>
                  <p class="text-justify">
                    <ul>
                      <li>Review</li>
                      <li>Assessment</li>
                      <li> VAPT</li>
                      <li>End-to-End Solutions</li>
                    </ul>
                  </p>
                </div>
                <div class="col-md-5">
                  <img src={slider2} class="img-responsive"></img>
                </div>
                <div class="clearfix">&nbsp;</div>
              </div>
            </div>
            <a name="ser5"></a>
            <div className="panel panel-default">
              <div className="panel-body services-wrap row">
                <div className="col-md-5"><img src={slider3} class="img-responsive"></img></div>
                <div className="col-md-7">
                  <h4>Business Continuity Management Systems  </h4>
                  <p class="text-justify">
                    <ul>
                      <li>Review</li>
                      <li>Holistic Support</li>
                      <li> Training</li>
                      <li>Awareness</li>
                    </ul>
                  </p>
                </div>
                <div class="clearfix">&nbsp;</div>
              </div>
            </div>
            <a name="ser6"></a>
            <div class="panel panel-default">
              <div class="panel-body services-wrap row">
                <div class="col-md-7">
                  <h4>Training &amp; Development  </h4>
                  <p class="text-justify">
                    <ul>
                      <li>Content Creation</li>
                      <li>Value Delivery</li>
                      <li> Holistic participation with the client teams</li>
                    </ul>
                  </p>
                </div>
                <div class="col-md-5">
                  <img src={slider1} class="img-responsive"></img>
                </div>
                <div class="clearfix">&nbsp;</div>
              </div>

            </div>
            <a name="ser7"></a>
            <div class="panel panel-default">
              <div class="panel-body services-wrap row">
                <div class="col-md-5">
                  <img src={slider1} class="img-responsive"></img>
                </div>
                <div class="col-md-7">

                  <h4>Risk Management Reviews and Enhancements</h4>
                  <p class="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                </div>

                <div class="clearfix">&nbsp;</div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <ClientLogo />
      <Footer />
    </ServicesWrapper>
  )
}

export default IndexPage
