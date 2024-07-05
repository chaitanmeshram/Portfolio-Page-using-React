import React from "react"

//{promps.img_url}
export default function Card(promps){
    return(
        <div className="Card_Container">
            <img src={promps.img_url} className="Card_img"/>
            <h3>{promps.title}</h3>
            <div className="img_stats">
                <p>{promps.discription}</p>
                <a href={promps.source_code}><button className="Card_button" >Source Code</button>
                </a>
            </div>
            
        </div>
        
    )
}