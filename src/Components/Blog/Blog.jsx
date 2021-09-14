import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import blog from "../../images/blog/blog-1.jpg";
import BlogData from './BlogData';
import BlogRow from './BlogRow';

const Blog = () => {
    return (
        <>
            <div className="blog" id="blogs">
                <Container>
                    <div className="heading">
                        <h1>Latest News and Blogs</h1>
                    </div>
                    <Grid container>
                        {
                            BlogData.map((val, ind) => {
                                return <BlogRow key ={ind} 
                                            imgsrc = {val.imgsrc}
                                            title1 = {val.title1}
                                            title2 = {val.title2}
                                        />
                                    })
                        }
                    </Grid>
                </Container>
            </div>  
        </>
    )
}

export default Blog;
