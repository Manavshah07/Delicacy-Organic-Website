import React, {useState} from 'react'

const SellingProductsRow = (props) => {

    const [num, setnum] = useState(1);
    const incNum = () => {
        setnum(num + 1);
    }
    const decNum = () => {
        if(num === 1) {
            alert("You should buy atleast one product");
        } else {
            setnum(num - 1);
        }
    }

    return (
        <>
            <div className="products-card ">
                        {/* <h4>-25%</h4> */}
                <div className="like-icon">
                    <i class="far fa-heart fa-2x" ></i>
                </div>
                <img src={props.imgsrc} alt="" />
                <h5>{props.title}</h5>
                <h3>{props.desc1}</h3>
                <h3>{props.desc2}</h3>
                <p>{props.price}<span>/kg</span> </p>
                <div className="flex">
                    <div className="quantity">
                        <div className="btn-quantity">
                            <i class="fas fa-minus" onClick={decNum}></i>
                            <span>{num}</span>
                        </div>
                        <div className="btn-quantity">
                            <i class="fas fa-plus" onClick={incNum}></i>
                        </div>
                    </div>
                    <div className="cart">
                        <i class="fas fa-shopping-cart fa-1x"></i>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default SellingProductsRow;
