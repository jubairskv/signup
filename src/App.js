import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/SignIn";
import Signup from "./Components/Signup";
import Body from "./Components/Body";
import ForgotPassword from "./Components/ForgotPassword";
import ProtectRoute from "./Components/ProtectRoute";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/home",
      element: <ProtectRoute />,
      children:[
        {
          path:"/home",
          element:<Body/>
        }
      ]
    },
    {
      path: "forgotpassword",
      element: <ForgotPassword />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
