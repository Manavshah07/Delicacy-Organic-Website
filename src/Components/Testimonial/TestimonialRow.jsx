import React from 'react';

const TestimonialRow = (props) => {
    return (
        <>
            <div className="testimonial-card">
                <h6>66</h6>
                <div className="like-icon">
                    <i class="fas fa-star fa-1x"></i>
                    <i class="fas fa-star fa-1x"></i>
                    <i class="fas fa-star fa-1x"></i>
                    <i class="fas fa-star fa-1x"></i>    
                    <i class="fas fa-star fa-1x"></i>
                </div>
                <p>"This plugin is amazing with the current version, I can't imagine it,how cool will it be when you finish the all"</p>
                <div className="testimonial-column">
                    <div className="testimonial-img">
                        <img src={props.imgsrc} alt="" />
                    </div>
                    <div className="testimonial-desc">
                        <h3>{props.name}</h3>
                        <h5>{props.profession} <span>{props.company}</span></h5>
                    </div>       
                </div>
            </div>  
        </>
    )
}

export default TestimonialRow;
