import { Outlet } from "react-router-dom";

import Drawer from "../Components/drawer";

const Root = () => {
    return (
        <div>
           
     <Drawer>

    <Outlet></Outlet>
    
     </Drawer>
        </div>
    );
};

export default Root;