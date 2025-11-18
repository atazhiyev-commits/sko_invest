import { useCallback, useEffect } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";

import Container from "../../components/container/Container";

import BigImg from "../../components/newsCard/BigImg";
import SmallImg from "../../components/newsCard/SmallImg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testNews } from "./test";

import "./news.scss";

interface NewsProps {
  className?: string;
}

const News: React.FC<NewsProps> = ({ className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const countNews = 3;
  const sizeIcon = 48;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={clsx("news", className)}>
      <Container>
        <header className="news__header">
          <h2 className="title-section">Новости</h2>
          <Link to={"/news"} className="btn-section">
            Показать все новости
          </Link>
        </header>
        <div className="news__content">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testNews.slice(0, countNews).map((newsItem, index) => (
                <div className="embla__slide" key={index}>
                  <Link to={"/link"}>
                    <BigImg
                      className="news__big"
                      title={newsItem.title}
                      date={newsItem.date}
                      imageSrc={newsItem.imageSrc}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="embla__buttons">
              <button className="embla__prev" onClick={scrollPrev}>
                <ChevronLeft size={sizeIcon} className="iconBtn" />
              </button>
              <button className="embla__next" onClick={scrollNext}>
                <ChevronRight size={sizeIcon} className="iconBtn" />
              </button>
            </div>
          </div>
          <div className="news__other">
            <h2 className="second-title-section">Другие новости: </h2>
            <div className="news__other-content">
              {testNews.slice(countNews).map((newsItem, index) => (
                <Link to={"/link"} key={index} className="news__small-wrapper">
                  <SmallImg
                    className="news__small"
                    title={newsItem.title}
                    date={newsItem.date}
                    imageSrc={newsItem.imageSrc}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default News;
