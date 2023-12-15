import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import RootLayoutPage from "./pages/RootLayoutPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TVSeriesPage from "./pages/TVSeriesPage";
import BookmarkedPage from "./pages/BookmarkedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/movies", element: <MoviesPage /> },
      { path: "/series", element: <TVSeriesPage /> },
      { path: "/bookmarked", element: <BookmarkedPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
