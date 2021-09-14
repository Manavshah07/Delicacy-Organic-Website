import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';

const BlogRow = (props) => {
    return (
        <>
            <div className="blog-card">
                <img src={props.imgsrc} alt="" />
                <div className="blog-inner-card">
                    <Grid container>
                        <div className="blog-info">
                            <i class="fas fa-user"></i>
                            <span>By Deniel</span>
                            <span className="line">||</span>
                        </div>
                        <div className="blog-info">
                            <i class="fas fa-calendar-alt"></i>
                            <span>Aug 07, 2021</span>
                        </div>
                    </Grid>
                    <h3>{props.title1}</h3>
                    <h2>{props.title2}</h2>
                    <Grid container>
                        <div className="read-more-btn">
                            <a href="">Read More<span> ></span> </a>
                        </div>
                        <div className="chats">
                            <i class="fas fa-comments"></i>
                            <span>03</span>
                        </div>
                    </Grid>
                </div>
            </div>
  
        </>
    )
}

export default BlogRow;
