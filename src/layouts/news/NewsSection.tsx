import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getNews } from "@/api/connect";
import { useTranslation } from "react-i18next";
import i18n from "@/shared/config/i18n/i18n";
import type { NewsItem } from "@/types/api_news_types";
import clsx from "clsx";

import Container from "@/components/container/Container";
import CarouselEmbla from "@/components/Carousel/CarouselEmbla";
import SmallImg from "@/components/newsCard/small/SmallImg";

import "./news.scss";

interface NewsProps {
  className?: string;
}

const NewsSection: React.FC<NewsProps> = ({ className }) => {
  const { t } = useTranslation();
  const [listNews, setListNews] = useState<NewsItem[]>([]);

  const countNews = 4;

  useEffect(() => {
    const connect_api = async () => {
      const res = await getNews(i18n.language).then((res) => res.data);
      setListNews(res);
    };

    connect_api();
  }, []);

  return (
    <section className={clsx("news", className)}>
      <Container>
        <header className="news__header">
          <h2 className="title-section">{t("news.title")}</h2>
          <Link to={"news"} className="btn-section">
            {t("news.button")}
          </Link>
        </header>

        <div className="news__content">
          <CarouselEmbla newsList={listNews} countNews={countNews} />

          <div className="news__other">
            <h2 className="second-title-section"> {t("news.otherNews")}: </h2>
            <div className="news__other-content">
              {listNews
                .slice(countNews, listNews.length)
                .map((newsItem, index) => {
                  if (index >= countNews) return null;
                  return (
                    <Link
                      to={`news/${newsItem.documentId}`}
                      key={index}
                      className="news__small-wrapper"
                    >
                      <SmallImg
                        className="news__small"
                        title={newsItem.title_news}
                        date={newsItem.date_news}
                        imageSrc={newsItem.first_image?.url}
                      />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;
