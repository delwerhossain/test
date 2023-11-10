import { Helmet } from "react-helmet-async";
import Context from "../hook/useContext";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditFood = () => {
  const allData = useLoaderData();
  //   console.log(allData);
  let navigate = useNavigate();
  // const {_id, food_name, food_image, donator_image, donator_name,food_quantity, pickup_location, additional_note, expiration_days} = food
  const { user } = Context();
  console.log(user);
  const handlesumbite = (e) => {
    e.preventDefault();
    const form = e.target;

    const food_name = form.food_name.value;
    const food_image = form.food_image.value;
    const food_quantity = form.food_quantity.value;
    const pickup_location = form.pickup_location.value;
    const additional_note = form.additional_note.value;
    const expiration_days = form.expiration_days.value;
    const status = form.status.value;

    const NewFood = {
      food_name,
      food_image,
      food_quantity,
      pickup_location,
      additional_note,
      expiration_days,
      status,
      email: user?.email,
    };

    console.log(NewFood);

    fetch(`https://donation-server-site-psi.vercel.app/AddFood/${allData._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(NewFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Edit Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          navigate(`/featureFood/${allData._id}`);
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Edit Food</title>
      </Helmet>

      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={handlesumbite}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Food Inormation</p>
              <p className="text-xs">
                Food donations provide essential sustenance to people
                experiencing food insecurity, which means they lack reliable
                access to a sufficient quantity of affordable, nutritious food.
                Donated food helps alleviate hunger and provides nourishment to
                those in need.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Food name</label>
                <input
                  defaultValue={allData?.food_name}
                  name="food_name"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Food Image</label>
                <input
                  name="food_image"
                  defaultValue={allData?.food_image}
                  type="text"
                  placeholder="https://"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Food Quantity</label>
                <input
                  name="food_quantity"
                  defaultValue={allData?.food_quantity}
                  type="number"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Picup Location</label>
                <input
                  name="pickup_location"
                  defaultValue={allData?.pickup_location}
                  type="text"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Expire Date</label>
                <input
                  name="expiration_days"
                  defaultValue={allData?.expiration_days}
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Status</label>
                <input
                  value="available"
                  defaultValue={allData?.status}
                  name="status"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm">Additional Notes</label>
                <textarea
                  name="additional_note"
                  defaultValue={allData?.additional_note}
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                ></textarea>
              </div>
            </div>
          </fieldset>

          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Profile</p>
              <p className="text-xs">Adipisci fuga autem eum!</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">User</label>
                <input
                  readOnly
                  value={user.displayName}
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full">
                <div className="flex items-center space-x-2 ">
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-10 h-10 m-3 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                  />
                  <button className="btn">Add Food</button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default EditFood;
