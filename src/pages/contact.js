import React from "react"
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
              <section id="contact" class="bg-white t-center">
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
                            <div id="map"></div>
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
                        <div class="block-info ">
                          <div className="" style={{display:`flex`}}>
                            <div class="" style={{marginRight:`15px`}}> 
                              <div class="info" style={{padding:`15px`, minHeight:`250px`}}>
                                <div class="ico mb-20">
                                  <i class="icon-location-7"></i>
                                </div>
                                <h5 class="mb-20">Drop on in</h5>
                                <p>
                                  Carlose Smith 1234
                            <br /> Street Road, Chicago
                            <br /> IN 567 890 United States
                            </p>
                              </div>
                            </div>
                            <div class="" style={{marginRight:`15px`}}>
                              <div class="info" style={{padding:`15px`, minHeight:`250px`}}>
                                <div class="ico mb-20">
                                  <i class="icon-mobile-6"></i>
                                </div>
                                <h5 class="mb-20">Give me a call</h5>
                                <p>
                                  Mobile : +91-99650 48100
                                </p>
                              </div>
                            </div>
                            <div class="">
                              <div class="info" style={{padding:`15px`, minHeight:`250px`}}>
                                <div class="ico mb-20">
                                  <i class="icon-paper-plane-3"></i>
                                </div>
                                <h5 class=" mb-20">Let's connect</h5>
                                <p>
                                  Email:
                                      <a href="#">madhuprasad.r.com</a>
                                  <br /> Twitter :
                                    <a href="#">adhuprasad</a>
                                  <br /> Skype :
                                    <a href="#">madhuprasad_r</a>
                                </p>
                              </div>
                            </div>
                          </div>


                        </div>


                      </div>

                    </div>


                    <div class="block-content mb-100 ">

                      <div class="row">

                        <div class="col-md-12  ">

                          <div class="sub-title mb-40">
                            <h2 class="uppercase">Reach Me here</h2>
                          </div>

                        </div>
                      </div>


                      <div class="row">

                        <div class="col-md-12">
                          <div class="block-reach">

                            <form class="contact-form" method="post" action="">

                              <div class="input-columns clearfix">

                                <div class="column1">
                                  <div class="column-inner">
                                    <input type="text" placeholder="Name" value="" id="name" name="name"></input>
                                  </div>
                                </div>

                                <div class="column2">
                                  <div class="column-inner">
                                    <input type="text" placeholder="Email" value="" id="email" name="email"></input>
                                  </div>
                                </div>

                              </div>

                              <input type="text" placeholder="Subject" value="" id="subject" name="subject"></input>
                              <textarea name="message" placeholder="Message" id="message" cols="45" rows="7"></textarea>
                              <input type="submit" value="Submit Form" class="but opc submit"></input>
                            </form>

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

export default IndexPage
