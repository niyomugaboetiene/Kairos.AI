import AboutUs from "./About";
import Home from "./Home";
import HowItWorks from "./HowItWorks";

const Entry = () => {
    return (
         <>
           <section id="home">
                <Home />
           </section>
           <section id="about">
                <AboutUs />
           </section>
            <section id="home">
                <HowItWorks />
           </section>
        </>
    )
}

export default Entry