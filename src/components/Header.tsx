import { useState } from "react";
import { useEffect } from "react";

interface AboutItem {
  description: string;
  picture: string;
  year: string;
  
}

function Header() {
  const [aboutData, setAboutData] = useState<AboutItem[]>([]);

   useEffect(() =>{
        async function fetchAboutData(){
          const apiUrl = import.meta.env.DEV ? 'http://localhost:1337/api/about' : ''
            const response = await fetch(apiUrl);
            const loot = await response.json();
            setAboutData(loot);
        }
        fetchAboutData();
    })

  let headerNav = {
    about: 'About',
    contact: 'Contact',
    gitHub: 'GitHub'
  }
  const [show, setShow] = useState(false)

 const showContent = ()=>{
  setShow(!show)
 }
 
  return (
    <> 
    <header className=" flex flex-col gap-5 text-white border-b border-sky-500">
      <nav className="ml-12 flex flex-col">
        <ul className="flex flex-row gap-10"> 
        <li className="cursor-pointer" onClick={showContent}>{headerNav.about}</li>
        <li className="cursor-pointer">{headerNav.contact}</li>
        <li><a href="https://github.com/">{headerNav.gitHub}</a></li>
        </ul>
     </nav>
     <h1 className="self-center text-3xl">Mikael Mårtensson</h1>
        <p className="ml-8 max-w-96">
          System developer with passion for active learning, problem solving,
          adaptablility and social skills
        </p>
      
    </header>
    {/* It aint pretty but it workds. */}
    <div className={`${show ? 'flex flex-row gap-3 h-96 w-100 overflow-y-hidden transition-shadow mt-10' : 'hidden'}`}>
    <div className="carousel-container">
      <div className="carousel flex gap-3 ">
        {aboutData.map((item, index) => (
          <div key={index} className="slide w-52 h-64 ">
            <img src={item.picture} alt={`Bild ${index}`} className='w-full h-full object-cover'/>
            <p className='max-h-10 max-w-max text-white'>{item.description}</p>
            <small className="text-white">{item.year}</small>
          </div>
        ))}
      </div>
     
    </div>
  </div>
  </>
  );
}
export default Header;
