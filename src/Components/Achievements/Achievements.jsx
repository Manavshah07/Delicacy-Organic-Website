import { Container, Grid } from '@material-ui/core';
import React from 'react';
import illustrate from "../../images/winning/illustrate.png";
import AchievementsRow from './AchievementsRow';
import AchievementsData from './AchievementsData';

const Achievements = () => {
    return (
        <>
            <div className="achievements">
                <Container >
                    <Grid container>
                        {
                            AchievementsData.map((val, ind) => {
                                return <AchievementsRow key ={ind} 
                                            imgsrc = {val.imgsrc}
                                            numbers = {val.numbers}
                                            name = {val.name}
                                        />
                                    })
                        }
                    </Grid>
                </Container>
            </div>        
        </>
    )
}

export default Achievements;
