import { type FC, useCallback } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import type { NewsItem } from "@/types/api_news_types";

import BigImg from "@/components/newsCard/big/BigImg";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "./carouselEmbla.scss";

interface Props {
  newsList: any;
  countNews: number;
  className?: string;
}

const CarouselEmbla: FC<Props> = ({ newsList, countNews, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const sizeIcon = 48;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={clsx("embla", className)} ref={emblaRef}>
      <div className="embla__container">
        {newsList
          .slice(0, countNews)
          .map((newsItem: NewsItem, index: number) => (
            <div className="embla__slide" key={index}>
              <Link to={`news/${newsItem.documentId}`}>
                <BigImg
                  className="news__big"
                  title={newsItem.title_news}
                  date={newsItem.date_news}
                  imageSrc={newsItem.first_image.url}
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
  );
};

export default CarouselEmbla;
