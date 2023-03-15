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
        loader: () =>
          fetch(
            "https://pet-service-server-eta.vercel.app/VeterinarianServices"
          ),
      },
      {
        path: "/VaccinationCareServices",
        element: <VaccinationCareServices></VaccinationCareServices>,
        loader: () =>
          fetch(
            "https://pet-service-server-eta.vercel.app/VaccinationCareServices"
          ),
      },
      {
        path: "/NeuterServices",
        element: <NeuterServices></NeuterServices>,
        loader: () =>
          fetch("https://pet-service-server-eta.vercel.app/NeuterServices"),
      },
      {
        path: "/commentSections",
        element: <CommentSections></CommentSections>,
        loader: () =>
          fetch("https://pet-service-server-eta.vercel.app/comments"),
      },
    ],
  },
]);
