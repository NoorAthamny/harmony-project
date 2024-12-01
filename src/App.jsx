/* eslint-disable no-unused-vars */
import "./App.css";
import News from "./components/news/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsList from "./components/newsList/NewsList";
import Article from "./components/article/Article";

const routerPath = createBrowserRouter([
  { path: "/", element: <NewsList /> },
  { path: "/article", element: <Article /> },
]);

function App() {
  return <RouterProvider router={routerPath} />;
}

export default App;
