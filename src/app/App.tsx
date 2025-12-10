import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { useA11yStore } from "./a11";
import { routeList } from "@/router/routeLayoute";
import i18n from "@/shared/config/i18n/i18n";
import { languageList } from "@/shared/config/i18n/listLang";
import { useLang } from "@/shared/store/language";
import { ScrollToTop } from "@/router/SrollTop";

import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import ErrorPage from "@/layouts/error/ErrorPage";

import "normalize.css";
import "@/styles/App.scss";

const App = () => {
  const a11yMode = useA11yStore((s: any) => s.a11yMode);
  const initA11y = useA11yStore((s: any) => s.initA11y);

  const location = useLocation().pathname.split("/")[1];

  useEffect(() => {
    initA11y();
    i18n;
  }, []);

  useEffect(() => {
    if (a11yMode) document.body.classList.add("a11y-mode");
    else document.body.classList.remove("a11y-mode");
  }, [a11yMode]);

  if (!location) return <Navigate to={useLang.lang} replace />;
  if (!languageList.includes(location)) return <ErrorPage />;

  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main className="main">
        <Routes>
          {routeList.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
