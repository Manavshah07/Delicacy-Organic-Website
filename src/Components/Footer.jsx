import { Container, Grid } from '@material-ui/core';
import React from 'react';
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <>
            <div className="footer" id="contact">
                <Container>
                    <div className="footer-top">
                        <div className="footer-bg">
                            <Grid container>
                                <div className="footer-desc">
                                    <div className="footer-logo">
                                        <img src={logo} alt="" />
                                    </div>
                                    <div className="footer-address">
                                        <p>GymVast, 18 East 50th Street, 4th <br/> Floor, New York, NY 10022</p>
                                    </div>
                                    <div className="footer-social-links">
                                        <Grid container>
                                            <div className="social-icon">
                                                <i class="fab fa-facebook-f"></i>
                                            </div>
                                            <div className="social-icon">
                                                <i class="fab fa-twitter"></i>
                                            </div>
                                            <div className="social-icon">
                                                <i class="fab fa-google-plus-g"></i>
                                            </div>
                                            <div className="social-icon">
                                                <i class="fab fa-youtube"></i>
                                            </div>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="footer-categories">
                                    <h3>Categories</h3>
                                    <p>Fruits & Vegetables</p>
                                    <p>Dairy Products</p>
                                    <p>Package Foods</p>
                                    <p>Beverages</p>
                                    <p>Beverages</p>
                                </div>
                                <div className="footer-categories">
                                    <h3>Useful Links</h3>
                                    <p>Payment & Tax</p>
                                    <p>Terms of Service</p>
                                    <p>My Account</p>
                                    <p>Return Policy</p>
                                    <p>Discount</p>
                                </div>
                                <div className="footer-newsletter">
                                    <h3>Newsletter</h3>
                                    <p>Get bow free 20% discount for all <br /> products on your first order</p>
                                    
                                    <span className="p-t-20">T : +1-202-555-0184</span>
                                    <span>E : hello@fisinostore.co.uk</span>
                                </div>
                            </Grid>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-column">
                            <div className="delicacy-year">
                                <p>@2021 Delicacy Store</p>
                            </div>
                            <div className="footer-column">
                                <div className="footer-policy">
                                    <p>Privacy Policy</p>
                                </div>
                                <div className="footer-policy">
                                    <p>Terms & Conditions</p>
                                </div>
                                <div className="footer-policy">
                                    <p>Cookies/Ad Choices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer;
