import React from 'react'

const AchievementsRow = (props) => {
    return (
        <>
            <div className="achievement-flex">
                <div className="achievements-img">
                    <img src={props.imgsrc} alt="" />
                </div>
                <div className="achievements-no">
                    <p>{props.numbers}<span>+</span></p>
                    <h5>{props.name}</h5>
                </div>
            </div>  
        </>
    )
}

export default AchievementsRow;
