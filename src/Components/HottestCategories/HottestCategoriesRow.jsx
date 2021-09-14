import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HottestCategoriesRow = (props) => {
    
    return (
        <>
            <div className="hottest-items">
                <img src={props.imgsrc} alt="" />
                <h2> {props.title } </h2>
                <p>({props.item})</p>
            </div>
        </>
    )
}

export default HottestCategoriesRow;
