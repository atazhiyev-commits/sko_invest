import Hero from "./hero";
import News from "./news";
import Helper from "./helpers";
import FAQ from "../sections/faq";
import Defense from "../sections/defense";

import "./layouts.scss";

const Layouts = () => {
  return (
    <div className="layouts">
      <Hero />
      <News />
      <Helper />
      <FAQ />
      <Defense />
    </div>
  );
};

export default Layouts;
