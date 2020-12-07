import React from "react"
import ClientLogo from "../components/clientsLogo/clientsLogo";
// import { HomeWrapper } from "../components/home/home.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styled from "styled-components";



export const ContactWrapper = styled.div`
    max-width: 960px;
    margin:15px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    box-shadow: 0px 5px 10px #ccc;
    min-height: 550px;
    padding: 15px;
    h2 {
        margin-top: 20px;
        color: #2e308f;
        font-size: 30px;
        margin-bottom: 20px;
        
    }
    .contact-us-map iframe {height:200px;}
    input >.form-control{
        max-height:20px;
    }
    .btn-warning {
        color: #fff;
        background-color: #f0ad4e;
        border-color: #eea236;
    }
    p {
        margin: 0 0 10px;
    }
    input{
        padding :6px 12px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    form {
        display: block;
        margin-top: 0em;
    }
`;


const IndexPage = () => {


    return (
        <ContactWrapper>
            <h1>contact page</h1>
        </ContactWrapper>
    )
}

export default IndexPage;
