import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayoutPage from "./pages/RootLayoutPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    children: [{ path: "", element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
