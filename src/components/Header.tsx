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
        <li className="cursor-pointer">{headerNav.about}</li>
        <li className="cursor-pointer">{headerNav.contact}</li>
        <li><a href="https://github.com/">{headerNav.gitHub}</a></li>
        </ul>
     </nav>
     <h1 className="">Mikael Mårtensson</h1>
        <p className="">
          System developer with passion for active learning, problem solving,
          adaptablility and social skills
        </p>
      <VisitedBtn/>
    </header>
  );
}
export default Header;
