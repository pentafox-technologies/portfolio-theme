import React from 'react';
import styled from 'styled-components';
export const HomeWrapper = styled.div`

.right-content{
    padding-left:0px;
    padding-right:0px;
}
.right-cont{
    text-align:center;
    background:white;
}
.sub-title{
    margin-bottom:40px;
}
.content {
    padding: 100px;
    position: relative;
}
.block-content{
    margin-bottom:100px;
}
.h1{
    font-size: 35px;
    font-weight: 400;
    margin-bottom:20px;
}
.h3{
    font-size: 20px;
    color: #999999;
    font-weight: 300;
}
.h2{
    font-size: 15px;
    font-weight: 400;
    display: inline-block;
    position: relative;
    text-transform:uppercase;
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
.intro{
    font-weight: 400;
    font-style: italic;
    font-size: 15px;
    line-height: 27px;
    color:#999999;
}
.listing{
    margin-top:40px;
    padding: 40px 0px;
    position:relative;
}

.listing-inner:before {
    background: #2a2a2a;
    top: -20px;
    content: " ";
    height: 12px;
    left: 35.3%;
    position: absolute;
    width: 12px;
    z-index: 0;
}
.listing-inner:after {
    background: #ffd42d;
    bottom: -20px;
    content: " ";
    height: 12px;
    left: 35.3%;
    position: absolute;
    width: 12px;
    z-index: 0;
}
.listing-data {
    position: relative;
    z-index: 2;
}
li {
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
}
.left-data {
    float: left;
    margin-left: -17%;
    padding-right: 28px;
    position: relative;
    text-align: right;
    width: 53%;
    
}
.right-data {
    margin-left: 35%;
    padding-left: 38px;
    position: relative;
    text-align: left;
    width: 71%;
}
.listing:after {
    background-color: #eaeaea;
    content: " ";
    height: 100%;
    left: 36.5%;
    position: absolute;
    top: 0;
    width: 1px;
    z-index: 0;
}
ul{
    list-style:none;
}
.emph-1{
    color:#999999;
}
.timeline
{
        padding: 60px 0 30px 0;
        position: relative;
}
.timeline-inner {
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
}
.name {
    float: left;
    font-size: 18px;
    padding-right: 4px;
    position: relative;
    text-align: right;
    width: 46%;
}
.detail {
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
.name.switched:before {
    background: #2a2a2a;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
}
.name:before {
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
span.date {
    color: #999999;
    font-size: 13.5px;
    font-weight: 400;
}
.name h4 {
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 400;
}
.detail >p{
    color: #999999;
}
.sub-title{
    margin-top:100px;
}
.listing-large {
    padding: 60px 0 40px 0;
    position: relative;
    margin-top:40px;
}
.listing-large .listing-large-inner {
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
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
    text-align: left;
    width: 57%;
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
.listing-large .listing-event .data.right h5 {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
}
.listing-large .listing-event .data.right li p {
    font-size: 14.5px;
}
.emph-3{
    font-style:italic;
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
.listing-large .listing-event .data.right li:nth-child(2) ul li {
    font-size: 15px;
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
.emph-1 {
    color: #2a2a2a;
}
h5{
    font-size: 15px;
    font-weight: 500;
    margin-bottom:20px;
}
.emp-3{
    color:#999999;
    font: 14.5px "Source Sans Pro","Helvetica","Arial",sans-serif;
}
.content {
    padding: 100px;
    position: relative;
}
.mb-100 {
    margin-bottom: 100px !important;
}
.mb-20 {
    margin-bottom: 20px !important;
}
.mb-40 {
    margin-bottom: 40px !important;
}
.sub-title h2 {
    font-size: 15px;
    font-weight: 700;
    display: inline-block;
    position: relative;
}
.uppercase {
    text-transform: uppercase;
}
.main-title h5 {
    font-size: 15px;
    color: #999999;
    font-weight: 300;
}
.info {
    border: 1px solid #eaeaea;
    padding: 60px 0;
    font-size: 15px;
}
.mb-20 {
    margin-bottom: 20px !important;
}
.info i {
    font-size: 30px;
    color: #2a2a2a;
}
.info h5 {
    font-size: 15px;
    font-weight: 600;
    text-transform: capitalize;
}
.sub-title h2 {
    font-size: 15px;
    font-weight: 700;
    display: inline-block;
    position: relative;
}
.contact-form, .reply-form {
    position: relative;
}
.input-columns .column1, .input-columns .column2 {
    float: left;
    width: 50%;
}
.input-columns .column1 .column-inner {
    padding: 0 15px 0 0;
}
.contact-form input[type="text"], .reply-form input[type="text"] {
    height: 52px;
}
.contact-form textarea, .reply-form textarea {
    width: 100%;
    color: #999999;
    font-family: "Roboto Slab","Helvetica","Arial",sans-serif;
}
.contact-form .submit, .reply-form .submit {
    cursor: pointer;
    width: 100%;
    height: 50px;
}
.but.opc {
    color: #ffffff;
    border: 1px solid #525252;
    background: #525252;
}
.but {
    padding: 8px 25px;
    text-transform: uppercase;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 400;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
.footer{
	position:relative;
}


.social{
	margin-left:1px;
}

.social li {
    display: table;
    margin-bottom: 1px;
    text-align: center;
	position:relative;
}

 .social a {
    background:#ffd42d;
    color: #2a2a2a;
    height: 40px;
    width: 40px;
	display: inline-block;
 	vertical-align: middle;
	  -webkit-transform: translateZ(0);
	  transform: translateZ(0);
	  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	  -webkit-backface-visibility: hidden;
	  backface-visibility: hidden;
	  -moz-osx-font-smoothing: grayscale;
	  position: relative;
	  -webkit-transition-property: color;
	  transition-property: color;
	  -webkit-transition-duration: 0.3s;
	  transition-duration: 0.3s;
}


.social a:before{
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


.social a:hover, .social a:focus, .social a:active {
  color:#ffffff;
	z-index:2;
}


.social a:hover:before, .social a:focus:before, .social a:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}


.social li i {
    line-height: 40px;
	font-size:13px;
	display:block;
}



.footer .copyright{
 	background: #2a2a2a;
    float: left;
    margin-left: 41px;
    min-width: 163px;
    padding: 9px 20px;
    transform: rotate(90deg);
	-webkit-transform: rotate(90deg);
	-ms-transform: rotate(90deg); 
    transform-origin: left top 0;
    -ms-transform-origin: left top;
    -webkit-transform-origin: left top 0;
    -o-transform-origin: left top;
    
}

.footer .copyright p{
	color:#ffffff;
	font-size:12px;
    font-weight: 400;
	white-space: nowrap;
}
.footer{
	width: 9.33333%;
}
`;