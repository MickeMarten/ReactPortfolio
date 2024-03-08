import Contact from "./Contact.tsx";
import About from './About.tsx'



function MainSection() {
  return ( <section className="text-white"> 
  
        <About/>
      <Contact email='KarlMikael.Martensson@gmail.com' adress='Butgatan 16' postalAdress='60240, Norrköping Sweden' phone='+46739919218' vacation={false} />
    </section>)
}

export default MainSection;
