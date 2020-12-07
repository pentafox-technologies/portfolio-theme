import styled from 'styled-components';

export const HeaderWrapper = styled.div`

.header{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
    display: block;

}
.col-md-2.left-content {
    width: 14.6667%;
    z-index: 10;
}   
div{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
}
.pd-r0 {
    padding-right: 0 !important;
}
.main-header {
    margin-left: 1px;
    background:white;
}
img {
    height: auto;
    max-width: 100%;
}
img {
    display: inline-block; 
    vertical-align: middle;
}
.name-profile {
    background: #3f3f3f;
    padding: 5px 0;
    margin-bottom: 1px;
}
.t-center {
    text-align: center;
}
h5 {
    color: #e8e8e8;
    font-weight: 700;
    font-size: 13px;
    display: block;
}
.uppercase {
    text-transform: uppercase;
}
nav{
    display:block;
}
.main-nav ul li{
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
.main-nav ul li a {
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
.main-nav li a.active span {
    color: #2a2a2a;
}
.main-nav ul li a span {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: #999999;
}
.main-header:after {
    content: "";
    background: #eaeaea;
    right: -1px;
    position: absolute;
    width: 1px;
}

`;
