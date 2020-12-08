import React from "react"
import styled from "styled-components";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { HomeWrapper } from "../components/home/home.css";

const IndexPage = () => {


  return (
    <div style={{ backgroundColor: `#eaeaea` }}>
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
                          <h1 class="mb-20">Madhuprasad</h1>
                          <h3>Senior professional</h3>
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
                              </ul>
                              <ul class="data right">
                                <li>Madhuprasad</li>
                                <li>1984.03.13 <span class="emph-1">(year/day/month)</span></li>
                                <li>Chennai</li>
                                <li>Indian</li>
                                <li>Married</li>
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
                                  Madhuprasad<br/>
                                  # 13065, Tower-13,5th Floor,
                                  Prestige Bella Vista, Ch-56
                                </li>
                              </ul>
                              <ul class="data right">
                                <li><span class="emph-1">E-Mail</span> : madhuprasad.r@gmail.com</li>
                                <li><span class="emph-1">Website</span> : www.madhuprasad.in</li>
                                <li><span class="emph-1">Phone</span> : +91-99650 48100 </li>
                                <li><span class="emph-1">Skype</span> : Madhuprasad_r</li>
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
            <footer>
              <div className="col-md-1 pd-l0">
                <Footer></Footer>
              </div>
            </footer>
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

export default IndexPage;
