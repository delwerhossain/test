/* eslint-disable no-unused-vars */
import registerAnimation from '../../public/registerAnimation.json';
import Lottie from 'lottie-react';
import {  useState } from 'react';
import  { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../hook/useContext';
import Swal from 'sweetalert2';


const Register = () => {
	const [ShowPassword,setShowPassword]=useState(false);const {createUser,updeateProfile}=Context();
	const navigate = useNavigate()
	const Handleregister = (e)=>{
		e.preventDefault()
	const emailvalue = e.target.email.value;
	const namevalue = e.target.name.value;
	const passwordvalue = e.target.password.value;
	const photoUrlValue = e.target.photoUrl.value;
	
	// if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/.test(passwordvalue)) {
	// 	console.log("Valid password:", passwordvalue);
		
	//   } else {
	   
	// 	// toast.error("Password must contain at least one letter and one number, and be at least 8 characters long.");
	//    alert("Password must contain at least one letter and one number, and be at least 8 characters long.");
		
	//   }
	createUser(emailvalue, passwordvalue)
		  .then((result) => {
			console.log(result.user);
		 
	alert('You Have SuccessFully Create Account')
	
	// const email={emailvalue};
	updeateProfile(namevalue,photoUrlValue)
			.then((result) => {
				// toast.success("User Created SuccessFully")
 navigate('/')
 }).catch((error) => {
				// An error occurred 
				// toast.error(error.message)
			  });
			  
	
		  })
		  .catch(error => {
			console.log(error.message);
			// toast.error(error.message);
		  });
	console.log(emailvalue,passwordvalue,namevalue,photoUrlValue);
}
	
    return (
		<div className='grid grid-cols-1 gap-5 w-10/12 my-5 mx-auto lg:grid-cols-2 justify-center text-center'>
		<div className=" mt-10 shadow-xl border-2  w-full max-w-sm p-4 bg-white  border-gray-200 rounded-lg   sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 md:ml-52">
                    <form className="space-y-6" onSubmit={Handleregister} >
                      <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create Account</h5>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input  name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input   type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your PhotoUrl</label>
                            <input   type="url" name="PhotoUrl" id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" PhotoUrl" required />
                        </div>
                        <div>
           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type={ShowPassword ? 'text' : 'password'}
         name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              <span className="relative text-xl  -top-8 left-60"    onClick={() => setShowPassword(!ShowPassword)} >
                       
                       {
                    ShowPassword ? <FaEye></FaEye>
                    : <FaEyeSlash></FaEyeSlash> 
                    }
        
                   </span>
                </div>
              
                        <button  type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                            You have Already registered? <Link to='/login'
                            className="text-blue-700 hover:underline dark:text-blue-500">Login Now</Link>
                        </div>
                    </form>
                </div>
<div className="w-3/4 grid justify-center items-center mx-auto">
<Lottie className="w-3/4" animationData={registerAnimation}></Lottie>
</div>
	</div>
    );
};

export default Register;