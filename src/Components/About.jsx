import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import about from "../images/About/about-vegetables.png";

const About = () => {
    return (
        <>
            <div className="about" id="about">
                <Container>
                    <Grid container>
                        <Grid item lg={6} sm={6} xs={12}>
                            <div className="about-left">
                                <img src={about} alt="" />
                            </div>
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <div className="about-right">
                                <span>about us</span>
                                <h1>We Believe in Working with Accredited Farmers</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam delectus ipsum quos voluptas excepturi, porro recusandae quam animi molestias necessitatibus modi omnis eligendi nemo quo. Ipsam iure aut ratione!</p>
                                <a href="" className="btn btn-green">
                                Learn More 
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>   
        </>
    )
}

export default About;
