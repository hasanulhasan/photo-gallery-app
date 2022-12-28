import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthProvider/Login";
import About from "../Components/About/About";
import AnimalDetails from "../Components/AnimalDetails/AnimalDetails";
import AnimalCategory from "../Components/PhotoCategory/AnimalCategory";
import PlantCategory from "../Components/PlantCategory/PlantCategory";
import PlantDetails from "../Components/PlantCategory/PlantDetails";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <AnimalCategory></AnimalCategory>
      },
      {
        path: '/plantcategory',
        element: <PlantCategory></PlantCategory>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/details/:id',
        element: < AnimalDetails ></AnimalDetails >,
        loader: ({ params }) => fetch(`https://photo-gallery-app-server.vercel.app/animals/${params.id}`)
      },
      {
        path: '/plantDetails/:id',
        element: <PlantDetails></PlantDetails>,
        loader: ({ params }) => fetch(`https://photo-gallery-app-server.vercel.app/plants/${params.id}`)
      }
    ]
  }
])
export default router;