import React from "react"
import styled from "styled-components";


export const HomeWrapper = styled.div`
color:#999999;
font-family: "Roboto Slab","Helvetica","Arial",sans-serif;
.main-title h1 {
    font-size: 55px;
    font-weight: 400;
}
.content {
  padding: 100px;
  position: relative;
}
.content:before {
    background: #ffd42d;
    content: "";
    height: 18px;
    left: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.content:after{
    content: "";
    height: 18px;
    left: 0;
    position: absolute;
    bottom: 0;
    width:100%;
	padding:18px 25px;
	z-index:-1;
	box-shadow: 0px 8px 25px -10px rgba(0,0,0,0.35), 0px 15px 0px -8px #ffd42d, 0px 15px 0px -7px #ffd42d, 0px 16px 25px -10px rgba(0,0,0,0.35), 0px 30px 0px -15px #ffd42d, 0px 30px 0px -14px #ffd42d;
	
}

.col-md-9 , .col-md-12{
  padding:0px;
}
.col-md-2.left-content{
	width: 14.6667%;
	z-index:10;
}
.right-content.col-md-9{
	width: 76%;
}
.col-md-1{
	width: 9.33333%;
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
    left: 76.5%;
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
    left: 75.3%;
    position: absolute;
    width: 12px;
    z-index: 0;
}
.listing-inner:after {
    background: #ffd42d;
    bottom: -20px;
    content: " ";
    height: 12px;
    left: 75.3%;
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
    margin-left: 22%;
    padding-right: 28px;
    position: relative;
    text-align: right;
    width: 53%;
}
.page-number {
  display: inline-block;
  font-size: 15.5px;
  font-weight: 400;
  margin-left: 20px;
}
.footer {
  position: relative;
}
.listing .listing-event .data.right {
    margin-left: 75%;
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
.emph-3 {
    font-style: italic;
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
.pd-l0 {
  padding-left: 0 !important;
}
.pb-10{
    padding-bottom:10px;
}
.mt-40 {
    margin-top: 40px !important;
}

// -------------------------------------------resume page css----------------------------------

.timeline {
    padding: 60px 0 20px 0;
    position: relative;
}
.timeline .timeline-inner {
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
}
.timeline .timeline-inner .name {
    float: left;
    font-size: 18px;
    padding-right: 4px;
    position: relative;
    text-align: right;
    width: 46%;
}
.timeline .timeline-inner .name:before {
    background: #ffd42d;
    border: 4px solid #fff;
    content: " ";
    height: 20px;
    position: absolute;
    right: -2.1em;
    top: 1px;
    width: 20px;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
}
.timeline .timeline-inner .name span.date {
    color: #999999;
    font-size: 13.5px;
    font-weight: 400;
}
.timeline .timeline-inner .name h4 {
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 400;
}
.timeline .timeline-inner .detail {
    margin-left: 41%;
    padding-left: 94px;
    position: relative;
    text-align: left;
    width: 56%;
}
.timeline:after {
    background-color: #eaeaea;
    content: " ";
    height: 100%;
    left: 49.9%;
    position: absolute;
    top: 0;
    width: 1px;
    z-index: 0;
}
.timeline .timeline-inner .name.switched:before{
    background: #2a2a2a;
	 -webkit-background-clip: padding-box; 
	 -moz-background-clip:padding; 
	 background-clip:padding-box;

}
.listing-large {
    padding: 60px 0 40px 0;
    position: relative;
}


.listing-large:after {
    background-color: #eaeaea;
    content: " ";
    height: 100%;
   	left: 49.9%;
    position: absolute;
    top: 0;
    width: 1px;
    z-index: 0;
}

.listing-large .listing-large-inner {
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
}

.listing-large-inner:before {
 	background: #2a2a2a;
    top: -80px;
    content: " ";
    height: 12px;
    left: 49.1%;
    position: absolute;
    width: 12px;
    z-index: 0;
}

.listing-large-inner:after {
 	background: #ffd42d;
    bottom: -100px;
    content: " ";
    height: 12px;
    left: 49.1%;
    position: absolute;
    width: 12px;
    z-index: 0;
}

.listing-large .listing-event .data.left {
    float: left;
    font-size: 18px;
    font-weight: 300;
    padding-right: 5px;
    position: relative;
    text-align: right;
    width: 46%;
}

.listing-large .listing-event .data.right {
  	margin-left: 41%;
    padding-left: 92px;
    position: relative;
	text-align:left;
	width:57%;
}

.listing-large .listing-event .data.right li {
	margin-bottom: 30px;
}

.listing-large .listing-event .data.right li p{
	font-size:14.5px;
}


.listing-large .listing-event .data.right li:last-child {
	margin-bottom: 0;
}

.listing-large .listing-event .data.right li ul li {
	margin-bottom: 0;
}



.listing-large .listing-event .data.right li:nth-child(2) ul li {
	font-weight: 400;
	font-size:15px;
}


.listing-large .listing-event .data.right li:nth-child(2) ul li span {
	font-weight: 300;
	font-size:14px;
	margin-left:2px;
}

.listing-large .listing-event .data.right h5 {
	font-size: 15px;
    font-weight: 700;
	margin-bottom:20px;
}


.listing-large .listing-event .data.left li {
    clear:both;
	line-height: 28px;
}


.listing-large .listing-event .data.left h5 {
    display: block;
    float: right;
    margin-left:15px;
	font-size: 15px;
    font-weight: 400;
}
.listing-large  a {
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    bottom: -25px;
}


.listing-large  a:hover {
    color:#ffd42d;
}

.listing-large  a.btn-1 {
	left:26.3%;
}


.listing-large  a.btn-2 {
	right:26.3%;
}
//------------------------------------------------contact--------------------------------------------

.contact-form, .reply-form{
	position:relative;
}


.input-columns .column1, .input-columns .column2 {
    float: left;
    width: 50%;
}

.input-columns .column1 .column-inner {
    padding: 0 15px 0 0;
}

.contact-form input[type="text"], .contact-form textarea, .reply-form input[type="text"], .reply-form textarea {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: 1px solid #eaeaea;
    color: #999999;
    margin: 0 0 14px;
    outline: 0 none;
    overflow: hidden;
    padding: 15px 20px;
    resize: none;
    width: 100%;
	border-radius:5px;
	-moz-border-radius:5px;
	-webkit-border-radius :5px;
	-ms-border-radius:5px;
	-o-border-radius: 5px;
	font-family: "Roboto Slab","Helvetica","Arial",sans-serif;
	font-weight: 400;
}

.contact-form input[type="text"], .reply-form input[type="text"]{
	height:52px;
}


.contact-form textarea, .reply-form textarea {
    width: 100%;
	color: #999999;
	font-family: "Roboto Slab","Helvetica","Arial",sans-serif;

}


.contact-form .submit, .reply-form .submit {
    cursor: pointer;
	width:100%;
	border-radius:5px;
	-moz-border-radius:5px;
	-webkit-border-radius :5px;
	-ms-border-radius:5px;
	-o-border-radius: 5px;
	height:50px;
}


#success, #error {
    display: none;
    position: relative;
}


#success h2, #error h2 {
    color: #33373d;
    font-size: 11px;
    left: 0;
    position: absolute;
    text-transform: none;
    top: 0;
}


.errorForm {
	border:1px solid #cb3030 !important;
}



#map {
    height: 360px;
}


.info{
	border: 1px solid #eaeaea;
	padding: 60px 0;
	font-size:15px;
}

.info i{
	font-size:30px;
	color: #2a2a2a;
}


.info h5{
	font-size:15px;
	font-weight:600;
	text-transform:capitalize;
}


.info a {
    color: #999999;
}

@media screen and (max-width: 1366px) {
	.block-nav-work li a{padding:30px 56px;}
}


@media only screen and (min-device-width : 1024px) and (max-device-width : 1366px) and (orientation: portrait) {
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}
	.right-content.col-md-9{width:75%;}
	.col-md-2.left-content{width: 16.6667%;}
	p.lead-intro{padding:0 45px;}
	.listing .listing-event .data.right{width:80%;}
	.listing .listing-event .data.left {margin-left: -23%;width: 58%;}
	.listing-inner:before, .listing-inner:after{left:35%;}
	.listing a.btn-2{right: 14.7%;}
	.listing a.btn-1{left: -11.51%;}
	.timeline .timeline-inner .detail {width: 61%;margin-left: 41%;padding-left: 80px;}
	.timeline .timeline-inner .name{margin-left: -16px;width: 47%;padding-right:0}
	.timeline .timeline-inner .name:before {right: -42px;}
	.listing-large .listing-event .data.left{width:45%;padding-right: 6px;}
	.listing-large .listing-event .data.right{width:62%;padding-left: 80px;}
	.listing-large-inner:before, .listing-large-inner:after{left: 49%;}
	.services:before, .services:after{left: 48.9%;}
	.listing-large a.btn-2{right: 18.5%;}
	.listing-large a.btn-1{left: 19.4%;}
	.rating span{margin:0 1px;}
	.post-title h4, .post-title a{font-size:23px;}
	.block-nav-work li a{padding:30px 56px;}
	.block-info .col-md-4{width:100%;}
	.block-info .col-md-4:not(:last-child){margin-bottom:30px;}
}



@media only screen and (min-device-width : 1024px) and (max-device-width : 1366px) and (orientation: landscape) {
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}	
}


@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}
	.right-content.col-md-9{width:75%;}
	.col-md-2.left-content{width: 16.6667%;}
	p.lead-intro{padding:0 45px;}
	.listing .listing-event .data.right{width:80%;}
	.listing .listing-event .data.left {margin-left: -23%;width: 58%;}
	.listing-inner:before, .listing-inner:after{left:35%;}
	.listing a.btn-2{right: 14.7%;}
	.listing a.btn-1{left: -11.51%;}
	.timeline .timeline-inner .detail {width: 61%;margin-left: 41%;padding-left: 80px;}
	.timeline .timeline-inner .name{margin-left: -16px;width: 47%;padding-right:0}
	.timeline .timeline-inner .name:before {right: -42px;}
	.listing-large .listing-event .data.left{width:45%;padding-right: 6px;}
	.listing-large .listing-event .data.right{width:62%;padding-left: 80px;}
	.listing-large-inner:before, .listing-large-inner:after, .services:before, .services:after{left:49%;}
	.listing-large a.btn-2{right: 18.5%;}
	.listing-large a.btn-1{left: 19.4%;}
	.rating span{margin:0 1px;}
	.post-title h4, .post-title a{font-size:23px;}
	.block-nav-work li a{padding:30px 56px;}
	.block-info .col-md-4{width:100%;}
	.block-info .col-md-4:not(:last-child){margin-bottom:30px;}


}


@media only screen and (min-width: 768px) and (max-width: 959px){
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}
	.container {position: relative;}
	.main-header{margin:0;}
	.main-header:after{bottom: 0;height: 1px;right: auto;width: 100%;top:auto;}
	.right-content.col-md-9, .left-content.col-md-2{width:auto;padding-left: 15px !important;padding-right: 15px !important;}
	.main-nav ul li{float:left; width:20%;font-size:14px;position:relative;margin-bottom:0;}
	.main-nav ul li:after{content:""; background:#eaeaea;height:100%;top:0;left:0;position:absolute;width:1px;}
	.main-nav ul li:first-child:after{content:none;}
	.main-nav ul li a{padding:25px;}
	.main-nav li a.active:after {-webkit-transform:rotate(90deg);transform:rotate(90deg);left: 50%; margin-left: -7px;right: auto;top: 102%;}
	.main-nav ul li a span{font-size:12px;}
	.main-nav.not-tabbed ul li{ width:50%;}
	p.lead-intro{padding:0 3px;}
	.listing-inner:before, .listing-inner:after{left:35.1%;}
	.listing .listing-event .data.right{width:81%;}
	.listing .listing-event .data.left{width:60%;margin-left: -34%;padding-right:0;}
	.timeline .timeline-inner .name{width:48%;padding-right:0;margin-left:-4.1%;}
	.timeline .timeline-inner .detail {margin-left: 38%;width: 66%;}
	.timeline .timeline-inner .name:before{right: -42px;}
	.footer{position:absolute;top:-81px;z-index:10;right:0px;}
	.footer .social{float:left;margin-left:0;}
	.footer .social li{float: left; margin-left: 1px;}
	.footer .copyright {float:left;margin-left:1px; -webkit-transform: none;transform: none;}
	.listing a.btn-2 {right: 14%;}
	.listing a.btn-1 {left: -12.2%;}
	.listing-large .listing-event .data.right{width:65%;margin-left: 38.8%;}
	.listing-large .listing-event .data.left{width:49%;margin-left: -5.2%;}
	.listing-large-inner:before, .listing-large-inner:after, .services:before, .services:after{left: 48.9%;}
	.listing-large a.btn-2 {right: 17.9%;}
	.listing-large a.btn-1 {left: 18.9%;}
	.rating span{margin:0 2px;}
	.block-nav-work li a{padding:30px 18px;}
	.post-title h4, .post-title a{font-size:23px;}
	.block-info .col-md-4:not(:last-child){margin-bottom:30px;}

}


@media only screen and (min-width: 480px) and (max-width: 767px) {
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}
	.container {position: relative;}
	.content{padding: 100px 40px;}
	.main-header{margin:0;}
	.main-header:after{bottom: 0;height: 1px;right: auto;width: 100%;top:auto;}
	.right-content.col-md-9, .left-content.col-md-2{width:auto;padding-left: 15px !important;padding-right: 15px !important;}
	.main-nav ul li{float:left; width:20%;font-size:14px;position:relative;margin-bottom:0;}
	.main-nav ul li:after{content:""; background:#eaeaea;height:100%;top:0;left:0;position:absolute;width:1px;}
	.main-nav ul li a{padding:20px 0; font-size: 0;}
	.main-nav ul li a span{display:none;}
	.main-nav ul li a i{width:100%;position:absolute;margin-bottom:0;text-align:center;}
	.main-nav li a.active:after {-webkit-transform:rotate(90deg);transform:rotate(90deg);left: 50%; margin-left: -7px;right: auto;top: 102%;}
	.main-nav.not-tabbed ul li{ width:50%;}
	.main-title h1 {font-size: 45px;}
	.main-title h3{font-size: 17px;}
	p.lead-intro{padding:0 3px;}
	img.signature {width: 35%;}
	.block-content.pb-30{padding-bottom:0 !important;}
	.block-content.mb-100.pb-10, .block-content.mb-100.pb-30{margin-bottom:80px !important;}
	.listing-large .listing-large-inner{margin-bottom:0;}
	.listing,.listing-large, .timeline{padding:0;margin-top:0 !important;}
	.listing:after, .listing-inner:before, .listing-inner:after, .timeline:after, .timeline .timeline-inner .name:before, .listing-large-inner:before,
	.listing-large-inner:after, .listing-large:after, .services:before, .services:after, .filter li:not(:last-child):after, .main-nav ul li:first-child:after{content:none;}
	.listing .listing-event .data.left{width:35%;margin-left: 5%;padding-right:0;}
	.insta-Feed li, .insta-Feed li a{width:18%;}
	.timeline .timeline-inner .name{margin-bottom:5px !important;}
	.timeline .timeline-inner .name, .timeline .timeline-inner .detail{width:auto;padding:0;margin:0;text-align:left;float:none;}
	ul.hb-list li{margin-right:4px;}
	.services{margin-top:0 !important;}
	.services .block-service .col-sm-6:not(:last-child){border-bottom:1px solid #eaeaea;}
	.services .block-service .col-sm-6:nth-child(2n+1){border-right:none;}
	.services .block-service .col-sm-6:first-child{padding-top:0;}
	.services .block-service .col-sm-6:last-child{padding-bottom:0;}
	.footer{position:absolute;top:-41px;z-index:10;right:0px;}
	.footer .social{float:left;margin-left:0;}
	.footer .social li{float: left; margin-left: 1px;}
	.footer .copyright {float:left;margin-left:1px; -webkit-transform: none;transform: none;}
	.listing a.btn-2, .listing a.btn-1, .listing-large a.btn-2, .listing-large a.btn-1  {display:none;}
	.listing-large .listing-event .data.right, .listing-large .listing-event .data.left{width:auto;margin:0;padding:0;float:none;}
	.listing-large .listing-event .data.left{margin-bottom:40px !important;}
	.listing-large .listing-event .data.left h5{float:left;margin-left:0;}
	.filter li{display:block; margin-right:0;}
	.work li:nth-last-child(-n+2) .item{margin-bottom:30px;}
	.work li:last-child .item{margin-bottom:0;}
	.block-nav-work li{display:block;}
	.block-nav-work li a{padding:30px 32px;display:block;margin-right:0;}
	.portfolio.single .main-title h1{line-height:50px;}
	.portfolio.single .main-title h3{position:relative;top:-25px;}
	.block-single .col-sm-5.col-md-offset-1 p{margin-bottom:40px;}
	.post-title h4, .post-title a{font-size:23px;line-height: 30px;}
	.comments .replys.children {margin-left: 20px;}
	.input-columns .column1, .input-columns .column2{width:100%;}
	.input-columns .column1 .column-inner{padding:0;}
	.block-info .col-md-4:not(:last-child){margin-bottom:30px;}

	
}


@media only screen and (max-width:479px) {
	input, textarea{-webkit-appearance: none;-webkit-border-radius:0;}
	.container {position: relative;}
	.content{padding: 100px 40px;}
	.main-header{margin:0;}
	.main-header:after{bottom: 0;height: 1px;right: auto;width: 100%;top:auto;}
	.right-content.col-md-9, .left-content.col-md-2{width:auto;padding-left: 15px !important;padding-right: 15px !important;}
	.main-nav ul li{float:left; width:20%;font-size:14px;position:relative;margin-bottom:0;}
	.main-nav ul li:after{content:""; background:#eaeaea;height:100%;top:0;left:0;position:absolute;width:1px;}
	.main-nav ul li a{padding:20px 0; font-size: 0;}
	.main-nav ul li a span{display:none;}
	.main-nav ul li a i{width:100%;position:absolute;margin-bottom:0;text-align:center;}
	.main-nav li a.active:after {-webkit-transform:rotate(90deg);transform:rotate(90deg);left: 50%; margin-left: -7px;right: auto;top: 102%;}
	.main-nav.not-tabbed ul li{ width:50%;}
	.main-title h1 {font-size: 45px;}
	.main-title.profile h1 {line-height:50px;}
	.main-title h3{font-size: 17px;position:relative; top:-18px;}
	p.lead-intro{padding:0 3px;}
	img.signature {width: 45%;}
	.block-content.pb-30{padding-bottom:0 !important;}
	.block-content.mb-100.pb-10, .block-content.mb-100.pb-30{margin-bottom:80px !important;}
	.listing-large .listing-large-inner{margin-bottom:0;}
	.listing,.listing-large, .timeline{padding:0;margin-top:0 !important;}
	.listing:after, .listing-inner:before, .listing-inner:after, .timeline:after, .timeline .timeline-inner .name:before, .listing-large-inner:before,
	.listing-large-inner:after, .listing-large:after, .services:before, .services:after, .filter li:not(:last-child):after, .main-nav ul li:first-child:after{content:none;}
	.listing .listing-event .data.left, .listing .listing-event .data.right{width:auto;margin:0;padding:0;float:none;text-align:left;}
	.insta-Feed li, .insta-Feed li a{width:45%;margin:0;}
	.insta-Feed li:last-child{display:none;}
	.timeline .timeline-inner .name{margin-bottom:5px !important;}
	.timeline .timeline-inner .name, .timeline .timeline-inner .detail{width:auto;padding:0;margin:0;text-align:left;float:none;}
	ul.hb-list li{margin-right:2px;}
	.services{margin-top:0 !important;}
	.block-service .det p{padding:0;}
	.services .block-service .col-sm-6:not(:last-child){border-bottom:1px solid #eaeaea;}
	.services .block-service .col-sm-6:nth-child(2n+1){border-right:none;}
	.services .block-service .col-sm-6:first-child{padding-top:0;}
	.services .block-service .col-sm-6:last-child{padding-bottom:0;}
	.block-quote{padding:20px;}
	.footer{position:absolute;top:-41px;z-index:10;right:0px;}
	.footer .social{display:none;}
	.footer .copyright {float:left;margin-left:1px; -webkit-transform: none;transform: none;}
	.listing a.btn-2, .listing a.btn-1, .listing-large a.btn-2, .listing-large a.btn-1  {display:none;}
	.listing-large .listing-event .data.right, .listing-large .listing-event .data.left{width:auto;margin:0;padding:0;float:none;}
	.listing-large .listing-event .data.left{margin-bottom:40px !important;}
	.listing-large .listing-event .data.left h5{float:left;margin-left:0;}
	.rating span{margin:0;}
	.filter li{display:block; margin-right:0;}
	.work li:nth-last-child(-n+2) .item{margin-bottom:30px;}
	.work li:last-child .item{margin-bottom:0;}
	.block-nav-work li{display:block;}
	.block-nav-work li a{padding:30px 20px;display:block;margin-right:0;}
	.portfolio.single .main-title h1{line-height:50px;}
	.portfolio.single .main-title h3{position:relative;top:-25px;}
	.block-single .col-sm-5.col-md-offset-1 p{margin-bottom:40px;}
	.post-title h4, .post-title a{font-size:23px;line-height: 30px;}
	.comments .replys.children {margin-left: 20px;}
	.comments .author-img{float:none;}
	.comment-content{margin-left:0;margin-top:60px;}
	.input-columns .column1, .input-columns .column2{width:100%;}
	.input-columns .column1 .column-inner{padding:0;}
	.block-info .col-md-4:not(:last-child){margin-bottom:30px;}
	
}




`;
