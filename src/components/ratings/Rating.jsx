import React from "react";
import {FaStar,FaRegStar} from "react-icons/fa";

function Rating(props){
    const [value,setValue] = React.useState(props.value);
    
    const updateRating=index=>{
        console.log(index);
        setValue(index +1);
    };
    const renderStars=value=>{
        let stars=[];
        for (let i=0;i<5;i++){
            stars.push(
                i<value? (
                <FaStar key={i} onClick={()=>updateRating(i)}/>
            ):(
                <FaRegStar key={i} onClick={()=>updateRating(i)}/>
                ),
            );
        }
        return stars;
    }
    return(
        <div style={{color:props.color}}>{renderStars(value)}</div>
    )
}
export default Rating;

Rating.defaultProps={
    value:0,
    color: "#D7BE69",
}