import Header from "./header";
import Hero from "./hero";
import News from "./news";

import "./layouts.scss";
import Helper from "./helpers";
import FAQ from "../sections/faq";
import Defense from "../sections/defense";

const Layouts = () => {
  return (
    <div className="layouts">
      <Header />
      <Hero />
      <News />
      <Helper />
      <FAQ />
      <Defense />
    </div>
  );
};

export default Layouts;
