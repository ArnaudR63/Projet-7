import React from "react";
import bannerImage from '../../assets/banner-home.png'

function Banner() {
    return(
            <h1 id='banner-home' style={{backgroundImage: `linear-gradient(#00000030, #00000030), url(${bannerImage})`}}><span>Chez vous,</span><span>partout et ailleurs</span></h1>
    )
}

export default Banner;