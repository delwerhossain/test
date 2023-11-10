import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTable } from "react-table";
import Context from "../hook/useContext";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MyFoods = () => {
  const [data, setData] = useState([]);
  const { user } = Context();

  // State to track the item to be deleted or edited
  // const [selectedItemId, setSelectedItemId] = useState(null);

  const allData = () => {
    fetch("https://donation-server-site-psi.vercel.app/AddFoodRequest")
      .then((response) => response.json())
      .then((apiData) => {
        console.log(apiData);
        // Filter the data based on the user's email
        const filteredData = apiData.filter(
          (item) => item.email === user?.email
        );
        setData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    // Fetch the API data based on the provided link (replace with your actual fetch logic)
    allData();
  }, [user?.email]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "food_name",
      },
      {
        Header: "food_quantity",
        accessor: "food_quantity",
      },
      {
        Header: "pickup location",
        accessor: "pickup_location",
      },
      {
        Header: "Additional Note",
        accessor: "additional_note",
      },
      // {
      //   Header: "Actions",
      //   Cell: ({ row }) => (
      //     <div className="flex flex-wrap gap-3 justify-center">
      //       <button
      //         className="btn btn-error"
      //         onClick={() => handleDelete(row.original._id)}
      //       >
      //         Delete
      //       </button>
      //       <button
      //         className="btn btn-warning"
      //         onClick={() => handleEdit(row.original._id)}
      //       >
      //         Edit
      //       </button>
      //     </div>
      //   ),
      // },
    ],
    []
  );

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = withReactContent(
      Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      })
    );

    // Show a confirmation sweetalert2
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            // Hit the API to delete the item
            await axios
              .delete(
                `https://donation-server-site-psi.vercel.app/AddFoodRequest/${id}`
              )
              .then((result) => {
                console.log(result);
                if (result.data.deletedCount > 0) {
                  console.log(result.data);
                  swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  allData();
                }
              });
            // Update the state or refetch data if needed
            // setData(updatedData);
            // Display success notification
          } catch (error) {
            console.error("Error deleting item: ", error);
            // Display error notification
            swalWithBootstrapButtons.fire({
              title: "Error",
              text: "An error occurred while deleting the item.",
              icon: "error",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Display cancellation notification
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  const handleEdit = (id) => {
    // Set the selected item id for editing
    console.log(id);
    toast(id);

    // setSelectedItemId(id);
  };

  // Function to confirm and execute delete
  // const confirmDelete = () => {
  //   // Add your logic to delete the item with the selectedItemId
  //   console.log(`Delete item with ID: ${selectedItemId}`);
  //   // Clear the selectedItemId after deletion
  //   setSelectedItemId(null);
  // };

  // // Function to handle edit (you can implement your own logic)
  // const confirmEdit = () => {
  //   console.log(`Edit item with ID: ${selectedItemId}`);
  //   // Clear the selectedItemId after editing
  //   setSelectedItemId(null);
  // };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>My_Foods</title>
      </Helmet>
      <h1 className="text-6xl text-center my-3">My Foods</h1>
      <table
        className="w-full text-black"
        {...getTableProps()}
        style={{ border: "1px solid black" }}
      >
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, j) => (
                <th
                  key={j}
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "1px solid black",
                    background: "lightgray",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, j) => {
                  return (
                    <td
                      key={j}
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "1px solid black",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Confirmation modals for delete and edit */}
      {/* {selectedItemId && (
        <div>
          <div>Are you sure you want to delete this item?</div>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={() => setSelectedItemId(null)}>No</button>
        </div>
      )} */}
    </div>
  );
};

export default MyFoods;
