import { Link } from "react-router";
import clsx from "clsx";
import { lang } from "@/shared/store/lg";

import "./newsCard.scss";

interface PageNewsCardProps {
  id: number;
  title: string;
  date: string;
  imageSrc?: string;
  className?: string;
}

const PageNewsCard: React.FC<PageNewsCardProps> = ({
  id,
  title,
  date,
  imageSrc,
  className,
}) => {
  return (
    <Link
      to={`/${lang}/news/item/${id}`}
      className={clsx("PageNewsCard", className)}
      data-testid="PageNewsCard"
    >
      <div className="news-image" data-testid="news-image">
        <img
          src={imageSrc}
          className="bgImage"
          alt={title}
          data-testid="news-image-img"
        />
      </div>
      <div className="news-info" data-testid="news-info">
        <span className="news-date" data-testid="news-date">
          {date}
        </span>
        <p className="news-title" data-testid="news-title">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default PageNewsCard;
