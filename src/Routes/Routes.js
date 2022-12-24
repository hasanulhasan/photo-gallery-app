import { createBrowserRouter } from "react-router-dom";
import AnimalDetails from "../Components/AnimalDetails/AnimalDetails";
import About from "../Components/AnimalDetails/AnimalDetails";
import PhotoCategory from "../Components/PhotoCategory/PhotoCategory";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <PhotoCategory></PhotoCategory>
      },
      {
        path: '/details/:id',
        element: <AnimalDetails></AnimalDetails>
      }
    ]
  }
])
export default router;