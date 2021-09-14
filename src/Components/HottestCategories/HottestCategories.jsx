import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import HottestCategoriesRow from './HottestCategoriesRow';
import HottestCategoriesData from './HottestCategoriesData';

const HottestCategories = () => {
    
    return (
        <>
            <div className="hottest-categories">
                <Container className="container">
                    <div className="column">
                        <div className="heading">
                            <h1>Browser Our Hottest</h1>
                            <h2>Categories</h2>
                        </div>
                        <div className="hottest-categories-btn">
                            <a href="" className="btn btn-green">See All 
                            </a>
                        </div>
                    </div>
                    <Grid container>
                        {
                            HottestCategoriesData.map((val, ind) => {
                                return <HottestCategoriesRow key ={ind} 
                                            imgsrc = {val.imgsrc}
                                            title = {val.title}
                                            item = {val.item}
                                        />
                                    })
                        }
                    </Grid>
                </Container>
            </div>   
        </>
    )
}

export default HottestCategories;