import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import logo from "../images/logo.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="navbar">
                <Container>
                    <Grid container>
                        <Link className="logo">
                            <img src={logo} alt="" />
                        </Link>

                           
                            <ul className={
                            showMediaIcons ? "menu mobile-menu-link" : "menu"
                                }>
                                <li><Link to="home">Home</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="best-sales">Best Sales</Link></li>
                                <li><Link to="products">Products</Link></li>
                                <li><Link to="testimonial">Testimonial</Link></li>
                                <li><Link to="blogs">Blogs</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                        {/* </div>  */}
                        <div className="phone-number">
                            <i class="fas fa-headphones"></i>
                            <span>(123) 8800-555</span>
                        </div>
                        <div className="hamburger-menu">
                            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                <GiHamburgerMenu />
                            </a>
                        </div>
                    </Grid>
                </Container>
            </nav>   
        </>
    )
}

export default Navbar;
