import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const Layout = () => {
    return (
        <div id="content">
            <Header />
            <Navigation />
            
            <Outlet />

          
        </div>
    );
};

export default Layout;