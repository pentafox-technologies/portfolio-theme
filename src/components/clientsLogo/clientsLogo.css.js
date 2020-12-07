import styled from 'styled-components';
import { sm } from 'helpers/device';

export const ClientLogoSection = styled.div`
.client-block .carousel {
  border: 1px solid #ddd;
  padding: 5px;
  background-image:url({background});
}
.client-block .item {
  background: url(../images/slider/strip-line.gif ) 0 0 repeat;
  padding: 5px;
  width: 100%;
  float: left;
}
.client-block {
  padding: 15px 0px;
}
.client-items {
  display: flex;
  flex-wrap: wrap;
  background-color:rgb(226,226,226);
  background-image:url("../../images/slider/strip-line.gif");
  background-repeat:repeat-x;
  div{
    margin-top:10px;
  }
}
// .carousel-indicators {
//   bottom: -11px;
// }
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border .2s ease-in-out;
}

`;
