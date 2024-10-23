import React from "react";
import { Link } from "react-router-dom";


function Footer(){




    return(
        <div className="w-full py-5 px-5 bg-white flex items-center justify-between">
            <div className="">
                <h1 className="capitalize">© 2024 stock AI. all rights reserved</h1>
            </div>
            <div className="hidden lg:block">
                <ul className="inline-flex">
                    <li className="capitalize ml-[calc(16px)]"><Link to="#">terms</Link></li>
                    <li className="capitalize ml-[calc(16px)]"><Link to="#">privacy</Link></li>
                    <li className="capitalize ml-[calc(16px)]"><Link to="#">cookies</Link></li>
                </ul>
            </div>
        </div>
    )
};



export default Footer;