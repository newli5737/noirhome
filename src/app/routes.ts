import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "san-pham", Component: Products },
      { path: "san-pham/:id", Component: ProductDetail },
      { path: "du-an", Component: Projects },
      { path: "gioi-thieu", Component: About },
      { path: "blog", Component: Blog },
      { path: "lien-he", Component: Contact },
    ],
  },
]);
