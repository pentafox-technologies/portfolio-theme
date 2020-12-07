import React from "react"
import Header from "../components/header/header";
import { HeaderWrapper } from "../components/header/header.css";
import { HomeWrapper } from "../components/home/home.css";
import profileImage from '../images/cv-1.jpg';




const IndexPage = () => {

  return (
    <HomeWrapper>
      <div style={{ backgroundColor: `#eaeaea`, padding: `150px` }}>
        <div className="container">
          <div className="row" style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
            <div class="col-md-2 left-content" style={{ paddingRight: `0px`, marginRight: `1px`, marginBottom: `1px` }}>
              <HeaderWrapper>
                <header id="header">
                  <div class="main-header">
                    <div class="img-profile">
                      <img src={profileImage} alt="" />
                      <div class="name-profile t-center">
                        <h5 class="uppercase">Madhuprasad</h5>
                      </div>
                    </div>
                    <nav id="main-nav" class="main-nav clearfix t-center uppercase tabbed">
                      <ul class="clearfix">
                        <li><a href="/">About me<span>ho am i</span></a></li>
                        <li><a href="/">Resume<span>curriculum vita</span></a></li>
                        <li><a href="/">Portfolio<span>my works</span></a></li>
                        <li><a href="/">Blog<span>My toughts</span></a></li>
                        <li><a href="/">Contact<span>Say hello</span></a></li>
                      </ul>
                    </nav>
                  </div>
                </header>
              </HeaderWrapper>
            </div>
            <div className="col-md-9  right-content" style={{ backgroundColor: `white` }}>
              <section className="right-cont">
                <div className="about">
                  <div className="content">
                    <div className="block-content">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="main-title">
                            <h1 className="h1">Madhuprasad Ramalingam</h1>
                            <h3 className="h3">Senior Professional</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-content">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="sub-title">
                            <h2 className="h2">About me</h2>
                          </div>
                        </div>
                      </div>
                      <p className="intro">I am an ambitious Performance driven professional who offers an unique combination of Business Process Automation, Quality Management, Process Transitions, New Project Migration, Process Consulting, Strategic Solutions and leadership skills within a technology lead fast paced corporate environments with experience spanning across 11+ years in diverse range of fields.</p>
                    </div>
                    <div className="block-content" style={{ paddingBottom: `30px` }}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="sub-title">
                            <h2 className="h2">Personal info</h2>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8 col-md-offset-3 col-sm-8 col-sm-offset-3">
                          <div className="listing">
                            <div className="listing-inner">
                              <div className="listing-data">
                                <ul className="left-data">
                                  <li>Name</li>
                                  <li>Birthday</li>
                                  <li>Nationality</li>
                                  <li>Marital status</li>
                                  <li>Place of Birth</li>
                                </ul>
                                <ul className="right-data" style={{ color: `#999999` }}>
                                  <li>Maadhuprasad</li>
                                  <li>13/03/1984</li>
                                  <li>Indian</li>
                                  <li>Married</li>
                                  <li>Chennai</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>   
                  </div>
                  <div className="block-content" style={{ paddingBottom: `30px` }}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="sub-title">
                          <h2 className="h2">Contact info</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 col-md-offset-3 col-sm-8 col-sm-offset-3" >
                        <div className="listing">
                          <div className="listing-inner">
                            <div className="listing-data">
                              <ul className="left-data">
                                <li><span class="emph-1">Adress</span> :<br />
											              Maadhuprasad<br></br>
											              # 13065, Tower-13,5th Floor,Prestige Bella Vista, Ch-56

                                </li>
                              </ul>
                              <ul class="right-data">
                                <li><span class="emph-1">E-Mail</span> : r.madhuprasad@gmail.com</li>
                                <li><span class="emph-1">Phone</span> : + 91 99650 48100 </li>
                                <li><span class="emph-1">Skype</span> :</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </section>
            </div>
          {/* <footer class=""> */}
          <div class=" footer col-md-1 pd-l0">
            <ul class="social">
              <li><a href="#"><i class="icon-facebook"></i></a></li>
              <li><a href="#"><i class="icon-twitter"></i></a></li>
              <li><a href="#"><i class="icon-gplus"></i></a></li>
              <li><a href="#"><i class="icon-linkedin"></i></a></li>
            </ul>
            <div class="copyright">
              <p>© Pentafox Technologies</p>
            </div>
          </div>
          {/* </footer> */}
        </div>
      </div>
      </div>
    </HomeWrapper >
  )
}

export default IndexPage;
