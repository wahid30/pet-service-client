import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Homepage from "../Pages/Home/Homepage/Homepage";
import CommentSections from "../Pages/Home/RecentPosts/CommentSections";
import NeuterServices from "../Pages/Home/Services/NeuterServices";
import VaccinationCareServices from "../Pages/Home/Services/VaccinationCareServices";
import VeterinarianServices from "../Pages/Home/Services/VeterinarianServices";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

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
        path: "/VeterinarianServices",
        element: <VeterinarianServices></VeterinarianServices>,
        loader: () => fetch("http://localhost:5000/VeterinarianServices"),
      },
      {
        path: "/VaccinationCareServices",
        element: <VaccinationCareServices></VaccinationCareServices>,
        loader: () => fetch("http://localhost:5000/VaccinationCareServices"),
      },
      {
        path: "/NeuterServices",
        element: <NeuterServices></NeuterServices>,
        loader: () => fetch("http://localhost:5000/NeuterServices"),
      },
      {
        path: "/commentSections",
        element: <CommentSections></CommentSections>,
        loader: () => fetch("http://localhost:5000/comments"),
      },
    ],
  },
]);
