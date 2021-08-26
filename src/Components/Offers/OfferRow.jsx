import React from "react";
import img from "../../images/home/discount.JPG";
// import { Container, Grid, makeStyles } from '@material-ui/core';

const OfferRow = (props) => {
    return(
        <>
            <div className="column">
                <div className="offer-img">
                    <img src={props.imgsrc} alt="" />
                </div>
                <div className="offer-text">
                    <p> {props.title1} </p>
                    <p> {props.title2} </p>
                </div>
            </div>
        </>
    );
}

export default OfferRow;