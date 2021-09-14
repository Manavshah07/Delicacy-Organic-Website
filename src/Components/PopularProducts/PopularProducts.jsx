import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import PopularProductsRow from './PopularProductsRow';
import PopularProductsData from './PopularProductsData';


const PopularProducts = () => {
    return (
        <>
            <div className="selling-products popular-products" id="products">
                <Container>
                    <div className="heading">
                        <h1>Most Popular <span>Products</span></h1>
                    </div>
                    <Grid container>
                        {
                            
                            PopularProductsData.map((val, ind) => {
                                return <PopularProductsRow key ={ind} 
                                            imgsrc = {val.imgsrc}
                                            title = {val.title}
                                            desc1 = {val.desc1}
                                            desc2 = {val.desc2}
                                            price = {val.price}
                                        />
                            })
                        }            
                    </Grid>
                </Container>
            </div>
            
        </>
    )
}

export default PopularProducts;
