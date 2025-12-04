import ErrorPage from "@/layouts/error/ErrorPage";
import Layouts from "@/layouts";
import Catalog from "@/layouts/catalog";
import News from "@/pages/news";
import PageNews from "@/pages/pageNews";

export const routeList = [
  {
    path: "/:lang",
    element: Layouts,
  },
  {
    path: "/:lang/news",
    element: News,
  },
    {
    path: "/:lang/news/:id",
    element: PageNews,
  },
  {
    path: "/:lang/catalog/*",
    element: Catalog,
  },
  {
    path: "*",
    element: ErrorPage,
  },
];
