import clsx from "clsx";
import Container from "../../components/container/Container";

import "./news.scss";

interface NewsProps {
  className?: string;
}

const News: React.FC<NewsProps> = ({ className }) => {
  return (
    <section className={clsx("news", className)}>
      <Container>
        <header className="news__header">
          <h2 className="title-section">Новости</h2>
          <button className="btn-section">Показать все новости</button>
        </header>
        <div className="news__content"></div>
      </Container>
    </section>
  );
};

export default News;
