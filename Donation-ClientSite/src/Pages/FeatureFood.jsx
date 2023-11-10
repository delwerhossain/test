import axios from "axios";
import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
import { Helmet } from "react-helmet-async";

const FeatureFood = () => {
  const [featureFood, setFeatureFood] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // filter data by search using name  // Filter featureFood array by food_name using searchText
    if (searchText) {
      const filteredFood = featureFood.filter((food) =>
        food.food_name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFeatureFood(filteredFood);
    } else {
      allData();
    }
  };
  const allData = () => {
    axios
      .get("https://donation-server-site-psi.vercel.app/featureFood")
      .then((res) => {
        const sortedHomeFood = res.data.sort(
          (a, b) => a.expiration_days - b.expiration_days
        );
        setFeatureFood(sortedHomeFood);
        console.log(featureFood);
      });
  };
  useEffect(() => {
    allData();
  }, []);
  return (
    <>
      {" "}
      <Helmet>
        <title>Foods</title>
      </Helmet>
      <div className="input-group flex justify-center">
        <input
          type="text"
          placeholder="Search…"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleSearch}
          className="input text-primary font-semibold input-bordered "
        />
        <button onClick={handleSearch} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-3 justify-center items-center mx-auto gap-10 my-10">
        {featureFood.map((food) => (
          <Foodcard key={food?._id} food={food}></Foodcard>
        ))}
      </div>
    </>
  );
};

export default FeatureFood;
