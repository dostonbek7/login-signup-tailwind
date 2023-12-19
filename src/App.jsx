import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout
import MainLayout from "./layout/MainLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'signup',
      element:<Signup/>
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
