import React from 'react'

const ClientRow = (props) => {
    return (
        <>
            <div className="our-client">
                <img src={props.imgsrc} alt="" />
            </div>  
        </>
    )
}

export default ClientRow;
