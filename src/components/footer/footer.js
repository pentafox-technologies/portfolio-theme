import React, { Fragment } from 'react';
import "scss/main.scss"
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/font-awesome';


const FooterWrapper = styled.div`


.social{
	margin-left:1px;
	max-width:40px;
}

li {
    display: table;
    margin-bottom: 1px;
    text-align: center;
	position:relative;
}
a {
    background:#ffd42d;
    color: #2a2a2a;
	height: 40px;
	padding:15px;
    width: 40px;
	display: inline-block;
 	vertical-align: middle;
	  transform: translateZ(0);
	  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	  backface-visibility: hidden;
	  position: relative;
	  transition-property: color;
	  transition-duration: 0.3s;
}


a:before{
	  content: "";
	  position: absolute;
	  z-index:-1;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background: #2a2a2a;
	  -webkit-transform: scaleX(0);
	  transform: scaleX(0);
	  -webkit-transform-origin: 0 50%;
	  transform-origin: 0 50%;
	  -webkit-transition-property: transform;
	  transition-property: transform;
	  -webkit-transition-duration: 0.3s;
	  transition-duration: 0.3s;
	  -webkit-transition-timing-function: ease-out;
	  transition-timing-function: ease-out;
}
a:hover, a:focus, .a:active {
  color:#ffffff;
	z-index:2;
}


.social a:hover:before, .social a:focus:before, .social a:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}


.icon {
    line-height: 40px;
	font-size:13px;
	display:block;
}

.social{float:left;margin-left:0;}
	.footer .social li{float: left; margin-left: 1px;}
	.footer .copyright {float:left;margin-left:1px; -webkit-transform: none;transform: none;}
  .footer .social{float:left;margin-left:0;}
  .footer .social li{float: left; margin-left: 1px;}
  .footer .social{display:none;}
  .block-share .social li{
		display:inline-block;
		margin-bottom:0;
	}
.copyright{
	color:white;
 	background: #2a2a2a;
	float: left;
    margin-left: 40px;
    min-width: 170px;
    padding: 9px 20px;
    transform: rotate(90deg);
    transform-origin: left top 0;
    
}

.copyright p{
	color:#ffffff;
	font-size:12px;
    font-weight: 400;
	white-space: nowrap;
}

`;

const Footer = () => {

	return (
		<FooterWrapper>
			<ul class="social" style={{ paddingInlineStart: `0px` }}>
				<li><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon className="icon" icon={'user'}></FontAwesomeIcon></a></li>
				<li><a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon className="icon" icon={'user'}></FontAwesomeIcon></a></li>
				<li><a href="https://www.google.com" target="_blank"><FontAwesomeIcon className="icon" icon={'user'}></FontAwesomeIcon></a></li>
				<li><a href="https://www.linkedin.com" target="_blank"><FontAwesomeIcon className="icon" icon={'user'}></FontAwesomeIcon></a></li>
				<li><a className="copyright" href="https://www.pentafox.in" target="_blank">© Pentafox</a></li>
			</ul>
		</FooterWrapper>
	);
};

export default Footer;
