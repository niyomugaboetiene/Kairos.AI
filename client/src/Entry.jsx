import AboutUs from "./About";
import Home from "./Home";
import HowItWorks from "./HowItWorks";

const Entry = () => {
    return (
         <>
           <section id="home">
                <Home />
           </section>
           <section id="home">
                <HowItWorks />
           </section>
           <section id="about">
                <AboutUs />
           </section>
        </>
    )
}

export default Entry