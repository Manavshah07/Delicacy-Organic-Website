import React from "react";
import { Container, Grid, makeStyles } from '@material-ui/core';
import home from "../images/home/home.png";


const Home = () => {
    return(
        <>
            <div className="home" id="home">
                <Container className="container">
                    <Grid container>
                        <Grid item lg={6} sm={6} xs={12}>
                            <div className="home-left">
                                <p>we are delicacy</p>
                                <h1>Choose delicacy</h1>
                                <h1>the best healthy </h1>
                                <h1 className="m-b-50">way to life</h1>
                                <a href="" className="btn btn-green">Shop Now 
                                </a>
                            </div>
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <div className="home-right">
                                <img src={home} alt="Home" />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Home;