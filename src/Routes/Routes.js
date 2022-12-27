import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthProvider/Login";
import AnimalDetails from "../Components/AnimalDetails/AnimalDetails";
import AnimalCategory from "../Components/PhotoCategory/AnimalCategory";
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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/details/:id',
        element: < AnimalDetails ></AnimalDetails >,
        loader: ({ params }) => fetch(`http://localhost:5000/animals/${params.id}`)
      }
    ]
  }
])
export default router;