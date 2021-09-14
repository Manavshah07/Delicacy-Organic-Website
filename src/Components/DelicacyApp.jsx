import { Container, Grid } from '@material-ui/core';
import React from 'react';
import delicacy from "../images/Our App/App.png";

const DelicacyApp = () => {
    return (
        <>
            <div className="delicacy-app">
                <Container>
                    <div className="delicacy-app-bg">
                        <Grid container>
                            <div className="delicacy-desc">
                                <h1>Download Delicacy <br/> Mobile App</h1>
                                <p className="m-t-30">This plugin is amazing with the current version, imagine</p>
                                <p>it, how cool it will be when you finish the all</p>
                                <div className="delicacy-column">
                                    <div className="delicacy-column dark-color">
                                        <div className="app-logo">
                                            <i class="fab fa-apple fa-3x"></i>
                                        </div>
                                        <div className="app-desc">
                                            <p>Download on the</p>
                                            <h3>App Store</h3>
                                        </div>
                                    </div>
                                    <div className="delicacy-column dark-color">
                                        <div className="app-logo">
                                            <i class="fab fa-google-play fa-3x"></i>
                                        </div>
                                        <div className="app-desc">
                                            <p>Download on the</p>
                                            <h3>Play Store</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="delicacy-img">
                                <img src={delicacy} alt="" />
                            </div>
                        </Grid>
                    </div>
                </Container>
            </div> 
        </>
    )
}

export default DelicacyApp;
