import Banner from "../Components/Banner";
import HomeLay2 from "../Components/HomeSections/HomeLay2";
import Contract from "../Pages/Contract";
import About from "./About";
import Foodcard from "./Foodcard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [homeFood, setHomeFood] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/homeFood").then((res) => {
      const sortedHomeFood = res.data.sort(
        (a, b) => b.food_quantity - a.food_quantity
      );
      setHomeFood(sortedHomeFood);
      console.log(homeFood);
    });
  }, []);

  // const food = useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <section className="grid mx-auto justify-center items-center">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className="grid grid-cols-3 justify-center items-center mx-auto gap-10 my-10">
          {homeFood.slice(0, 6).map((food) => (
            <Foodcard key={food?._id} food={food}></Foodcard>
          ))}
        </div>
        <div className="grid justify-center items-center">
          <button className="btn btn-warning text-white ">See All</button>
        </div>
      </section>
      <HomeLay2></HomeLay2>
      <About></About>
      <Contract></Contract>
    </div>
  );
};

export default Home;
