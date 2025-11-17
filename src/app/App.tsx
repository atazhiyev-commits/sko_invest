import { BrowserRouter } from "react-router";

import Layouts from "./../layouts";

import "./../styles/global.css"

const App = () => {
  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
};

export default App;
