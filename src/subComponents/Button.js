import React from 'react';

const Button = (props) => {
    let styles={
        color: props.textColor,
        backgroundColor: props.bgColor,
        fontFamily: props.font,
        fontSize: "large",
        boxShadow: "1px 1px 10px"
    }
    return (
        <button className='btn border border-dark' style={styles} onClick={props.onClick}>    
            {props.imgUrl!=null ? <img src={props.imgUrl} style={{height: "30px", width: "30px"}} /> : <span></span>}
            <span> <b>{props.description}</b></span>
        </button>
    );
}

export default Button;
