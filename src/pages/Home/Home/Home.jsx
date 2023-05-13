import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Contact/>
            <Features/>
            
        </div>
    );
};

export default Home;