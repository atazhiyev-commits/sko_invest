import clsx from "clsx";
import Container from "../../components/container/Container";

import backgroundImage from "./../../assets/images/background/back.png";

import "./hero.scss";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={clsx("hero", className)}>
      <img src={backgroundImage} alt="СКО" className="bgImage" />
      <Container>
        <h1 className="hero__title">ИНВЕСТИРУЙТЕ В СЕВЕРО КАЗАХСТАНСКУЮ ОБЛАСТЬ</h1>
      </Container>
    </section>
  );
};

export default Hero;
