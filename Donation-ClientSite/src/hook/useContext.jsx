import { useContext } from "react";
import { AuthContext } from "../Auth/Provider/AuthProvider";



const Context = () => {
// useContext hook
    const all = useContext(AuthContext)
    return all;
};

export default Context;