import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Offers from "./Components/Offers/Offers";
import HottestCategories from "./Components/HottestCategories/HottestCategories";
import SellingProducts from "./Components/SellingProducts/SellingProducts";
import About from "./Components/About";
import Achievements from "./Components/Achievements/Achievements";
import Testimonial from "./Components/Testimonial/Testimonial";
import PopularProducts from "./Components/PopularProducts/PopularProducts";
import Blog from "./Components/Blog/Blog";
import Client from "./Components/Client/Client";
import Footer from "./Components/Footer";
import DelicacyApp from "./Components/DelicacyApp";
import Navbar from "./Components/Navbar";


const App = () => {
    return(
        <>
            <Navbar />
            <Home />
            <Offers/>
            <HottestCategories />
            <SellingProducts />
            <About />
            <PopularProducts />
            <Achievements />
            <Testimonial />
            <DelicacyApp />
            <Blog />
            <Client />
            <Footer />

        </>
    );
}

export default App;