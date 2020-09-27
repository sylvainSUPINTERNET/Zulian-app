import React from "react";

const Card = (props) => {

    return (
        <div className="card mt-3 text-white"  style={{backgroundColor: '#000000'}}>
            <div className="card-body">
                <h4 className="card-title rainbow3">Card title</h4>
                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk
                    of the card's
                    content.</p>
                <button className="btn purple-gradient">Acheter</button>
            </div>

        </div>
    )

};


export default Card;
