
import { Navigate, useLocation } from "react-router-dom";
import Context from "../hook/useContext";


const PrivateRoute = ({children}) => {
    const { user, loading } = Context();
    const location = useLocation()
    console.log(location);
    if (loading) return (
        <div className="flex justify-center mx-auto mt-20">
            <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
        </div>
    )


    if (!user) {
        return <Navigate state={location.pathname} to='/login' />
    }



    return children;
};

export default PrivateRoute;