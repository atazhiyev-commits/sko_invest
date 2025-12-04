import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/shared/config/i18n/i18n";
import { getNews } from "@/api/connect";
import type { NewsItem } from "@/types/api_news_types";
import clsx from "clsx";

import Container from "@/components/container/Container";
import PageNewsCard from "@/components/newsCard/PageNewsCard";

import "./news.scss";

const News = () => {
  const { t } = useTranslation();
  const [listNews, setListNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const connect_api = async () => {
      const res = await getNews(i18n.language).then((res) => res.data);
      setListNews(res);
    };

    connect_api();
  }, []);

  return (
    listNews && (
      <section className={clsx("page-news")}>
        <Container>
          <div className="page-news__content">
            <h2 className="title-section">{t("PageNews.title")}</h2>
            <div className="page-news__wrapper">
              {listNews.map((item) => (
                <div key={item.documentId}>
                  <PageNewsCard
                    key={item.documentId}
                    id={item.documentId}
                    title={item.title_news}
                    date={item.date_news}
                    imageSrc={item.first_image.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    )
  );
};

export default News;
