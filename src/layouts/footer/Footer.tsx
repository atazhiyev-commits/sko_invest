import type { FC } from "react";
import clsx from "clsx";

import FooterUp from "./FooterTop";
import FooterBottom from "./FooterBottom";

import "./footer.scss";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <section className={clsx("footer", className)}>
      <FooterUp />
      <FooterBottom />
    </section>
  );
};

export default Footer;
