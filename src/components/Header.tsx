import { useState } from "react";
import VisitedBtn from "./CountBtn";
import About from "./About";

function Header() {
  let headerNav = {
    about: 'About',
    contact: 'Contact',
    gitHub: 'GitHub'
  }
 const [show, setShow] = useState(false)

  function showContent(){
   
  }
 
  return (
    <header className=" text-white border-b border-sky-500">
      <nav className="">
        <ul> 
        <li onClick={()=> showContent()}>{headerNav.about}</li>
        <li>{headerNav.contact}</li>
        <li><a href="https://github.com/">{headerNav.gitHub}</a></li>
        </ul>
     </nav>
      <VisitedBtn/>
    </header>
  );
}
export default Header;
