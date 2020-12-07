import React from "react"
import { HomeWrapper } from "../components/home/home.css";



const IndexPage = () => {


  return (
    <>
      <div style={{ backgroundColor: `#eaeaea`, padding: `150px` }}>
        <div className="container">
          <div className="row" style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
            <div className="col-md-2 nav-bar" style={{ margin: `1px`, backgroundColor: `white` }}>
              {/* <Header></Header> */}
            </div>
            <div className="col-md-9 right-content" style={{ backgroundColor: `white` }}>
              <section className="right-cont">
                <div class="contact">
                  <div class="content">
                    <div class="block-content mb-100">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="main-title">
                            <h1 class="mb-20">Contact</h1>
                            <h5 class="uppercase">Say Hello</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="block-content mb-100 ">
                      <div class="row">
                        <div class="col-md-12  ">
                          <div class="sub-title mb-40">
                            <h2 class="uppercase">map location</h2>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="block-map">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="block-content mb-100 ">
                      <div class="row">
                        <div class="col-md-12  ">
                          <div class="sub-title mb-40">
                            <h2 class="uppercase">Personal Info</h2>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="block-info col-md-12">
                          <div class="mb-40">
                            <div class="info">
                              <div class="ico mb-20">
                                <i class="icon-location-7"></i>
                              </div>
                              <h5 class="mb-20">Drop on in</h5>
                              <p>
                                Madhuprasad R
                                # 13065, Tower-13,5th Floor,
                                <br></br>Prestige Bella Vista, Ch-56

                                </p>
                            </div>
                          </div>
                          <div class="mb-40">
                            <div class="info">
                              <div class="ico mb-20">
                                <i class="icon-mobile-6"></i>
                              </div>
                              <h5 class="mb-20">Give me a call</h5>
                              <p>
                               
                                Mobile : +91 99650 48100
                              </p>
                            </div>
                          </div>
                          <div class="mb-20">
                            <div class="info">
                              <div class="ico mb-20">
                                <i class="icon-paper-plane-3"></i>
                              </div>
                              <h5 class=" mb-20">Let's connect</h5>
                              <p>
                                Email:
                                <a href="#">madhuprasad.r.com</a>
                                <br /> Twitter :
                                <a href="#">@</a>
                                <br /> Skype :
                                <a href="#"></a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="block-content">
                      <div class="row">
                        <div class="col-md-12">
                          <span class="page-number emph-1">- 5/5 -</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
