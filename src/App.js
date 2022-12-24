import { RouterProvider } from 'react-router-dom';
import Nav from './Components/Nav';
import PhotoCategory from './Components/PhotoCategory/PhotoCategory';
import router from './Routes/Routes';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
