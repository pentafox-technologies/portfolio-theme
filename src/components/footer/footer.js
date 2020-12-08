import React, { Fragment } from 'react';
// import "scss/main.scss"
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


//////////////////////////////////////////////////////////////////////////////////
@media screen and (max-width: 1366px) {
	.block-nav-work li a{padding:30px 56px;}
}


@media only screen and (min-device-width : 1024px) and (max-device-width : 1366px) and (orientation: portrait) {
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}
	.right-content.col-md-9{width:75%;}
	.col-md-2.left-content{width: 16.6667%;}
	p.lead-intro{padding:0 45px;}
}


@media only screen and (min-device-width : 1024px) and (max-device-width : 1366px) and (orientation: landscape) {
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}	
}


@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	
}


@media only screen and (min-width: 768px) and (max-width: 959px){
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}
	.container {position: relative;}
	.main-header{margin:0;}
	.main-header:after{bottom: 0;height: 1px;right: auto;width: 100%;top:auto;}
	.right-content.col-md-9, .left-content.col-md-2{width:auto;padding-left: 15px !important;padding-right: 15px !important;}
	.footer{position:absolute;top:-41px;z-index:10;right:0px;}
	.footer .social{float:left;margin-left:0;}
	.footer .social li{float: left; margin-left: 1px;}
	.footer .copyright {float:left;margin-left:1px; -webkit-transform: none;transform: none;}
	
}


@media only screen and (min-width: 480px) and (max-width: 767px) {
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}
	.container {position: relative;}
	.content{padding: 100px 40px;}
	.footer{position:absolute;top:-41px;z-index:10;right:0px;}
	.footer .social{float:left;margin-left:0;}
	.footer .social li{float: left; margin-left: 1px;}
	.footer .copyright {float:left;margin-left:1px; -webkit-transform: none;transform: none;}
	.block-info .col-md-4:not(:last-child){margin-bottom:30px;}

	
}


@media only screen and (max-width:479px) {
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}
	.container {position: relative;}
	.content{padding: 100px 40px;}
	.footer{position:absolute;top:-41px;z-index:10;right:0px;}
	.footer .social{display:none;}
	.footer .copyright {float:left;margin-left:1px; -webkit-transform: none;transform: none;}
`;

const Footer = () => {

	return (
		<FooterWrapper>
			<ul class="social" style={{ paddingInlineStart: `0px` }}>
				<li><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon className="icon" icon={'fan'}></FontAwesomeIcon></a></li>
				<li><a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon className="icon" icon={'fan'}></FontAwesomeIcon></a></li>
				<li><a href="https://www.google.com" target="_blank"><FontAwesomeIcon className="icon" icon={'fan'}></FontAwesomeIcon></a></li>
				<li><a href="https://www.linkedin.com" target="_blank"><FontAwesomeIcon className="icon" icon={'fan'}></FontAwesomeIcon></a></li>
				<li><a className="copyright" href="https://www.pentafox.in" target="_blank">© Pentafox</a></li>
			</ul>
		</FooterWrapper>
	);
};

export default Footer;
