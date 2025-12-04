import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
import { getIdNews } from "@/api/connect";
import i18n from "@/shared/config/i18n/i18n";
import type { NewsItem } from "@/types/api_news_types";
import Container from "@/components/container/Container";

import "./pagenews.scss";

const PageNews = () => {
  const { id } = useParams();
  const [pageNews, setPageNews] = useState<NewsItem>();

  useEffect(() => {
    const connect_api = async () => {
      const res = await getIdNews(id as string, i18n.language).then(
        (res) => res.data
      );
      setPageNews(res);
    };

    connect_api();
  }, []);

  return (
    pageNews && (
      <section className="pageNews">
        <Container className="pageContainer">
          <header className="pageNews__header">
            <h2 className="pageNews__header-title">{pageNews.title_news}</h2>
            <p className="pageNews__header-date">{pageNews.date_news}</p>
          </header>
          <div className="pageNews__image">
            <img src={pageNews.first_image.url} alt={pageNews.title_news} />
          </div>
          <div className="markdown-container">
            <ReactMarkdown>{pageNews.description}</ReactMarkdown>
          </div>
        </Container>
      </section>
    )
  );
};

export default PageNews;
