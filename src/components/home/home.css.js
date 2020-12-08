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

`;
