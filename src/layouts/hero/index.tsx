import clsx from "clsx";
import Container from "../../components/container/Container";

import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

import "./hero.scss";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={clsx("hero", className)}>
      <Container>
        <div className="hero__content">
          <h1 className="hero__title">
            ИНВЕСТИРУЙТЕ В СЕВЕРО КАЗАХСТАНСКУЮ ОБЛАСТЬ
          </h1>

          <nav className="hero__content-nav">
          <h2 className="title-section">Я ХОЧУ</h2>
            <ul className="hero__ul">
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />Получить земельный участок в аренду без торгов</Link>
              </li>
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />Посмотреть меры поддержки </Link>
              </li>
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />Выбрать место для реализации проекта</Link>
              </li>
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />Реализовать инвестиционный проект</Link>
              </li>
              <li className="item-hero">
                <Link to={"/"}><ChevronRight />Выбрать место для реализации проекта</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
