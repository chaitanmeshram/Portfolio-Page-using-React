import React from "react";

export default function Profile(promps) {
    return (
        <div className="Card_Container">
            <img src={promps.img_url} className="Card_img" alt={promps.title} />
            <h3>{promps.title}</h3>
            <div className="img_stats">
                <a href={promps.profile_link}><button className="Card_button">Source Code</button></a>
            </div>
        </div>
    );
}
