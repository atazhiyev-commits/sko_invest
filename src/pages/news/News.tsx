import type { FC } from "react";
import clsx from "clsx";

import "./news.scss";
import Container from "../../components/container/Container";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const News: FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx("page-news", className)}>
      <Container>
        <h2 className="title-section">News List</h2>
      </Container>
    </section>
  );
};

export default News;
