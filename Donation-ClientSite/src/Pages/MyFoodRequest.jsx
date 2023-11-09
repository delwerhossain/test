import axios from "axios";
import { Checkbox, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyFoodRequest = () => {
  const [requestFood, setRequestFood] = useState([]);
  const [requestFoodcards, setRequestFoodCards] = useState([]);

  // useEffect
  useEffect(() => {
    axios.get("http://localhost:5000/AddFoodRequest").then((res) => {
      setRequestFood(res.data);
      console.log(requestFood);
    });
  }, []);

  // delete request
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/AddFoodRequest/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your Product has been deleted.", "success");
            const remaining = requestFoodcards.filter(
              (card) => card._id !== _id
            );
            setRequestFoodCards(remaining);
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>My_Food_Request</title>
      </Helmet>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Food Name</Table.HeadCell>
          <Table.HeadCell>Donar Name</Table.HeadCell>
          <Table.HeadCell>Pickup Location</Table.HeadCell>
          <Table.HeadCell>Expire Date</Table.HeadCell>
          <Table.HeadCell>Request Date</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">DELETE</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {requestFood.map((food) => (
            <div key={food?._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {food.food_name}
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <button onClick={handleDelete}>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      DELETE
                    </a>
                  </button>
                </Table.Cell>
              </Table.Row>
            </div>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyFoodRequest;
