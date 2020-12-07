import React from "react"
// import { HomeWrapper } from "../components/home/home.css";
import styled from "styled-components";
import { HomeWrapper } from "../components/home/home.css";





export const GalleryWrapper = styled.div`
max-width: 960px;
    // margin:15px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    box-shadow: 0px 5px 10px #ccc;
    min-height: 550px;
    padding: 15px;
    .gallery {
      display: flex;
      flex-wrap: wrap;
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
    .image {
      flex: 1 0 21%; /* explanation below */
      margin: 5px;
      // height: 100px;
    }
    
`;
const IndexPage = () => {


  return (
    <HomeWrapper>
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
    </HomeWrapper>
  )
}

export default IndexPage