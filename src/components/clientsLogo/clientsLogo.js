import React from 'react';
import { ClientLogoSection } from './clientsLogo.css';
import client1 from "../../images/slider/client-1.png";
import client2 from "../../images/slider/client-2.png";
import client3 from "../../images/slider/client-3.png";
import client4 from "../../images/slider/client-4.png";
import client5 from "../../images/slider/client-5.png";
import client6 from "../../images/slider/client-6.png";
import background from "../../images/slider/strip-line.gif";

const ClientLogo = () => {
  return (
    <ClientLogoSection>
      <div className="client-block">
        <div className="client-wrap">
          <div id="Carousel" className="carousel slide" >
            <div className="carousel-inner" >
              <div className="item active"  >
                <div className="client-items">
                  <div className="col-md-2 col-xs-6"><a href="" className="thumbnail"><img src={client1} alt="Suraaj Consultants"></img></a></div>
                  <div className="col-md-2 col-xs-6"><a href="" className="thumbnail"><img src={client2} alt="Suraaj Consultants"></img></a></div>
                  <div className="col-md-2 col-xs-6"><a href="" className="thumbnail"><img src={client3} alt="Suraaj Consultants"></img></a></div>
                  <div className="col-md-2 col-xs-6"><a href="" className="thumbnail"><img src={client4} alt="Suraaj Consultants"></img></a></div>
                  <div className="col-md-2 col-xs-6"><a href="" className="thumbnail"><img src={client5} alt="Suraaj Consultants"></img></a></div>
                  <div className="col-md-2 col-xs-6"><a href="" className="thumbnail"><img src={client6} alt="Suraaj Consultants"></img></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLogoSection>
  );
};

export default ClientLogo;