import React, { useState } from "react";

const Gig = (props) => {
    //code here
    const [isFavourited, setIsFavourited] = useState(false);

    const favGig = () => {
        setIsFavourited(!isFavourited);
    }

    return (
        <div className={`gig ${isFavourited ? "favourited" : ""}`}>
            <h3>{props.gigname}</h3>
            <img className="giglogo" src={props.image} alt={props.gigname} />
            <p>{props.event}</p>
            <p>{props.date}</p>
            <p>{props.location}</p>

            <button onClick={favGig}>
                {isFavourited ? "* Favourited" : "* Favourite"}
            </button>
        </div>
    );
};

export default Gig;