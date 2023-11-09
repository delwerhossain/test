/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Context from "../hook/useContext";
import Swal from "sweetalert2";

const ShowFood = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  const currentDate = new Date();
  console.log(currentDate);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  const food = useLoaderData();
  const { user } = Context();
  // console.log(user);

  const {
    _id,
    food_name,
    food_image,
    donator_image,
    donator_name,
    food_quantity,
    pickup_location,
    additional_note,
    expiration_days,
  } = food;

  const handlesumbite = (e) => {
    e.preventDefault();
    const form = e.target;

    const food_name = form.food_name.value;
    const food_image = form.food_image.value;
    const food_quantity = form.food_quantity.value;
    const pickup_location = form.pickup_location.value;
    const additional_note = form.additional_note.value;
    const expiration_days = form.expiration_days.value;

    const FoodRequest = {
      _id,
      food_name,
      food_image,
      food_quantity,
      pickup_location,
      additional_note,
      expiration_days,
    };

    console.log(FoodRequest);

    fetch("http://localhost:5000/AddFoodRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(FoodRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="card p-10">
      <img
        className="h-96 object-cover w-11/12 mx-auto"
        src={food_image}
        alt=""
      />
      <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="grid grid-cols-2 justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{food_name}</h2>
            <span className="block pb-2 text-sm dark:text-gray-400">
              Quantity: {food_quantity} Person Can Served
            </span>
            <span className="block pb-2 text-sm dark:text-gray-400">
              Expaire-Date: {expiration_days}{" "}
            </span>

            <p>{additional_note}</p>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src={donator_image}
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-center md:text-left">
                {donator_name}
              </h4>
              <p className="dark:text-gray-400">{pickup_location}</p>
              <div className="flex space-x-4 ">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="GitHub"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Dribble"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                >
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10">
        <Link to={"/featureFood"}>
          {" "}
          <button className="btn  btn-warning text-white">
            <TbArrowBackUpDouble></TbArrowBackUpDouble>
            GO BACK
          </button>
        </Link>
        <button
          onClick={() => setOpenModal(true)}
          className="btn btn-warning text-white"
        >
          Food Request
        </button>

        {/* modal code */}
        <Modal show={openModal} size="3xl" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <form onSubmit={handlesumbite}>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Request For
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-around items-center">
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label value="Food Name" />
                      </div>
                      <TextInput readOnly name="food_name" value={food_name} />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label value="Food Image" />
                      </div>
                      <TextInput
                        readOnly
                        name="food_image"
                        value={food_image}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label value="Food Id" />
                      </div>
                      <TextInput readOnly name="_id" value={_id} />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label value="User Email" />
                      </div>
                      <TextInput
                        type="url"
                        readOnly
                        defaultValue={user?.email}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label for="date" value="Request Date" />
                      </div>
                      <TextInput
                        readOnly
                        name="request_date"
                        value={formattedDate}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label value="food_quantity" />
                      </div>
                      <TextInput
                        readOnly
                        name="food_quantity"
                        value={food_quantity}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label value="Pickup-LOcation" />
                      </div>
                      <TextInput
                        readOnly
                        name="pickup_location"
                        value={pickup_location}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label value="Expire Date" />
                      </div>
                      <TextInput
                        readOnly
                        name="expiration_days"
                        value={expiration_days}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label value="Additional Notes" />
                      </div>
                      <TextInput
                        name="additional_note"
                        value={additional_note}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="mb-2 block">
                        <Label htmlFor="number" value="Donation Money" />
                      </div>
                      <TextInput name="donation_money" />
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-2 justify-center items-center gap-5">
                  {/* <Button onSubmit={handlesumbite}>ADD REQUEST</Button> */}
                  <input
                    onSubmit={handlesumbite}
                    type="submit"
                    className="btn"
                    value="ADD REQUEST"
                  />
                  <Button onClick={onCloseModal}>CANCLE REQUEST</Button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ShowFood;
