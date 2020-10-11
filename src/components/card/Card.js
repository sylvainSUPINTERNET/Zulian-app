import React from "react";

const Card = (props) => {

    let background = {
        backgroundColor: '#000000'
    };

    if ( props.backgroundColor ) {
        background.backgroundColor = props.backgroundColor
    }

    if ( props.backgroundColor === "purple-gradient") {
        background = {
            backgroundColor: "#e056fd",
            backgroundImage: "linear-gradient(315deg, #e056fd 0%, #000000 74%)"
        }
    }




    return (
        <div className="shadow p-3 card mt-3 text-white"  style={background}>
            <div className="card-body">
                <h4 className="card-title rainbow3">{props.title}</h4>
                <p className="card-text text-white text-justify">{props.text}</p>
                <button className="btn purple-gradient">{props.btnText1}</button>
            </div>

        </div>
    )

};


export default Card;
