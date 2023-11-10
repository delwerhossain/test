import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import FeatureFood from "../Pages/FeatureFood";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/AddFood";
import Contract from "../Pages/Contract";
import Home from "../Pages/Home";
import ShowFood from "../Pages/ShowFood";
import ErrorPage from "../Pages/ErrorPage";
import MyFoods from "../Pages/MyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest";
import PrivateRoute from "../Layouts/PrivateRoute";
import EditFood from "../Pages/editFood";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "featureFood",
        element: <FeatureFood></FeatureFood>,
      },
      {
        path: "myFood",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "featureFood/:id",
        element: (
          <PrivateRoute>
            <ShowFood></ShowFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://donation-server-site-psi.vercel.app/featureFood/${params.id}`
          ),
      },
      {
        path: "editFood/:id",
        element: (
          <PrivateRoute>
            <EditFood></EditFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://donation-server-site-psi.vercel.app/featureFood/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "contract",
        element: <Contract></Contract>,
      },
    ],
  },
]);

export default Router;
