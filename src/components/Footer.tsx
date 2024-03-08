import VisitedBtn from "./CountBtn";
import { useState } from "react";

function Footer(){
 
    return(
    <footer className="text-white border-t border-sky-500 h-screen">
        <p>&copy; {new Date().getFullYear()} Mikael Mårtensson</p>
        
    </footer>)

}

export default Footer;