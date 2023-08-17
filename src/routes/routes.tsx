import { createBrowserRouter } from "react-router-dom";
import App from "./apps/App";
import Dashboard from "./apps/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]);

export default router