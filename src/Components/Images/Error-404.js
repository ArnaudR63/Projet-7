import React from "react";
import Error404 from '../../assets/404.svg'

function Error() {
    return(
            <img src={Error404} alt="404" className="error-404"/>
    )
}

export default Error;