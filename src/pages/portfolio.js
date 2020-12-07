import React from "react"
import styled from "styled-components";
import Header from "../components/header/header";
import { CommonWrapper } from "../components/home/home.css";

const HomeWrapper = styled.div`
.main-title h1 {
    font-size: 55px;
    font-weight: 400;
}
.col-md-9 , .col-md-12{
  padding:0px;
}
.sub-title h2 {
    font-size: 15px;
    font-weight: 700;
    display: inline-block;
    position: relative;
}
.main-title h3 {
    font-size: 20px;
    color: #999999;
    font-weight: 300;
}
.sub-title h2:before {
    background: #ffd42d;
    content: "";
    height: 8px;
    left: 50%;
    position: absolute;
    top: -20px;
    width: 20px;
}
.lead-intro {
    padding: 0 80px;
    font-weight: 400;
    font-style: italic;
    font-size: 15px;
    line-height: 27px;
}
.listing {
    padding: 40px 0;
    position: relative;
}
.listing:after {
    background-color: #eaeaea;
    content: " ";
    height: 100%;
    left: 79.5%;
    position: absolute;
    top: 0;
    width: 1px;
    z-index: 0;
}
.listing-inner:before {
    background: #2a2a2a;
    top: -20px;
    content: " ";
    height: 12px;
    left: 78.3%;
    position: absolute;
    width: 12px;
    z-index: 0;
}
.listing-inner:after {
    background: #ffd42d;
    bottom: -20px;
    content: " ";
    height: 12px;
    left: 78.3%;
    position: absolute;
    width: 12px;
    z-index: 0;
}
.listing .listing-event {
    position: relative;
    z-index: 2;
}
.listing .listing-event .data.left {
    float: left;
    margin-left: 25%;
    padding-right: 28px;
    position: relative;
    text-align: right;
    width: 53%;
}
.listing .listing-event .data.right {
    margin-left: 78%;
    padding-left: 38px;
    position: relative;
    text-align: left;
    width: 71%;
}
.listing .listing-event .data li {
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
}
.t-center {
    text-align: center;
}
.emph-1 {
    color: #2a2a2a;
}
ul {
    list-style: none;
}
.uppercase {
    text-transform: uppercase;
}
h1, h2, h3, h4, h5, h6 {
    color: #2a2a2a;
}
.mt-40 {
    margin-top: 40px !important;
}
.mb-20 {
    margin-bottom: 20px !important;
}
.mb-40 {
    margin-bottom: 40px !important;
}
.mb-100 {
    margin-bottom: 100px;
}
.pb-30 {
    padding-bottom: 30px !important;
}
`;


const IndexPage = () => {


  return (
    <div style={{backgroundColor:`#eaeaea`}}>
    <HomeWrapper>
      <div className="container" style={{ paddingTop: `150px`, paddingBottom: `150px` }}>
        <div className="row">
          <div className="col-md-2">
            <Header></Header>
          </div>
          <div className="col-md-9">
            <section id="about" class="bg-white t-center">
              <div class="content">
                <div class="block-content mb-100">
                  <div class="row">
                    <div class="col-md-12  ">
                      <div class="main-title profile">
                        <h1 class="mb-20">Carlose Smith</h1>
                        <h3>Web Designer / Web Developer</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="block-content mb-100">
                  <div class="row">
                    <div class="col-md-12  ">
                      <div class="sub-title mb-40">
                        <h2 class="uppercase">About Me</h2>
                      </div>
                    </div>
                  </div>
                  <p className="lead-intro">I am an ambitious Performance driven professional who offers an unique combination of Business Process Automation, Quality Management, Process Transitions, New Project Migration, Process Consulting, Strategic Solutions and leadership skills within a technology lead fast paced corporate environments with experience spanning across 11+ years in diverse range of fields.</p>
                </div>
                <div class="block-content mb-100 pb-30">
                  <div class="row">
                    <div class="col-md-12  ">
                      <div class="sub-title mb-40">
                        <h2 class="uppercase">Personal Info</h2>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8 col-md-offset-3  col-sm-8 col-sm-offset-3 ">
                      <div class="listing mt-40">
                        <div class="listing-inner">
                          <div class="listing-event">
                            <ul class="data left">
                              <li class="emph-1">Name</li>
                              <li class="emph-1">Birthday</li>
                              <li class="emph-1">Place of Birth</li>
                              <li class="emph-1">Nationality</li>
                              <li class="emph-1">Marital Status</li>
                              <li class="emph-1">Freelance</li>
                              <li class="emph-1">Vacation</li>
                            </ul>
                            <ul class="data right">
                              <li>Carlos Smith</li>
                              <li>1982.04.09 <span class="emph-1">(year/day/month)</span></li>
                              <li>Sydney</li>
                              <li>Australian</li>
                              <li>Single</li>
                              <li>Available</li>
                              <li>Till April 25, 2016</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="block-content mb-100  pb-30">
                  <div class="row">
                    <div class="col-md-12  ">
                      <div class="sub-title mb-40">
                        <h2 class="uppercase">Contact Info</h2>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8 col-md-offset-3  col-sm-8 col-sm-offset-3 ">
                      <div class="listing mt-40">
                        <div class="listing-inner">
                          <div class="listing-event">
                            <ul class="data left">
                              <li><span class="emph-1">Adress</span> :<br />
                                                                Carlose Smith
                                                                1234 Street Road, Chicago, IN 567 890 United States</li>
                            </ul>
                            <ul class="data right">
                              <li><span class="emph-1">E-Mail</span> : carlossmith@gmail.com</li>
                              <li><span class="emph-1">Website</span> : www.carlosesmith.com</li>
                              <li><span class="emph-1">Phone</span> : + 123 456 789 456 </li>
                              <li><span class="emph-1">Skype</span> : Carlose_Smith</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="block-content">
                  <div class="row">
                    <div class="col-md-12">
                      <span class="page-number emph-1">- 1/5 -</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </HomeWrapper>
    </div>
  )
}

export default IndexPage;
