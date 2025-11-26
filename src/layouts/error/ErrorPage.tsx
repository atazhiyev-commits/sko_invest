import type { FC } from "react";
import clsx from "clsx";
import Container from "@/components/container/Container";

import "./errorPage.scss";

interface Props {
  className?: string;
}

const ErrorPage: FC<Props> = ({ className }) => {
  return (
    <section className={clsx("errorPage", className)}>
      <Container>
        <h2 className="title-section">
          Page Not Found <br /> 404
        </h2>
      </Container>
    </section>
  );
};

export default ErrorPage;
