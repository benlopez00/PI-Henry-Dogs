import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1>Dogpedia</h1>
            </div>
            <Link to='/home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}