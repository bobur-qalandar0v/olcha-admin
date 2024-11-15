import {
  BannerPage,
  CategoryPage,
  DashboardPage,
  ProductsPage,
} from "../pages";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <DashboardPage />,
  },
  {
    id: 2,
    path: "/products",
    element: <ProductsPage />,
  },
  {
    id: 3,
    path: "/category",
    element: <CategoryPage />,
  },
  {
    id: 4,
    path: "/banner",
    element: <BannerPage />,
  },
];
