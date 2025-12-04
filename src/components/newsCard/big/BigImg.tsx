import clsx from "clsx";

import "./big.scss";

interface BigCardProps {
  title: string;
  date: string;
  imageSrc: string;
  className?: string;
}

const BigImg: React.FC<BigCardProps> = ({
  title,
  date,
  imageSrc,
  className,
}) => {
  return (
    <div className={clsx("BigImg", className)}>
      <div className="news-image">
        <img src={imageSrc} className="bgImage" alt={title} />
      </div>
      <div className="news-info">
        <p className="news-title">{title}</p>
        <span className="news-date">{date}</span>
      </div>
    </div>
  );
};

export default BigImg;
