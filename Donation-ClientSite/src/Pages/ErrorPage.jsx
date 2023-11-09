import Lottie from "lottie-react";
import ErrorPageAnimation from "../../public/errorPage.json"

const ErrorPage = () => {
    return (
        <div className="w-8/12 grid justify-center items-center mx-auto">
            
            <Lottie animationData={ErrorPageAnimation}></Lottie>
           <div className="grid justify-center items-center">
           <button className="btn btn-outline btn-info">BACK</button>
           </div>
        </div>
    );
};

export default ErrorPage;