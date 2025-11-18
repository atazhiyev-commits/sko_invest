import clsx from "clsx";

import HeaderUp from "./HeaderUp";
import HeaderDown from "./HeaderDown";
import Container from "../../components/container/Container";

import "./header.scss";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 0);
    }
  });

  return (
    <header className={clsx("header", className)}>
      <Container>
        <HeaderUp />
        <HeaderDown />
      </Container>
    </header>
  );
};

export default Header;
