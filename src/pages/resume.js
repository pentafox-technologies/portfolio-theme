import React from 'react'
import Header from '../components/header/header';
import { HomeWrapper } from "../components/home/home.css";

const resumePage = () => {

    return (
        <>
            <div className="container" style={{ marginTop: `150px`, marginBottom: `150px` }}>
                <div className="row">
                    <div className="col-md-2">
                        <Header></Header>
                    </div>
                    <div className="col-md-9">
                        <h1>resume page..!</h1>
                    </div>
                </div>
            </div>
        </>

    )
}
export default resumePage;