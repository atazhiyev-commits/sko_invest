import { useEffect } from "react";
import { BrowserRouter } from "react-router";
import { useA11yStore } from "./a11";
import i18n from "../shared/config/i18n/i18n";

import Layouts from "./../layouts";

import "./../styles/global.css";

const App = () => {
  const a11yMode = useA11yStore((s) => s.a11yMode);
  const initA11y = useA11yStore((s) => s.initA11y);

  useEffect(() => {
    initA11y();
  }, []);

  useEffect(() => {
    if (a11yMode) document.body.classList.add("a11y-mode");
    else document.body.classList.remove("a11y-mode");
  }, [a11yMode]);

  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
};

export default App;
