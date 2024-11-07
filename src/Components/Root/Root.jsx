import { Outlet } from "react-router-dom";

import Odc1 from "../Odc/Odc1";



const Root = () => {
    return (
        <div>

            <Odc1></Odc1>

            <Outlet></Outlet>
     

            
        </div>
    );
};

export default Root;