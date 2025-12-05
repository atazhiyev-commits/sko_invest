import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useGetNews from "@/shared/store/newsCatalog";
import type { storeType } from "@/types/api_news_types";
import clsx from "clsx";

import Container from "@/components/container/Container";
import PageNewsCard from "@/components/newsCard/PageNewsCard";

import "./news.scss";

const News = () => {
  const { t } = useTranslation();
  const { news, fetchNews } = useGetNews() as storeType;


  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    news.data && (
      <section className={clsx("page-news")}>
        <Container>
          <div className="page-news__content">
            <h2 className="title-section">{t("PageNews.title")}</h2>
            <div className="page-news__wrapper">
              {news.data.map((item: any) => (
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
