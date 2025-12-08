import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import useGetNews from "@/shared/store/newsCatalog";
import type { storeType } from "@/types/api_news_types";
import { lang } from "@/shared/store/lg";
import clsx from "clsx";

import Container from "@/components/container/Container";
import PageNewsCard from "@/components/newsCard/PageNewsCard";
import Pagination from "@mui/material/Pagination";
import ErrorPage from "@/layouts/error/ErrorPage";
import NewsSkeleton from "@/components/Skeleton/newsSkeleton";

import "./news.scss";

const News = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const { news, fetchNews } = useGetNews() as storeType;
  const countPage = news?.meta?.pagination?.pageCount;
  const navigate = useNavigate();

  const activePage = Number(useParams().page);

  useEffect(() => {
    if (activePage < 1) {
      navigate(`/${lang}/news/1`);
      return;
    }

    const loadData = async () => {
      setIsLoading(true);
      try {
        await fetchNews(activePage);
      } catch (error) {
        console.error("Ошибка при загрузке новостей", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [fetchNews, activePage]);

  return (
    <section className={clsx("page-news")}>
      <Container>
        {isLoading ? (
          <NewsSkeleton />
        ) : (
          <>
            {news?.data && news.data.length > 0 ? (
              <div className="page-news__content">
                <h2 className="title-section">{t("PageNews.title")}</h2>
                <div className="page-news__wrapper">
                  {news.data.map((item: any) => (
                    <Fragment key={item.documentId}>
                      <PageNewsCard
                        id={item.documentId}
                        title={item.title_news}
                        date={item.date_news}
                        imageSrc={item.first_image.url}
                      />
                    </Fragment>
                  ))}
                </div>
                <div className="pagination-content">
                  <Pagination
                    shape="rounded"
                    count={countPage}
                    page={activePage}
                    onChange={(e, page) => navigate(`/${lang}/news/${page}`)}
                  />
                </div>
              </div>
            ) : (
              <div className="not-found-state">
                <ErrorPage />
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
};

export default News;
