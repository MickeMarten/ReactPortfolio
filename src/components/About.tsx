// import { useState, useEffect } from 'react';
// import Header from './Header';
// import cors from 'cors';


// interface AboutItem {
//     description: string;
//     picture: string;
//     year: string;
    
// }




// function About() {
//     const [aboutData, setAboutData] = useState<AboutItem[]>([]);

//    useEffect(() =>{
//         async function fetchAboutData(){
//             const response = await fetch('http://localhost:1337/api/about')
//             const loot = await response.json()
//             setAboutData(loot);
//         }
//         fetchAboutData();
//     })



    

//   return (
     
//   <div className='?flex flex-row gap-3 h-96 w-100 overflow-y-hidden transition-shadow : hidden  '>
//     <div className="carousel-container">
//       <div className="carousel flex gap-3 ">
//         {aboutData.map((item, index) => (
//           <div key={index} className="slide w-52 h-64 ">
//             <img src={item.picture} alt={`Bild ${index}`} className='w-full h-full object-cover'/>
//             <p className='max-h-10 max-w-max '>{item.description}</p>
//             <small>{item.year}</small>
//           </div>
//         ))}
//       </div>
     
//     </div>
//   </div>
 
// );
// }

// export default About;