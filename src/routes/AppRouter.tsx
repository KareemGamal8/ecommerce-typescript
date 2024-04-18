import BaseLayout from "@design-system/layouts/BaseLayout";
import ErrorPage from "@design-system/pages/ErrorPage";
import AboutUsPage from "@modules/about-us/pages/AboutUsPage";
import LoginPage from "@modules/auth/pages/LoginPage";
import RegisterPage from "@modules/auth/pages/RegisterPage";
import CategoriesPage from "@modules/categories/pages/CategoriesPage";
import HomePage from "@modules/home/pages/HomePage";
import ProductsPage from "@modules/products/pages/ProductsPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/categories/products/:prefix",
        element: <ProductsPage />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category Not Found",
              status: 400,
            });
          }

          return true;
        },
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
