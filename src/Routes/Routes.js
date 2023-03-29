import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DayCareServices from "../Pages/Dashboard/DayCareServices";
import Homepage from "../Pages/Home/Homepage/Homepage";
import CommentSections from "../Pages/Home/RecentPosts/CommentSections";
import NeuterServices from "../Pages/Home/Services/NeuterServices";
import ShowVaccinationCareServices from "../Pages/Home/Services/ShowServices/ShowVaccinationCareServices";
import VaccinationCareServices from "../Pages/Home/Services/VaccinationCareServices";
import VeterinarianServices from "../Pages/Home/Services/VeterinarianServices";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import About from "../Pages/OthersPages/About";
import Contact from "../Pages/OthersPages/Contact";
import Service from "../Pages/OthersPages/Service";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/VeterinarianServices",
        element: (
          <PrivateRoute>
            <VeterinarianServices></VeterinarianServices>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/VeterinarianServices"),
      },
      {
        path: "/VaccinationCareServices",
        element: (
          <PrivateRoute>
            <VaccinationCareServices></VaccinationCareServices>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/VaccinationCareServices"),
      },
      {
        path: "/NeuterServices",
        element: (
          <PrivateRoute>
            <NeuterServices></NeuterServices>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/NeuterServices"),
      },
      {
        path: "/ShowVaccinationCareServices",
        element: <ShowVaccinationCareServices></ShowVaccinationCareServices>,
      },
      {
        path: "/commentSections",
        element: (
          <PrivateRoute>
            <CommentSections></CommentSections>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/comments"),
      },
      {
        path: "/daycareServices",
        element: (
          <PrivateRoute>
            <DayCareServices></DayCareServices>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/dayCareServices"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    // children: [
    //   {
    //     path: "/dashboard/login",
    //     element: <Login></Login>,
    //   },
    //   {
    //     path: "/dashboard/register",
    //     element: <Register></Register>,
    //   },
    // ],
  },
]);
