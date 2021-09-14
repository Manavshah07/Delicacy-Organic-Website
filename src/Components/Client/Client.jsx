import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ClientData from './ClientData';
import ClientRow from './ClientRow';


const Client = () => {
    return (
        <div>
            <div className="client">
                <Container>
                    <div className="heading">
                        <h1>Our Happy Clients</h1>
                    </div>
                    <Grid container>
                        {
                            ClientData.map((val, ind) => {
                                return <ClientRow key ={ind} 
                                            imgsrc = {val.imgsrc}
                                        />
                                    })
                        }
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Client;
