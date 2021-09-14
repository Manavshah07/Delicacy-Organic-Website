import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import SellingProductsRow from './SellingProductsRow';
import SellingProductsData from './SellingProductsData';


const SellingProducts = () => {
    return (
        <>
            <div className="selling-products" id="best-sales">
                <Container>
                    <div className="heading">
                        <h1>Best Selling Products</h1>
                    </div>
                    <Grid container>
                        {
                            
                            SellingProductsData.map((val, ind) => {
                                return <SellingProductsRow key ={ind} 
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

export default SellingProducts
