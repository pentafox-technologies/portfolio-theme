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
.icon {
    font-size: 25px;
    display: block;
    margin-bottom: 10px;
    margin-left:70px;
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
`;
