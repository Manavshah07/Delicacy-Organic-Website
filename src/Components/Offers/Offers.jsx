import React from "react";
import { Container, Grid, makeStyles } from '@material-ui/core';
import OfferData from "./OfferData";
import OfferRow from "./OfferRow";
import img from "../../images/home/discount.JPG";

const Offers = () => {

    return(
        <>
            <div className="offers">
                <Container>
                    <Grid container>
                            {
                                OfferData.map((val, ind) => {
                                    return <OfferRow key={ind}
                                        imgsrc={val.imgsrc}
                                        title1={val.title1}
                                        title2={val.title2}
                                    />
                                })     
                            }
                    
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Offers;

