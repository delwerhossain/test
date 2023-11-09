/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Foodcard = ({food}) => {
    const {_id, food_name, food_image, donator_image, donator_name,food_quantity, pickup_location, additional_note, expiration_days} = food
    return (
        <div className="h-[550px] ">
            <div className="max-w-xs rounded-md shadow-xl dark:bg-gray-900 dark:text-gray-100">
	<img src={food_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-2">
		<div className="space-y-1">
			<h2 className="text-3xl font-semibold tracki">{food_name}</h2>
			<p className="dark:text-gray-100">{additional_note}</p>
		</div>
		<div className=" grid grid-cols-2 justify-center items-center">
			<p className="text-xl font-semibold ">Quantity: {food_quantity}</p>
			<p className="text-xl font-semibold ">Expire Date:{expiration_days}</p>
		</div>


        <div className="flex space-x-1">
		<img alt="" src={donator_image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{donator_name}</a>
			<span className="text-xs dark:text-gray-400">{pickup_location}</span>
		</div>

		
	</div>
</div>
<Link to={`/featureFood/${_id}`}>
<button  className="flex items-center  justify-center w-full p-3 mb-10 font-semibold tracki rounded-md  btn bg-green-600 text-white hover:bg-green-900 ">Details</button>
</Link>
        </div>
      
        </div>
    );
};

export default Foodcard;