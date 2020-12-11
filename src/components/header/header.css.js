import styled from 'styled-components';

export const HeaderWrapper = styled.div`

.col-md-2{
    padding:0px 0px;

}
.col-md-2.left-content {
    z-index: 10;
}
.pd-r0 {
    padding-right: 0 !important;
}

.main-header {
    position: relative;
    margin-left: 1px;
}
.img-profile {
    position: relative;
}
.img-profile .name-profile h5 {
    color: #e8e8e8;
    font-weight: 700;
    font-size: 13px;
    display: block;
}
.img-profile .name-profile {
    background: #3f3f3f;
    padding: 5px 0;
    margin-bottom: 1px;
}
ul {
    list-style: none;
    padding:0px;
}
.main-nav ul li {
    display: block;
    position: relative;
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 1px;
}
.main-nav li a.active {
    background: #ffd42d;
    color: #2a2a2a;
    z-index: 11;
}
.main-header {
	position:relative;
	margin-left: 1px;
	
}
.main-header:after {
    content: "";
    background: #eaeaea;
    height: 100%;
    top: 0;
    right: -1px;
    position: absolute;
    width: 1px;
}
.main-nav ul li a {
    background: #ffffff;
    color: #2a2a2a;
    text-transform: uppercase;
    padding: 30px 0;
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    position: relative;
    transition-property: color;
    transition-duration: 0.3s;
    width: 100%;
}
a, a:hover, a:active, a:visited, a:focus {
    text-decoration: none;
}
.main-nav li a.active:before {
    color: #ffffff;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffd42d;
    transform: scaleX(1);
    transform-origin: 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
}
.main-nav li a:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffd42d;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
}
.main-nav ul li a i {
    font-size: 25px;
    display: block;
    margin-bottom: 10px;
}
.main-nav li a.active span {
    color: #2a2a2a;
}
.main-nav ul li a span {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: #999999;
}
.main-nav li a:hover, .main-nav li a:focus, .main-nav li a:active, .main-nav li a:active span, .main-nav li a:hover span, .main-nav li a:focus span {
    color:#2a2a2a;
  }
  main-header:after {
    content: "";
    background: #eaeaea;
    height: 100%;
    top: 0;
    right: -1px;
    position: absolute;
    width: 1px;
}
.main-nav li a.active:after {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    top: 50%;
    margin-top: -25px;
    right: -10px;
    border-width: 25px 0 25px 15px;
    border-color: transparent transparent transparent #ffd42d;
}
.main-header {
    position: relative;
    margin-left: 1px;
}
  .main-nav li a:hover:before, .main-nav li a:focus:before, .main-nav li a:active:before {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
  }
nav{
    display:block;
}
.t-center {
    text-align: center;
}
.uppercase {
    text-transform: uppercase;
}



//----------------------------------media queries----------------------------------

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
	.footer{position:absolute;top:-41px;z-index:10;right:0px;}
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
	.main-nav ul li a{padding:0px 0; font-size: 0;}
	.main-nav ul li a span{display:none;}
	.main-nav ul li a i{
		width:100%;
		margin-bottom:0;
		text-align:center;
	}
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
	.main-nav ul li a{
		padding:25px 25px 25px 25px;
		 font-size: 0;
		}
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
