import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Drawer from "../Components/drawer";
import { useEffect } from "react";

const Root = () => {
      useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <div>
           
     <Drawer>

    <Outlet></Outlet>
    
     </Drawer>
        </div>
    );
};

export default Root;