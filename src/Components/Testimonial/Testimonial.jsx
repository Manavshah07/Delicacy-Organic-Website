import { Container, Grid } from '@material-ui/core';
import React from 'react';
import TestimonialData from './TestimonialData';
import TestimonialRow from './TestimonialRow';

const Testimonial = () => {
    return (
        <>
            <div className="testimonial" id="testimonial">
                <Container>
                    <div className="heading">
                        <h1>Why Customer Love Us?</h1>
                    </div>
                    <Grid container>
                        {
                            TestimonialData.map((val, ind) => {
                                return <TestimonialRow key ={ind} 
                                            imgsrc = {val.imgsrc}
                                            name = {val.name}
                                            profession = {val.profession}
                                            company = {val.company}
                                        />
                                    })
                        }
                    </Grid>
                </Container>
            </div>  
        </>
    )
}

export default Testimonial;
