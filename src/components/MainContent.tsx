import Contact from "./Contact";
import About from './About'
import Header from "./Header";

function MainSection() {
  return ( <section className="text-white"> 
  <h1 className="">Mikael Mårtensson</h1>
        <p className="">
          System developer with passion for active learning, problem solving,
          adaptablility and social skills
        </p>
        <About/>
      <Contact />
    </section>)
}

export default MainSection;
