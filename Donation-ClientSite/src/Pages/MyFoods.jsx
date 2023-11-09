import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTable } from "react-table";
import Context from "../hook/useContext";

const MyFoods = () => {
  const [data, setData] = useState([]);
  const { user} = Context();


  useEffect(() => {
    // Fetch the API data based on the provided link (replace with your actual fetch logic)
    fetch("http://localhost:5000/featureFood")
      .then((response) => response.json())
      .then((apiData) => {
        // Filter the data based on the user's email
        const filteredData = apiData.filter(
          (item) => item.donator_email === user.email
        );
        setData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [userEmail]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "food_name",
      },
      {
        Header: "Calories",
        accessor: "calories",
      },
      {
        Header: "Protein (g)",
        accessor: "protein",
      },
      {
        Header: "Fat (g)",
        accessor: "fat",
      },
      {
        Header: "Carbs (g)",
        accessor: "carbs",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div>
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
    </div>
  );
};

export default MyFoods;
