import Contact from "./Contact.tsx";
import VisitedBtn from "./CountBtn.tsx";



function MainSection() {
  return ( <section className="text-white"> 
    <VisitedBtn/>
        
      <Contact email='KarlMikael.Martensson@gmail.com' adress='Butgatan 16' postalAdress='60240, Norrköping Sweden' phone='+46739919218' vacation={false} />
    </section>)
}

export default MainSection;
