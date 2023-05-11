import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
           <div className="container mx-auto">
           <NavBar/>
            <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default Main;