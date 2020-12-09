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
                          <h1 class="mb-20">Portfolio</h1>
                          <h3>My works</h3>
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

export default IndexPage;
